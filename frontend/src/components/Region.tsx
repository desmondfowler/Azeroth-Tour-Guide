// components/Region.tsx
import { useMemo } from 'react';

interface RegionProps {
    name: string;
    description: string;
    faction: 'Alliance' | 'Horde' | 'Neutral' | 'Qiraji' | 'Unknown' | string;
    type: 'Zone' | 'Dungeon' | 'Raid' | 'City' | 'Battleground' | 'Unknown' | string;
    screenshot?: string; // URL or path to in-game screenshot
    activities?: string[]; // Array of activity suggestions
}

const factionStyles: Record<
    'Alliance' | 'Horde' | 'Neutral' | 'Qiraji' | 'Unknown',
    string
> = {
    Alliance: 'bg-blue-900 border-blue-500 text-blue-100',
    Horde: 'bg-red-900 border-red-500 text-red-100',
    Neutral: 'bg-gray-800 border-gray-500 text-gray-100',
    Qiraji: 'bg-yellow-900 border-yellow-600 text-yellow-100',
    Unknown: 'bg-gray-700 border-gray-600 text-gray-300',
};

const typeStyles: Record<
    'Zone' | 'Dungeon' | 'Raid' | 'City' | 'Battleground' | 'Unknown',
    string
> = {
    Zone: 'bg-green-700 text-white',
    Dungeon: 'bg-purple-700 text-white',
    Raid: 'bg-orange-700 text-white',
    City: 'bg-teal-700 text-white',
    Battleground: 'bg-indigo-700 text-white',
    Unknown: 'bg-gray-600 text-white',
};

export default function Region({ name, description, faction, type, screenshot, activities }: RegionProps) {
    const factionClass = useMemo(
        () => factionStyles[faction as keyof typeof factionStyles] || factionStyles.Unknown,
        [faction]
    );
    const typeClass = useMemo(
        () => typeStyles[type as keyof typeof typeStyles] || typeStyles.Unknown,
        [type]
    );

    return (
        <div
            className={`max-w-2xl mx-auto p-6 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50 ${factionClass}`}
            style={{
                backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("/parchment-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                border: '2px solid rgba(255, 193, 7, 0.3)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(255, 193, 7, 0.1)',
                minHeight: '100%',
                backgroundColor: '#f5e8c7',

            }}
        >
            {/* Header with WoW-style border */}
            < h1 className="text-4xl font-extrabold mb-4 text-center tracking-wider text-amber-300 drop-shadow-lg border-b-2 border-amber-700 pb-2" >
                {name}
            </h1 >

            {/* Screenshot Section */}
            < div className="mb-4" >
                <strong className="text-amber-400 block mb-2">Screenshot:</strong>
                <img
                    src={screenshot || '/placeholder-screenshot.png'}
                    alt={`${name} Screenshot`}
                    className="w-full h-64 object-contain rounded-lg shadow-md border border-amber-700"
                />
            </div >

            {/* Description with scroll if long */}
            < div className="mb-4 max-h-32 overflow-y-auto text-sm italic text-gray-200" >
                <strong className="text-amber-400">Description:</strong>{' '}
                {description || 'No description available'}
            </div >

            {/* Faction Badge with Icon */}
            < div className="flex items-center mb-3" >
                <span className="text-sm font-semibold text-amber-300 mr-2">Faction:</span>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${factionClass} flex items-center`}
                >
                    {faction === 'Alliance' && <span className="mr-1">⚔️</span>}
                    {faction === 'Horde' && <span className="mr-1">🛡️</span>}
                    {faction || 'Unknown'}
                </span>
            </div >

            {/* Type Badge */}
            < div className="flex items-center mb-4" >
                <span className="text-sm font-semibold text-amber-300 mr-2">Type:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${typeClass}`}>
                    {type || 'Unknown'}
                </span>
            </div >

            {/* Activities Section */}
            < div className="mb-4" >
                <strong className="text-amber-400 block mb-2">Activities:</strong>
                <ul className="list-disc pl-5 text-sm text-gray-200">
                    {activities && activities.length > 0 ? (
                        activities.map((activity, index) => (
                            <li key={index} className="mb-1">
                                {activity || 'No activities available'}
                            </li>
                        ))
                    ) : (
                        <li>No activities available</li>
                    )}
                </ul>
            </div >
        </div >
    );
}