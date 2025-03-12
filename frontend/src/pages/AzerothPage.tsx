import { StrictMode } from "react";
import Header from "../components/Header";
import Azeroth from "../components/Azeroth";

export default function AzerothPage() {
  return (
    <StrictMode>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        <Azeroth />
      </div>
    </StrictMode>
  );
}
