import { useNavigate } from 'react-router-dom';

export default function RandomRegionButton() {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await fetch('/api/random-region');
            const data = await response.json();
            navigate(`/region/${encodeURIComponent(data.name)}`);
        } catch (error) {
            console.error('Error fetching region:', error);
        }
    };

    return (


        <button onClick={handleClick} className="inline-block bg-amber-400 text-gray-900 font-bold px-2 py-1 rounded-lg shadow-lg hover:bg-amber-500 transition-all sm:px-2 sm:py-1">
            Explore a Random Region!
        </button>

    );
}
