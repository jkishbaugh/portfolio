import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "./header";
import Hero from "./hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Justin Kishbaugh | Portfolio",
  description: "",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-100 text-neutral dark:bg-dark-base-100 dark:text-dark-neutral`}>
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  );
}
