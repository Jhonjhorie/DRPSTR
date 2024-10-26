// src/components/OfferCard.js
import React from 'react';

function OfferCard({ title, description, image, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">{price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
