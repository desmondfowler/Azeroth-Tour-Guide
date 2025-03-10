// components/CTA.tsx

export default function CTA() {
    return (
        <main className="flex-grow py-12 bg-gray-900">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-amber-400 drop-shadow-md">
                    Welcome to Azeroth Tour Guide!
                </h2>
                <div className="mx-auto max-w-4xl text-gray-300 rounded-lg bg-gray-800 p-8 shadow-xl border border-indigo-600">                    <p>
                    Azeroth Tour Guide is your ultimate vacation planner for the Warcraft universe. Whether you're exploring the bustling streets of Stormwind or the wild landscapes of Nagrand, we help you find the perfect adventure.
                </p>
                    <p className="mt-4">
                        Browse an interactive map of Azeroth, discover detailed location listings, and plan your next journey across Kalimdor and the Eastern Kingdoms. This project showcases a full development lifecycle—from design to production—while demonstrating Python proficiency and industry-standard infrastructure practices.
                    </p>
                    <p className="mt-6">
                        <a href="/azeroth" className="inline-block bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-amber-500 transition-all">                            Start Exploring
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );

}