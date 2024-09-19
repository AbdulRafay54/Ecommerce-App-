import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
          Welcome to MyShop!
        </h2>
        <p className="text-2xl text-gray-800 mb-8 leading-relaxed max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ac eros malesuada sollicitudin. Fusce sit amet tincidunt est, eu tempor odio. Curabitur dignissim libero eget sem hendrerit facilisis.
        </p>
        <Link to="/product" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 px-8 rounded-lg shadow-2xl hover:from-teal-600 hover:to-blue-700 transition duration-300 text-xl font-bold transform hover:scale-105">
          Explore Products
        </Link>
      </main>
    </div>
  );
}

export default Home;
