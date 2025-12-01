import { StrictMode } from "react";
import Header from "../components/Header";
import Directory from "../components/Directory";

export default function DirectoryPage() {
  return (
    <StrictMode>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        <Directory />
      </div>
    </StrictMode>
  );
}
