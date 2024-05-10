import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (details = [], action) => {
  switch (action.type) {
      case ADD_TO_CART:
      return [action.data, ...details];

    case REMOVE_FROM_CART:
      details.length = details.length ? (details.length - 1):[];
      return [...details];

    case EMPTY_CART:
      details = [];
      return [...details];
    default:
      return details;
  }
};
