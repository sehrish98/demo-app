import {instance as axios} from "../../@api/axios";
import { checkoutactiontypes} from "../redux/actionTypes";
import { toast } from "react-toastify";

  export function CheckoutOrder(obj) {
    console.log("hi i m jsnjsj:",obj._id)
    return (dispatch) => {
      dispatch({
        type: checkoutactiontypes.CHECKOUT_START,
      });
      axios
        .post("/orders", obj)
        .then((res) => {
            CheckoutOrderSuccess(dispatch, res.data);
            toast.success("Your Order has been Successfully Placed");
        })
        .catch((error) => {
            console.log("hi i m checkout res:" , error.message)
            CheckoutOrderFail(dispatch, error.message);
            toast.error("Cannot Placed your Order");
        });
    };
  }
  
  const CheckoutOrderSuccess = (dispatch, data, history) => {
      dispatch({
        type: checkoutactiontypes.CHECKOUT_SUCCESS,
        payload: data,
      })
  };
  
  const CheckoutOrderFail = (dispatch, errorMessage) => {
    dispatch({
      type:checkoutactiontypes.CHECKOUT_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


