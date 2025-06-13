import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className={`${inter.className} bg-bg-surface dark:bg-bg-surface-dark text-text-base dark:text-base-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
