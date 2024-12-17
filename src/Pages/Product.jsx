import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCardDetails from "./SingleCardDetails"; 
const Product = () => {
  const [productData, setProductData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product); 
  };

  const closeModal = () => {
    setSelectedProduct(null); 
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
        {productData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
            {productData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    Title: {item.title}
                  </p>
                  <p className="text-md text-gray-700 mb-1">
                    Price: ${item.price}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Category: {item.category}
                  </p>
                  <button
                    className="mt-auto w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => openModal(item)} 
                  >
                    Check Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-4xl font-bold text-gray-700 text-center">
            Loading...
          </h1>
        )}
      </div>

      <SingleCardDetails
        product={selectedProduct}
        closeModal={closeModal}
      />
    </>
  );
};

export default Product;
