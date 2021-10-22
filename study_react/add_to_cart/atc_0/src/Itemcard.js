import React from "react";
import "./App_tw.css";
import { useCart } from "react-use-cart";

const Itemcard = ({ img, title, price, desc, item }) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4 h-full">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="font-bold mb-2">$ {price}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <button
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => {
            addItem(item);
          }}
        >
          <span>Add to Cart</span>
        </button>
      </div>
    </>
  );
};

export default Itemcard;
