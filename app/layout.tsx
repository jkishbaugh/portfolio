import { Inter } from "next/font/google";
import "@/app/globals.css";

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

        {children}
      </body>
    </html>
  );
}
