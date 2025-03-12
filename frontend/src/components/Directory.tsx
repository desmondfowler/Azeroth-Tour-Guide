import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Directory() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch("/api/regions").then(function(response) {
        if (!response.ok) {
            throw new Error("Failed to fetch regions");
        }
        return response.json();
    })
    .then(function(data) {
        setRegions(data.regions || []);
    })
    .catch(function(error) {
        console.error("Error fetching regions:", error);
        setRegions([]);
        setLoading(false);
    });

  }, [])

}
