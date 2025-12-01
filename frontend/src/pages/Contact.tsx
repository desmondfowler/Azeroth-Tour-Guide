import { StrictMode } from "react";
import Header from "../components/Header";

export default function Contact() {
  return (
    <StrictMode>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow py-12 bg-gray-900 text-center">
          <h2 className="text-4xl font-extrabold text-amber-400 drop-shadow-md">
            Contact Us
          </h2>
          <div className="mx-auto max-w-4xl text-gray-300 rounded-lg bg-gray-800 p-8 shadow-xl border border-indigo-600 mt-6">
            <p>
              Have questions about touring Azeroth? Reach out at{" "}
              <a
                href="mailto:azerothtourguide@gmail.com"
                className="text-amber-400 hover:text-white"
              >
                azerothtourguide@gmail.com
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </StrictMode>
  );
}
