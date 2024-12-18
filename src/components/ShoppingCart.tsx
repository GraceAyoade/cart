import React, { useContext } from "react";
import { CartContext } from "./Cart";

export const ShoppingCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveItem = (id: any) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div>
      <h2>My Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your Shopping Cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li>
              {item.name} - {item.price} x {item.quantity}
              <button onClick={() => handleRemoveItem(item.id)}>
                Remove Item
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
