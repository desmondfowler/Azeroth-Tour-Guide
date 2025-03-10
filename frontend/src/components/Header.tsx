// components/Header.jsx
import "../css/tailwind.css";

export default function Header() {
  return (
    <header className="bg-gray-950 border-b border-amber-800 shadow-xl sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="atg-logo.jpg"
              className="h-14 w-auto rounded-full border-2 border-amber-700 shadow-md"
              alt="Azeroth Tour Guide logo"
            />
          </div>

          <nav className="hidden sm:flex items-center space-x-6">
            <a
              href="/"
              className="text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"
            >
              Home
            </a>
            <a
              href="/azeroth"
              className="text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"            >
              Azeroth
            </a>
            <a
              href="/contact"
              className="text-amber-400 hover:text-white transition-all duration-200 font-semibold tracking-wide drop-shadow-sm"            >
              Contact
            </a>
          </nav>

          <div className="sm:hidden">
            <button
              type="button"
              className="text-amber-400 hover:text-white p-2 transition-all duration-200"
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