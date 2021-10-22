import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>;
  return (
    <section className="container py-4 px-10">
      <p>Cart unique items ({totalUniqueItems})</p>
      <p>Total Item: {totalItems}</p>
      <ul>
        {items.map((item, index) => {
          return (
            <li class="flex bg-white p-5 rounded-lg shadow-lg mb-5">
              <img src={item.img} class="w-32" alt="" />
              <div class="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between">
                <p class="title font-semibold text-sm md:text-lg mb-5 md:mb-0 md:pl-5">
                  {item.title}
                </p>
                <p class="value font-bold text-sm mt-5 md:mt-0">
                  quantity ({item.quantity})
                </p>
                <p class="value font-bold text-sm mt-5 md:mt-0">{item.price}</p>
                <div class="flex">
                  <button
                    class="rounded-lg bg flex justify-center items-center p-3 z-10"
                    style={{ backgroundColor: "#00848A" }}
                    onClick={() => {
                      updateItemQuantity(item.id, item.quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value="1"
                    class="text-center text-md font-semibold p-2 rounded w-20 focus:outline-none"
                    style={{ backgroundColor: "#eee" }}
                  />
                  <button
                    class="rounded-lg bg flex justify-center items-center p-3 z-10"
                    style={{ backgroundColor: "#00848A" }}
                    onClick={() => {
                      updateItemQuantity(item.id, item.quantity + 1);
                    }}
                  >
                    +
                  </button>
                  <button
                    class="rounded-lg bg flex justify-center items-center p-3 z-10 ml-14"
                    style={{ backgroundColor: "#FF5A5F" }}
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cart;
