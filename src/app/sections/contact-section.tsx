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

    try {
      let currentLocation = location;
      if (!currentLocation) {
        currentLocation = await fetchLocation();
        if (!currentLocation) {
          console.log("Failed to fetch location");
          return;
        }
      }
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
    <div className="bg-blue-100 lg:pt-10 lg:pb-25 px-8 py-8">
      <div className="max-w-5xl mx-auto text-4xl text-center lg:text-left font-medium">
        <h2>{data.contact.headline}</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="lg:space-y-6 space-y-3 max-w-5xl mx-auto mt-13"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="lg:text-lg bg-white lg:pl-10 p-5 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
            type="text"
            value={name}
            placeholder={data.contact.nameInput}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="lg:text-lg bg-white lg:pl-10 p-5 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
            type="email"
            value={email}
            placeholder={data.contact.emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          className="lg:text-lg bg-white w-full lg:pt-12 lg:pl-10 p-5 text-sm focus:outline-none focus:border-blue-500 placeholder-black"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder={data.contact.messageInput}
          rows={3}
        />
        <div className="lg:justify-end flex justify-center mt-3">
          <button className="lg:p-3 lg:w-1/4 lg:text-xl w-1/2 px-6 py-2 bg-gradient-to-r from-[#2d44ad] to-[#9ec5f7] text-white rounded-xl font-bold">
            {data.contact.actionButton.label}
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
