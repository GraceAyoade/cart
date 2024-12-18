import React, { createContext, ReactNode, useReducer } from "react";
import { CartContextType, IItem } from "../types";
import { cartReducer } from "../utils/cartReducer";

interface ICartProp {
  children: ReactNode;
}

const initialState: IItem[] = [
  {
    id: 1,
    name: "Phone",
    price: 200000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Bag",
    price: 50000,
    quantity: 1,
  },
];

const defaultValue: CartContextType = {
  cart: initialState,
  dispatch: () => {},
};

export const CartContext = createContext(defaultValue);

const CartProvider: React.FC<ICartProp> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
