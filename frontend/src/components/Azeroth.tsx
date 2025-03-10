// components/Azeroth.jsx


export default function Azeroth() {
  return (
    <main className="flex-grow py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Welcome to Azeroth Tour Guide!
        </h2>
        <p className="mx-auto max-w-lg text-gray-700 text-center rounded-xl bg-white p-6 shadow-lg">
          Azeroth Tour Guide is a vacation planning website for the Warcraft universe. Explore an interactive map of Azeroth, browse detailed location listings, and search for your next adventure in Kalimdor or the Eastern Kingdoms. This project demonstrates a complete development lifecycle—from initial design to production deployment—while emphasizing Python proficiency and industry-standard infrastructure practices.
        </p>
        <img 
          src="azeroth.jpg" 
          className="mt-8 w-full max-w-5xl mx-auto rounded-lg shadow-md" 
          alt="A paper-art style map of Azeroth" 
        />
      </div>
    </main>
  );
}