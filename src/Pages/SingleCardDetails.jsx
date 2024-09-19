import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../index.css';

const SingleCardDetails = () => {
  const [singleCardData, setSingleCardData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setSingleCardData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const backHome = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      {singleCardData ? (
        <div className="flex flex-col sm:flex-row shadow-lg bg-white rounded-lg border border-gray-300 overflow-hidden max-w-4xl w-full">
          <div className="flex justify-center items-center w-full bg-white">
            <img
              src={singleCardData.image}
              alt={singleCardData.title}
              className="rounded-lg object-cover w-full h-auto max-w-sm max-h-80"
            />
          </div>

          <div className="flex flex-col justify-center p-6 bg-gray-200 border-t border-gray-300">
            <h2 className="text-2xl font-bold mb-2">
              Title: <span className="text-gray-700">{singleCardData.title}</span>
            </h2>
            <p className="text-xl font-semibold mb-2">
              Price: <span className="text-gray-700">{singleCardData.price} $</span>
            </p>
            <p className="text-xl font-semibold mb-4">
              Category: <span className="text-gray-700">{singleCardData.category}</span>
            </p>
            <p className="text-lg mb-4">
              Description: <span className="text-gray-800">"{singleCardData.description}"</span>
            </p>
            <p className="text-lg font-semibold mb-6">
              <span className="text-green-700">Quantity: {singleCardData.rating.count} Piece</span> |
              <span className="text-orange-500"> {singleCardData.rating.rate} Ratings</span>
            </p>
            <button
              onClick={backHome}
              className="w-full sm:w-auto max-w-xs transition-shadow duration-300 hover:shadow-lg py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700"
            >
              Back to Products Page
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-bold">Loading...</h1>
      )}
    </div>
  );
};

export default SingleCardDetails;
