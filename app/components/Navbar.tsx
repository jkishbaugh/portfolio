import Link  from "next/link";
import Image from "next/image";
import logo from "@/app/assets/JK_Dark.png";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-sub dark:bg-bg-surface-dark backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-warning dark:text-text-warning-dark">
            <Image
                src={logo}
                alt="JK Logo"
                width={150}
                height={150}
                className="h-10 w-auto"
                priority
              />
          </Link>
          <div className="flex space-x-8">
            <Link href="/about" className="text-base dark:text-text-base-dark hover:text-text-link dark:hover:text-text-link-dark transition">
              About
            </Link>
            <Link href="/blog" className="text-base  dark:text-text-base-dark hover:text-text-link dark:hover:text-text-link-dark transition">
              Blog
            </Link>
            <Link href="/contact" className="text-base  dark:text-text-base-dark hover:text-text-link dark:hover:text-text-link-dark transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

)}