import { ActionType } from 'redux-promise-middleware';

export const MENU_FETCH = 'menuFetched';
export const INCREASE_QUANTITY = 'incQty';
export const DECREASE_QUANTITY = 'decQty';
export const ADD_TO_CART = 'addToCart';
export const CLEAR_CART = 'clearCart';

export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;