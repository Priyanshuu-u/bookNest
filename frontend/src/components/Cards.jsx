// src/Cards.js
import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
  return (
    <div className="mt-4 my-4 p-3">
      <div className="card bg-base-100 shadow-xl w-92 hover:scale-105 duration-200 h-90 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-49">
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary px-1 py-1 w-15">
              {item.price} {'\u20B9'}
            </div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.category}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-5 py-2 duration-200 cursor-pointer">
              <Link 
                to="/buy" 
                state={ {item }} // Pass item data to /buy page
              >
                Get Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
