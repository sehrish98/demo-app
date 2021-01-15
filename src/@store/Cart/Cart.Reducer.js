import { CartActionTypes } from "../redux/actionTypes";
const initial_state = {
  cart: [],
  loading: false,
};

const cart__reducer = function (state = initial_state, action) {
  switch (action.type) {
    case CartActionTypes.ADDTOCART_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case CartActionTypes.ADDTOCART_SUCCESS: {
      let item = state.cart.filter((item) => item.id === action.payload.id);
      // if(item.length>0)
      // {
      //   let withoutExisting = state.cart.filter((item) => item.id !== action.payload.id);
      //   const update=[
      //     ...item,
      //     item[0].qty+action.payload.qty
      //   ]
      //   console.log("ko")
      //   return {
      //     ...state,
      //     cart: [withoutExisting , update],
      //     loading: false,
      //   };
      // }
      // else{
      //   console.log("pop")
        return {
          ...state,
          cart: [...state.cart, action.payload],
          loading: false,
        };
    }

    case CartActionTypes.ADDTOCART_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case CartActionTypes.REMOVECART_START: {
      return {
        ...state,
        loading: false,
      };
    }
    case CartActionTypes.REMOVECART_SUCCESS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        loading: false,
      };
    }
    case CartActionTypes.REMOVECART_FAIL: {
    }
    default: {
      return state;
    }
  }
};
export default cart__reducer;
