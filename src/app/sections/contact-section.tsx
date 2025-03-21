"use client";
import React, { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const MESSAGES = {
    REQUIRED_FIELDS: "All fields are required!",
    SUCCESS: "Message sent successfully!",
    ERROR: "Failed to send message. Please try again.",
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

    try {
      const messagesRef = collection(db, "messages");
      await addDoc(messagesRef, {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        timestamp: serverTimestamp(),
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

  return (
    <div className="bg-blue-100 p-8 w-full h-screen">
      <div className="text-4xl font-medium text-center mt-13">Contact us</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4 mt-13">
          <input
            className="bg-white md:text-[17px] text-black w-full h-17 pl-6 p-3 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-black"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-white md:text-[17px] text-black w-full h-17 pl-6 p-3 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-black"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="bg-white md:text-[17px] w-full h-30 pl-6 pt-10 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-black"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Message"
          rows={4}
        />
        <div className="text-center px-4">
          <button
            className="w-1/2 sm:w-1/3 h-10 sm:h-10 bg-gradient-to-r from-[#2d44ad] to-[#9ec5f7] px-6 py-2 text-white rounded-md mt-6"
            type="submit"
          >
            Send
          </button>
        </div>
        {error && <div className="text-red-500"> {error} </div>}
        {success && <div className="text-black-500"> {success} </div>}
      </form>
    </div>
  );
}
