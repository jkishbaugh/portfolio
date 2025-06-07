import { FileText, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
<footer className="py-10 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} YourName. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}