// components/ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="mt-2 text-blue-500">${product.price}</p>
    </div>
  );
};

export default ProductCard;
