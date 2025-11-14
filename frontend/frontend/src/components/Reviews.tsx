// components/Reviews.tsx

import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState<{ text: string; author: string }[]>(
    []
  );

  useEffect(() => {
    fetch("/api/random-reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data.reviews))
      .catch((error) => console.error("Error fetching reviews: ", error));
  }, []);

  return (
    <div className="bg-gray-900 py-6 w-full flex justify-center">
      <div className="w-[80vw] py-6">
        <h3 className="p-4 text-3xl font-extrabold text-amber-400 text-center drop-shadow-lg">
          Read our reviews!
        </h3>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 max-w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full bg-gray-800 p-6 rounded-xl shadow-lg text-gray-300 text-center border border-indigo-600"
            >
              <p className="mb-2 italic text-lg">"{review.text}"</p>
              <p className="text-amber-500 font-semibold text-lg">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
