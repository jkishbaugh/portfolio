"use client";

import ContactForm from "../components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-surface dark:bg-bg-surface-dark">
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
      <ContactForm />
    </main>
  );
}
