import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",

  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",

  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",

  "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80",

  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
];

const InspirationGallery = () => (
  <div className="bg-white py-12 px-4">
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-1">
        Inspiration Gallery
      </h1>
      <p className="text-gray-600 text-lg">
        See How Beautiful Your Home Can Be
      </p>
    </div>

    <div className="max-w-5xl mx-auto grid grid-cols-3 grid-rows-2 gap-4 mb-8">
      <div className="col-span-1 row-span-1">
        <img
          src={galleryImages[0]}
          alt="Gallery 1"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="col-span-1 row-span-1">
        <img
          src={galleryImages[3]}
          alt="Gallery 4"
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="col-span-1 row-span-1">
        <img
          src={galleryImages[1]}
          alt="Gallery 2"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="col-span-1 row-span-1">
        <img
          src={galleryImages[4]}
          alt="Gallery 5"
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="col-span-1 row-span-2">
        <img
          src={galleryImages[2]}
          alt="Gallery 3"
          className="w-full h-full object-cover rounded h-full min-h-[100%]"
        />
      </div>
    </div>

    <div className="flex justify-center">
      <button className="bg-black text-white px-8 py-3 text-lg font-semibold rounded hover:bg-gray-800 transition">
        VIEW MORE GALLERIES
      </button>
    </div>
  </div>
);

export default InspirationGallery;
