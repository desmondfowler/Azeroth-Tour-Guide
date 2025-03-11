// components/Region.tsx

interface RegionProps {
    name: string;
    description: string;
    faction: string;
    type: string;
}

export default function Region({ name, description, faction, type }: RegionProps) {
    return (
        <div className="p-6 text-white">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p><strong>Description:</strong> {description || "No description available"}</p>
            <p><strong>Faction:</strong> {faction || "Unknown"}</p>
            <p><strong>Type:</strong> {type || "Unknown"}</p>
        </div>
    );
}


// export default function Region({ name, description, faction, type }: RegionProps) {
//     return (
//         <div className="p-6 text-white">
//             <h1 className="text-2xl font-bold">{name}</h1>
//             <p><strong>Description:</strong> {description || "No description available"}</p>
//             <p><strong>Faction:</strong> {faction || "Neutral"}</p>
//             <p><strong>Type:</strong> {type || "Unknown"}</p>
//         </div>
//     );
// };