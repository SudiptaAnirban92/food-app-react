import React, { useState } from "react";
import { data } from "../data/Data";

const Food = () => {
  const [foods, setFoods] = useState(data);
  // Filter type

  const filterType = (category) => {
    setFoods(
      data.filter((item, index) => {
        return item.category === category;
      })
    );
  };
  //   console.log(data);

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item, index) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterType("burger")}
            >
              Burger
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterType("pizza")}
            >
              Pizza
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterType("chicken")}
            >
              Chicken
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterType("salad")}
            >
              Salad
            </button>
          </div>
        </div>
        {/* Filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          // Card div
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
