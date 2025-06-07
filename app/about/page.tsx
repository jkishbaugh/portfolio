"use client";

import Card from "../components/Card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-dark-background items-center flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-6 text-align-center">Me In a Nutshell</h1>
      <Card/>
    </main>
  );
}
