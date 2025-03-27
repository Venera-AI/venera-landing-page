import { onDocumentCreated } from "firebase-functions/firestore";
import { initializeApp } from "firebase-admin/app";
import { ContactMessage } from "./types";

initializeApp();

const MESSAGES_COLLECTION_DOC = "messages/{messageId}";
const MAILERSEND_API_URL = "https://api.mailersend.com/v1/email";

export const sendContactMessageNotification = onDocumentCreated(
  MESSAGES_COLLECTION_DOC,
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
      console.log("No data associated with the event");
      return;
    }
    const message = snapshot.data() as ContactMessage;

    const templateId = process.env.MAILERSEND_TEMPLATE_ID;
    const fromEmail = process.env.CONTACT_NOTIFICATION_SENDER_EMAIL;
    const toEmail = process.env.CONTACT_NOTIFICATION_RECIPIENT_EMAIL;

    const emailPayload = {
      from: { email: fromEmail },
      to: [{ email: toEmail }],
      template_id: templateId,
      personalization: [
        {
          email: toEmail,
          data: {
            name: message.name,
            email: message.email,
            message: message.message,
          },
        },
      ],
    };

    try {
      const response = await fetch(MAILERSEND_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
        },
        body: JSON.stringify(emailPayload),
      });
      if (!response.ok) {
        const error: unknown = await response.json();
        console.error({ error });
        throw new Error(`${response.statusText}. Failed to send email.`, {
          cause: error,
        });
      }
      console.log(`Email sent successfully to ${toEmail}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        if (error.cause) {
          console.error("Cause:", error.cause);
        }
      } else {
        console.error("Failed to send email", error);
      }
    }
  },
);
