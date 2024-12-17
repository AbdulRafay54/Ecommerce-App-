import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-6xl font-extrabold mb-6 text-gray-900">
          Welcome to MyShop!
        </h2>
        <p className="text-2xl font-semibold text-gray-800 mb-8 max-w-3xl">
          Welcome to My Shop! We're excited to bring you a variety of amazing
          products, from stylish fashion items to must-have jewellery. Whether
          you're looking for something special or just browsing, you'll find
          quality products that fit your needs. Explore our collection and enjoy
          shopping with us!
        </p>
        <Link
          to="/product"
          className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 px-8 rounded-lg shadow-2xl hover:from-teal-600 hover:to-blue-700 transition duration-300 text-xl font-bold transform hover:scale-105"
        >
          EXPLORE PRODUCTS
        </Link>
      </main>
    </div>
  );
};

export default Home;
