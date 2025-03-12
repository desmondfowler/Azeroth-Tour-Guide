import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Region {
  name: string;
  description?: string;
  faction?: string;
  type?: string;
  screenshot?: string;
  activities?: string[];
}

export default function Directory() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch("/api/regions")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to fetch regions");
        }
        return response.json();
      })
      .then(function (data) {
        setRegions(data.regions || []);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching regions:", error);
        setRegions([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-white text-center py-6">Loading regions...</p>;
  }

  function renderRegion(region: Region) {
    return (
      <Link to={"/region/" + encodeURIComponent(region.name)} className="block">
        <li
          key={region.name}
          className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition min-w-[150px] truncate"
        >
          <span className="text-amber-400 hover:text-white font-semibold">
            {region.name}
          </span>
        </li>
      </Link>
    );
  }

  return (
    <div className="w-full p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-amber-400 mb-6 text-center">
        Explore Azeroth's Regions
      </h2>
      <ul
        className="grid gap-4 max-w-[calc(100vw-166px)] mx-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        }}
      >
        {regions.length > 0 ? (
          regions.map(function (region: Region) {
            return renderRegion(region);
          })
        ) : (
          <li className="text-gray-300 col-span-full text-center">
            No regions found.
          </li>
        )}
      </ul>
    </div>
  );
}
