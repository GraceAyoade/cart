import { Dispatch } from "react";

export interface IItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export type Action =
   { type: "ADD_ITEM"; payload: IItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "CLEAR_ITEM" };

export interface CartContextType {
  cart: IItem[];
  dispatch: Dispatch<Action>;
}
