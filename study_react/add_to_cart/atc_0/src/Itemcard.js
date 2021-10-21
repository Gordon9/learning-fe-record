import React from "react";
import "./App_tw.css";

const Itemcard = (img) => {
  console.log(img);

  return (
    <>
      <div className="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4 h-full">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>Add to Cart</span>
        </button>
      </div>
    </>
  );
};

export default Itemcard;
