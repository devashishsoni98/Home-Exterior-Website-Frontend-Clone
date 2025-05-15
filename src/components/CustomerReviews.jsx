import { useState } from "react";

const reviews = [
  {
    name: "Brian D.",
    text: `We recently had a team from Timberland Exteriors replace some rotting wood siding with James Hardie siding. They color matched the siding to the paint color we had painted the rest of the house. The installation team did a fantastic job, very detail oriented and completed the job quicker than anticipated. I would definitely recommend them for your next exterior project.`,
    stars: 5,
  },
  {
    name: "Emily R.",
    text: `Timberland Exteriors exceeded our expectations! From start to finish, the process was smooth and professional. Our new roof looks amazing and we couldn't be happier.`,
    stars: 5,
  },
  {
    name: "John S.",
    text: `Excellent workmanship and customer service. The crew was punctual, respectful, and cleaned up thoroughly after the job. Highly recommend Timberland Exteriors!`,
    stars: 5,
  },
];

const StarRow = ({ count = 5 }) => (
  <div className="flex justify-center mb-2 sm:mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <polygon points="10,1.5 12.59,7.36 18.82,7.63 13.91,11.97 15.45,18.02 10,14.6 4.55,18.02 6.09,11.97 1.18,7.63 7.41,7.36" />
      </svg>
    ))}
  </div>
);

const CustomerReviews = () => {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const prevReview = () =>
    setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const nextReview = () =>
    setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-black text-white py-8 sm:py-10 md:py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-2 sm:mb-4">
        Customer Reviews
      </h2>
      <p className="text-center max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">
        Timberland Exteriors has become the top choice for exterior remodeling
        services in Minnesota. See what our customers have to say about us.
      </p>

      <div className="relative flex items-center justify-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mb-6 sm:mb-8">
        <button
          aria-label="Previous Review"
          onClick={prevReview}
          className="absolute left-0 sm:-left-3 md:-left-5 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-800 transition z-10"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white text-black rounded-md shadow-lg p-4 sm:p-6 md:p-8 w-full text-center mx-10 sm:mx-12 min-h-[200px] sm:min-h-[250px] md:min-h-[280px] flex flex-col justify-center">
            <StarRow count={review.stars} />
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg font-medium overflow-y-auto max-h-[120px] sm:max-h-[150px] md:max-h-[180px]">
              &quot;{review.text}&quot;
            </p>
            <div className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mt-auto">
              - {review.name}
            </div>
          </div>
        </div>

        <button
          aria-label="Next Review"
          onClick={nextReview}
          className="absolute right-0 sm:-right-3 md:-right-5 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-800 transition z-10"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <a
        href="#"
        className="block w-full max-w-[180px] sm:max-w-[200px] md:max-w-[240px] bg-yellow-400 text-black text-sm sm:text-base md:text-lg font-bold py-2 sm:py-3 text-center mt-4 sm:mt-6 hover:bg-yellow-500 transition rounded"
      >
        READ MORE REVIEWS
      </a>
    </section>
  );
};

export default CustomerReviews;
