import React from 'react';

const SingleCardDetails = ({ product, closeModal }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
      onClick={closeModal} 
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={closeModal}
          className="cut absolute top-4 right-4 text-gray-500 text-xl hover:text-red-500"
        >
          &times;
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>

        <p className="text-md text-gray-700 mb-2">Price: ${product.price}</p>

        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>

        <p className="text-sm text-gray-700 mb-6">Description: {product.description}</p>
      </div>
    </div>
  );
};

export default SingleCardDetails;
