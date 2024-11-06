import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

function Buy({ authUser }) {
  const location = useLocation();
  const item = location.state?.item;
  const [ratings, setRatings] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
  const fetchRatings = async () => {
    try {
      // Ensure you're passing the correct bookId
      const response = await axios.get(`http://localhost:4001/ratings/${item._id}`);
      setRatings(response.data);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };

  if (item) {
    fetchRatings();
  }
}, [item]);  // Depend on item so it updates when the item changes

  const handleRatingSubmit = async (e) => {
    e.preventDefault();

    if (!authUser) {
      alert("You need to be logged in to submit a rating.");
      return;
    }

    if (!item || !item._id) {
      alert("No book data available for rating.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4001/ratings", {
        bookId: item._id, // Make sure `item.id` is available
        userId: authUser._id, // Make sure `authUser.id` is available
        rating: userRating,
        comment: userComment,
      });
      setRatings([...ratings, response.data]);
      setUserRating(0);
      setUserComment("");
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div className="container mx-auto p-5 flex flex-col gap-8 dark:bg-slate-900 dark:text-white">
      {/* Book Description Section */}
      <div className="flex-1 p-6 bg-white rounded-lg shadow-lg border border-pink-500">
        {item ? (
          <>
            <h1 className="text-3xl font-bold mb-4 text-black">
              Title: {item.name}
            </h1>
            <img
              src={item.image}
              alt={item.name}
              className="w-full max-w-md mb-4 rounded-lg shadow-md"
            />
            <p className="text-lg mb-2">
              <span className="font-semibold text-gray-700">Description:</span>{" "}
              {item.title}
            </p>
            <p className="text-lg font-semibold text-pink-500 mb-2">
              Price:{" "}
              <span className="text-pink-600">
                {item.price} {"\u20B9"}
              </span>
            </p>
            <p className="text-md italic text-gray-600">
              Category: {item.category}
            </p>
            <p className="text-md italic text-gray-600">
              Author: {item.author}
            </p>
          </>
        ) : (
          <p className="text-lg font-semibold text-red-500">
            No item data available.
          </p>
        )}
      </div>

      {/* Payment Options Form */}
      <div className="flex-1 max-w-md p-6 bg-white rounded-lg shadow-lg border border-pink-500">
        <h2 className="text-xl font-bold mb-4 text-black">Payment Options</h2>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Card Number</span>
            </label>
            <input
              type="text"
              placeholder="Enter your card number"
              className="input input-bordered w-full border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Expiry Date</span>
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="input input-bordered w-full border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">CVV</span>
            </label>
            <input
              type="password"
              placeholder="Enter CVV"
              className="input input-bordered w-full border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="form-control mt-4">
            <button className="btn w-full bg-pink-500 hover:bg-pink-600 text-white">
              Pay Now
            </button>
          </div>
        </form>
      </div>

      {/* Ratings and Comments Section */}
      <div className="w-full mt-8 border-t border-gray-300 pt-4">
        <h3 className="text-2xl font-bold mb-4 text-black">
          Ratings & Comments
        </h3>

        {/* Comment and Rating Submission Form */}
        <form onSubmit={handleRatingSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Rate the Book</span>
            </label>
            <select
              className="select select-bordered w-full border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={userRating}
              onChange={(e) => setUserRating(Number(e.target.value))}
              required
            >
              <option value="">Select Rating</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Comment</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              placeholder="Add your comment"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-full bg-pink-500 hover:bg-pink-600 text-white"
          >
            Submit
          </button>
        </form>

        {/* Display Existing Ratings and Comments */}
        <div className="mt-8 space-y-4">
          {ratings.map((rating) => (

            <div key={rating._id} className="p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold ">
                Name: {rating.userId.fullname}
              </p>
              <p className="text-yellow-500">Rating: {rating.rating} / 5</p>
              <p className="text-gray-600">{rating.comment}</p>
              
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buy;
