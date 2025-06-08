"use client";

import ContactForm from "../components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-dark-background">
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
      <ContactForm />
    </main>
  );
}
