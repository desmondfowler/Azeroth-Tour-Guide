// components/Reviews.tsx

export default function Reviews({ count }: { count: number }) {
  const numReviews = Math.max(3, count); // Math.min(count, 10);


  function getRandomReviews(reviewsArray: typeof reviews, num: number) {
    const shuffled = [...reviewsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, num);
  }

  const randomReviews = getRandomReviews(reviews, numReviews);

  return (
    <div className="bg-gray-900 py-6">
      <h3 className="p-4 text-3xl font-extrabold text-amber-400 mx-auto text-center drop-shadow-lg">
        Read our reviews!
      </h3>
      <div className="max-w-4xl mx-auto space-y-6 py-6">
        {randomReviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-gray-300 text-center border border-indigo-600"
          >
            <p className="mb-2 italic text-lg">"{review.text}"</p>
            <p className="text-amber-500 font-semibold text-lg">
              — {review.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
