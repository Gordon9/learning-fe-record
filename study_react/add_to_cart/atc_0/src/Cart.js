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
    <section>
      <p>Cart unique items ({totalUniqueItems})</p>
      <p>Total Item: {totalItems}</p>
    </section>
  );
};

export default Cart;
