"use client";
import React, { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import data from "@/content/home.json";
export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [location, setLocation] = useState<{
    ip: string;
    city: string;
    region: string;
    country: string;
  } | null>(null);

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
      const locationsData = await response.json();
      setLocation({
        ip: locationsData.ip,
        city: locationsData.city,
        region: locationsData.region,
        country: locationsData.country,
      });
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError(MESSAGES.REQUIRED_FIELDS);
      setTimeout(() => setError(null), 5000);
      return;
    }
    await fetchLocation();
    try {
      const messagesRef = collection(db, "messages");
      await addDoc(messagesRef, {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        timestamp: serverTimestamp(),
        location: location,
      });

      setSuccess(MESSAGES.SUCCESS);
      setTimeout(() => setSuccess(null), 5000);

      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError(MESSAGES.ERROR);
      setTimeout(() => setError(null), 5000);
    }
  };

  const inputClass =
    "bg-white md:text-[17px] w-full pl-6 p-6 text-sm focus:outline-none focus:border-blue-500 placeholder-black";
  return (
    <div className="bg-blue-100 p-8 w-auto h-auto">
      <div className="text-4xl font-medium text-center mt-13">
        {data.contact.headline}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-13 w-full">
          <input
            className={inputClass}
            type="text"
            value={name}
            placeholder={data.contact.items.nameInput}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={inputClass}
            type="email"
            value={email}
            placeholder={data.contact.items.emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          className={inputClass}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={data.contact.items.messageInput}
          rows={4}
        />
        <div className="text-center px-4">
          <button
            className="w-1/2 sm:w-1/5 h-10 sm:h-12 bg-gradient-to-r from-[#2d44ad] to-[#9ec5f7] px-6 py-2 text-white rounded-lg mt-6"
            type="submit"
          >
            {data.contact.items.actionButton.label}
          </button>
        </div>
        {error && <div className="text-red-500"> {error} </div>}
        {success && <div className="text-black-500"> {success} </div>}
      </form>
    </div>
  );
}
