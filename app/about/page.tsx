"use client";

import Card from "../components/Card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface dark:bg-surface-dark items-center flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-6 text-align-center text-text-base dark:text-text-base-dark">Me In a Nutshell</h1>
      <Card/>
    </main>
  );
}
