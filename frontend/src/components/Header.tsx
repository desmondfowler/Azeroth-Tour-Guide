import { useState } from "react"; // For mobile menu toggle
import RandomRegionButton from "./RandomRegionButton"; // Import the button component

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className="bg-gray-950 border-b border-indigo-600 shadow-xl sticky top-0 z-10">
      <div className="max-w-[80vw] py-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/atg-logo.webp"
                className="h-14 w-auto rounded-full border-2 border-amber-700 shadow-md"
                alt="Azeroth Tour Guide logo"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-6">
            <a
              href="/"
              className="text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
            >
              Home
            </a>
            <a
              href="/azeroth"
              className="text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
            >
              Azeroth
            </a>
            <a
              href="/directory"
              className="text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
            >
              Region Directory
            </a>
            <a
              href="/contact"
              className="text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
            >
              Contact
            </a>
            {/* Add RandomRegionButton for desktop */}
            <RandomRegionButton />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              type="button"
              className="text-amber-400 hover:text-white p-2 transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  } // X icon when open, hamburger when closed
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <nav className="sm:hidden bg-gray-950 border-t border-indigo-600">
            <div className="px-4 py-2 space-y-2">
              <a
                href="/"
                className="block text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
              >
                Home
              </a>
              <a
                href="/azeroth"
                className="block text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
              >
                Azeroth
              </a>
              <a
                href="/directory"
                className="block text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
              >
                Region Directory
              </a>
              <a
                href="/contact"
                className="block text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
              >
                Contact
              </a>
              <div className="pt-2">
                <RandomRegionButton />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
