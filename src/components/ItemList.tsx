import { useContext } from "react";
import { CartContext } from "../utils/cartContext";

export const ItemList = () => {
  const { dispatch } = useContext(CartContext);

  const availableItems = [
    { id: 1, name: "Givenchy bag", price: 500000 },
    { id: 2, name: "Nike Shoe", price: 450000 },
  ];

  const handleAddItem = (item: any) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div>
      <h2>List of Cart Items</h2>
      <ul>
        {availableItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button
              onClick={() => {
                handleAddItem(item);
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
