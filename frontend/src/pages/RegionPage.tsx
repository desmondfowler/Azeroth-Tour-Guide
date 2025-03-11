import { StrictMode, useEffect, useState } from 'react';
import Header from '../components/Header';
import Region from '../components/Region';
import { useParams } from 'react-router-dom';

interface RegionData {
    name: string;
    description: string;
    faction: string;
    type: string;
    screenshot?: string; // Optional URL or path to in-game screenshot
    activities?: string[]; // Array of activity suggestions
}

export default function RegionPage() {
    const { name } = useParams<{ name?: string }>();
    const regionName = name ?? "default-region";
    const [region, setRegion] = useState<RegionData | null>(null);

    function fetchRegionData() {
        console.log("Fetching region:", regionName);

        fetch("http://127.0.0.1:5000/api/region/" + encodeURIComponent(regionName))
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP error! Status: " + response.status);
                }
                return response.json();
            })
            .then(function (data) {
                console.log("Fetched data:", data);
                // Add placeholders if fields are missing
                const updatedData: RegionData = {
                    ...data,
                    screenshot: data.screenshot || '/placeholder-screenshot.jpg', // Default placeholder
                    activities: data.activities || ['Explore the region!', 'Take a scenic tour!'], // Default activities
                };
                setRegion(updatedData);
            })
            .catch(function (error) {
                console.error("Error fetching region data:", error);
                // Fallback with placeholder data on error
                setRegion({
                    name: regionName,
                    description: 'No description available due to error. Ragnaros ate it!',
                    faction: 'Unknown',
                    type: 'Unknown',
                    screenshot: '/placeholder-screenshot.jpg',
                    activities: ['Try not to get burned!', 'Dodge the circles!'],
                });
            });
    }

    useEffect(function () {
        fetchRegionData();
    }, [regionName]);

    return (
        <StrictMode>
            <div className="min-h-screen bg-gray-900 flex flex-col">
                <Header />
                <div className="flex justify-center p-4">
                    {region ? <Region {...region} /> : <p className="text-white p-6">Loading...</p>}
                </div>
            </div>
        </StrictMode>
    );
}