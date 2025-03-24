"use client";
import React, { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import data from "@/content/home.json";
export default function ContactSection() {
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
    if (location) return;
    const API_KEY = process.env.NEXT_PUBLIC_IP_INFO_TOKEN;
    const url = `https://ipinfo.io?token=${API_KEY}`;

    try {
      const response = await fetch(url);
      const locationData = await response.json();
      setLocation({
        ip: locationData.ip,
        city: locationData.city,
        region: locationData.region,
        country: locationData.country,
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
      setStatus({
        error: MESSAGES.REQUIRED_FIELDS,
        success: null,
      });
      setTimeout(() => setStatus({ error: null, success: null }), 5000);
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
      setStatus({
        error: null,
        success: MESSAGES.SUCCESS,
      });
      setTimeout(() => setStatus({ error: null, success: null }), 5000);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus({
        error: MESSAGES.ERROR,
        success: null,
      });
      setTimeout(() => setStatus({ error: null, success: null }), 5000);
    }
  };
  return (
    <div className="bg-blue-100 p-8 w-auto h-auto">
      <div className="text-4xl font-medium text-center mt-8">
        {data.contact.headline}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-13 w-full">
          <input
            className="bg-white md:text-[17px] w-full h-17 pl-6 p-3 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
            type="text"
            value={name}
            placeholder={data.contact.items.nameInput}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-white md:text-[17px] w-full h-17 pl-6 p-3 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
            type="email"
            value={email}
            placeholder={data.contact.items.emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          className="bg-white md:text-[17px] w-full h-30 pl-6 pt-10 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={data.contact.items.messageInput}
          rows={4}
        />
        <div className="text-center px-4">
          <button
            className="w-1/2 sm:w-1/5 h-10 sm:h-12 bg-gradient-to-r from-[#2d44ad] to-[#9ec5f7] px-6 py-2 text-white rounded-lg mt-6 font-bold"
            type="submit"
          >
            {data.contact.items.actionButton.label}
          </button>
        </div>
        {status.error && <div className="text-red-500"> {status.error} </div>}
        {status.success && (
          <div className="text-black-500"> {status.success} </div>
        )}
      </form>
    </div>
  );
}
