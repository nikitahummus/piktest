import { REMOVE_ORDER, SET_ORDER } from "../types/order.types";

function orderReducer(stateOrder = {
  user: null,
  order: null
}, action) {
  switch (action.type) {
    case SET_ORDER:
      return action.payload;
    case REMOVE_ORDER:
      return null;
    default:
      return stateOrder
  }
}

export default orderReducer;
