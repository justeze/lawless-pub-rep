import * as actions from './actionTypes';
import { getMenu, authLogin } from "../../utils/menu";

export const requestMenuCreator = () => {
  // console.log('action')
  return {
    type: actions.MENU_FETCH,
    payload: getMenu(),
  };
};
export const addToCart = (id, name, price, img) => {
  return {
      type: actions.ADD_TO_CART,
      payload: {
          id,
          name,
          qty: 1,
          price,
          img,
      }
  }
}

export const increaseQty = (id) => {
  return {
      type: actions.INCREASE_QUANTITY,
      payload: {
          id: id,
      }
  }
}

export const decreaseQty= (id) => {
  return {
      type: actions.DECREASE_QUANTITY,
      payload: {
          id: id,
      }
  }
}

export const clearCart= () => {
  return {
    type: actions.CLEAR_CART
  }
}

export const authLoginCreator = (name, password) => {
  return {
    type: actions.AUTH_LOGIN,
    payload: authLogin(name, password),
  }
}