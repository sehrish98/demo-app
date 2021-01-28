import axios from "axios";
import { CartActionTypes } from "../redux/actionTypes";

export function AddtoCartstart(obj) {
    return (dispatch) => {
      AddtocartSuccess(dispatch, obj);
      dispatch({
        type: CartActionTypes.ADDTOCART_START,
      });
    };
  }
  
  const AddtocartSuccess = (dispatch, data) => {
    dispatch({
      type: CartActionTypes.ADDTOCART_SUCCESS,
      payload: data,
    });
  };
  
  const AddtocartFail = (dispatch, errorMessage) => {
    dispatch({
      type: CartActionTypes.ADDTOCART_FAIL,
      payload: {
        errorMessage,
      },
    });
  };
  

  export function RemoveCart(obj) {
    return (dispatch) => {
      RemovefromcartSuccess(dispatch,obj);
      dispatch({
        type: CartActionTypes.REMOVECART_START,
      });
    };
  }
  
  const RemovefromcartSuccess = (dispatch, data) => {
    dispatch({
      type: CartActionTypes.REMOVECART_SUCCESS,
      payload: data,
    });
  };
  
  const RemovefromcartFail = (dispatch, errorMessage) => {
    dispatch({
      type: CartActionTypes.REMOVECART_FAIL,
      payload: {
        errorMessage,
      },
    });
  };
  