import * as actions from '../actions/actionTypes';

const initialState = {
  menus: [],
  carts: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
}

const menuReducer = (state = initialState, action) => {
  let newCart = [...state.carts]
  switch (action.type) {
    case actions.MENU_FETCH + actions.PENDING:
      return {
        ...state,
        isPending: true,
      }
    case actions.MENU_FETCH + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        isPending: false,
        error: action.payload,
      }
    case actions.MENU_FETCH + actions.FULFILLED:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        menus: action.payload.data.data,
      }
    case actions.ADD_TO_CART:
      const index = state.carts.findIndex((item) => {
        return action.payload.id === item.id
      });
      // console.log(state.carts)
      if (index >= 0) {
        state.carts.splice(index, 1);
        return {
          ...state,
          // carts: 1,
          carts: state.carts
        }
      } else {
        return {
          ...state,
          // carts: 1,
          carts: state.carts.concat(action.payload)
        }
      }
    case actions.INCREASE_QUANTITY:
      const indexIncQty = state.carts.findIndex((item) => {
        return item.id === action.payload.id;
      })

      // let newCart = [...state.carts];
      newCart[indexIncQty] = {
        ...newCart[indexIncQty],
        qty: state.carts[indexIncQty].qty + 1,
      }

      return {
        ...state,
        carts: newCart
      }
    case actions.DECREASE_QUANTITY:
      const indexDecQty = state.carts.findIndex((item) => {
        console.log(state.carts)
        return action.payload.id === item.id
      })
      // let newCart = [...state.carts]
      newCart[indexDecQty] = {
        ...newCart[indexDecQty],
        qty: state.carts[indexDecQty].qty - 1
      }
      if (newCart[indexDecQty].qty === 0) {
        state.carts.splice(indexDecQty, 1)
        return {
          ...state,
          carts: state.carts
        }
      } else {
        return {
          ...state,
          carts: newCart,
        }
      }
    case actions.CLEAR_CART:
      return {
        ...state,
        carts: []
      }
    default:
      return state
  }
}

export default menuReducer;