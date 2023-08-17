// components/ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  const ImageComponent = ({ base64Data }) => {
    return <img src={base64Data} alt="Base64 Image" />;
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <ImageComponent base64Data={product.img} />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="mt-2 text-blue-500">{product.details[0].price}</p>
    </div>
  );
};

export default ProductCard;
