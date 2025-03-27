import { Timestamp } from "firebase/firestore";

export interface UserLocation {
  ip: string;
  city: string;
  region: string;
  country: string;
}

/**
 * Type of timestamp could be either firebase-admin Timestamp or firebase Timestamp
 * depending on the environment where the code is running.
 */
export interface ContactMessageBase<TTimestamp> {
  name: string;
  email: string;
  message: string;
  timestamp: TTimestamp;
  location: UserLocation;
}

export type ContactMessage = ContactMessageBase<Timestamp>;
