import { Timestamp } from "firebase-admin/firestore";
import { ContactMessageBase } from "../../src/types";

export type ContactMessage = ContactMessageBase<Timestamp>;
