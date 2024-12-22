import { useContext } from "react";
import { CartContext } from "../utils/cartContext";

export const ShoppingCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveItem = (id: any) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_ITEM" });
  };

  const totalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>My Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your Shopping Cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} x {item.quantity}
              <button onClick={() => handleRemoveItem(item.id)}>
                Remove Item
              </button>
            </li>
          ))}
        </ul>
      )}
      <h5>Total Amount: ${totalAmount()}</h5>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};
