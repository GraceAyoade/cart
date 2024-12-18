import { Action, IItem } from "../types";

export const cartReducer = (state: IItem[], action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.find(
        (item: IItem) => item.id === action.payload.id
      );
      if (existingItem) {
        return state.map((item: IItem) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter((item: IItem) => item.id !== action.payload.id);
    case "CLEAR_ITEM":
      return [];
  }
};
