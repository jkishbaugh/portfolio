import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="py-10 border-t border-gray-200 dark:border-gray-800" role="contentinfo">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Justin Kishbaugh. All rights reserved.</p>
            </div>
            <nav className="flex space-x-6" aria-label="Social media and contact links">
              <a 
                href="https://github.com/jkishbaugh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/justinkishbaugh/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:kishju@gmail.com" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
                aria-label="Send me an email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
              <a 
                href="/justin-kishbaugh-resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
                aria-label="View my resume"
              >
                <FaFileAlt className="h-5 w-5" />
              </a>
            </nav>
          </div>
        </div>
      </footer>
    )
}