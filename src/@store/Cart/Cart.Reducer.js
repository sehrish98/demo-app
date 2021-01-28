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
      if (item.length>0)
      {
        let allitemswithcurr = state.cart.filter((item) => item.id !== action.payload.id);
        let update={...item[0],qty:item[0].qty+action.payload.qty}
        return {
          ...state,
          cart: [...allitemswithcurr, update],
          loading: false,
        };
      }
      else{
        return {
          ...state,
          cart: [...state.cart, action.payload],
          loading: false,
        };
      }
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
      let item = state.cart.find((item) => item.id === action.payload.id);
      if(item){
        if (item.qty==1)
        {
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
            loading: false,
          };
        }
        else{
          let allitemswithcurr = state.cart.filter((item) => item.id !== action.payload.id);
          let update={...item,qty:item.qty-1}
          return {
            ...state,
            cart: [...allitemswithcurr, update],
            loading: false,
          };
        }
      }
    }
    case CartActionTypes.REMOVECART_FAIL: {
    }

    case CartActionTypes.REMOVEQUANTITY_START: {
      return {
        ...state,
        loading: false,
      };
    }
    case CartActionTypes.REMOVEQUANTITY_SUCCESS: {
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
            loading: false,
          };
    }
    case CartActionTypes.REMOVEQUANTITY_FAIL: {
    }


    default: {
      return state;
    }
  }
};
export default cart__reducer;
