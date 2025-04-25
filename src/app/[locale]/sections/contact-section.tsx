"use client";

import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useTranslations } from "next-intl";
import { UserLocation } from "@/types";
import SlideIn from "@/components/slide-in";
import clsx from "clsx";

// in milliseconds
const STATUS_TIMEOUT = 5000;

export default function ContactSection() {
  const t = useTranslations("homePage.contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{
    error: string | null;
    success: string | null;
  }>({
    error: null,
    success: null,
  });
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const MESSAGES = {
    REQUIRED_FIELDS: "All fields are required!",
    SUCCESS: "Message sent successfully!",
    ERROR: "Failed to send message. Please try again.",
  };
  const fetchLocation = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_IP_INFO_TOKEN;
    const url = `https://ipinfo.io?token=${API_KEY}`;
    try {
      const response = await fetch(url);
      const locationData = await response.json();
      const newLocation = {
        ip: locationData.ip,
        city: locationData.city,
        region: locationData.region,
        country: locationData.country,
      };
      setLocation(newLocation);
      return newLocation;
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const hannibotField = formData.get("nickname");
    if (hannibotField) {
      // If the honeypot field is filled, it's likely a bot
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        error: MESSAGES.REQUIRED_FIELDS,
        success: null,
      });
      setTimeout(
        () => setStatus({ error: null, success: null }),
        STATUS_TIMEOUT,
      );
      setSubmitting(false);
      return;
    }

    try {
      // import firebase here to avoid server-side rendering issues
      const { db } = await import("@/services/firebase");
      // It's ok to continue without location
      const currentLocation = location || (await fetchLocation());
      const messagesRef = collection(db, "messages");
      await addDoc(messagesRef, {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        timestamp: serverTimestamp(),
        location: currentLocation,
      });
      setStatus({
        error: null,
        success: MESSAGES.SUCCESS,
      });
      setTimeout(
        () => setStatus({ error: null, success: null }),
        STATUS_TIMEOUT,
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log({ error });
      setStatus({
        error: MESSAGES.ERROR,
        success: null,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-blue-100 px-8 pt-8 pb-10 lg:pt-16 lg:pb-25">
      <SlideIn
        as="h2"
        className="max-w-5xl mx-auto text-4xl text-center lg:text-left font-medium"
      >
        {t("headline")}
      </SlideIn>
      <SlideIn
        as="form"
        onSubmit={handleSubmit}
        className="lg:space-y-6 space-y-3 max-w-5xl mx-auto mt-13"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="lg:text-lg bg-white lg:pl-10 p-5 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
            type="text"
            value={name}
            placeholder={t("nameInput")}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="lg:text-lg bg-white lg:pl-10 p-5 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
            type="email"
            value={email}
            placeholder={t("emailInput")}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          className="lg:text-lg bg-white w-full lg:pt-12 lg:pl-10 p-5 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={t("messageInput")}
          rows={3}
        />
        {/* Honeypot field */}
        <input
          className="hidden"
          type="text"
          name="nickname"
          autoComplete="off"
        />
        <div className="lg:justify-end flex justify-center mt-3">
          <button
            className={clsx(
              "lg:p-3 lg:w-1/4 lg:text-xl w-1/2 px-6 py-2 bg-gradient-to-r from-[#2d44ad] to-[#9ec5f7] text-white rounded-xl font-bold",
              submitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            )}
            disabled={submitting}
          >
            {t("actionButton.label")}
          </button>
        </div>
        {status.error && (
          <div className="text-red-500 font-medium text-center">
            {status.error}
          </div>
        )}
        {status.success && (
          <div className="text-green-600 font-medium text-center">
            {status.success}
          </div>
        )}
      </SlideIn>
    </div>
  );
}
