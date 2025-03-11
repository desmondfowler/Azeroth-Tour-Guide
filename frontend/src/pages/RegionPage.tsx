import { StrictMode, useEffect, useState } from 'react';
import Header from '../components/Header';
import Region from '../components/Region';
import { useParams } from 'react-router-dom';

interface RegionData {
    name: string;
    description: string;
    faction: string;
    type: string;
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
                setRegion(data);
            })
            .catch(function (error) {
                console.error("Error fetching region data:", error);
            });
    }

    useEffect(function () {
        fetchRegionData();
    }, [regionName]);

    return (
        <StrictMode>
            <div className="min-h-screen bg-gray-900 flex flex-col">
                <Header />
                {region ? <Region {...region} /> : <p className="text-white p-6">Loading...</p>}
            </div>
        </StrictMode>
    );
}
