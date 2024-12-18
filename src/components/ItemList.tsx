import React, { useContext } from "react";
import { CartContext } from "./Cart";

export const ItemList = () => {
  const { dispatch } = useContext(CartContext);

  const availableItems = [
    { id: 1, name: "Givenchy bag", price: 500000 },
    { id: 2, name: "Nike Shoe", price: 450000 },
  ];

  return (
    <div>
      <h2>List of Cart Items</h2>
      <ul>
        {availableItems.map((item) => (
          <li>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
