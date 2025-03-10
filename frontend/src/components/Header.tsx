// components/Header.jsx
import "../css/tailwind.css";

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="atg-logo.jpg"
              className="h-12 w-auto rounded-3xl"
              alt="Azeroth Tour Guide logo"
            />
          </div>

          <nav className="hidden sm:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="/azeroth"
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              Azeroth
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-amber-500 p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}