import {instance as axios} from "../../@api/axios";
import { orderactiontypes} from "../redux/actionTypes";
import { toast } from "react-toastify";

export function GetOrder() {
    return (dispatch) => {
      dispatch({
        type: orderactiontypes.GETORDER_START,
      });
      axios
        .get("/orders")
        .then((res) => {
          GetOrderSuccess(dispatch, res.data);
        })
        .catch((error) => {
            GetOrderFail(dispatch, error.message);
        });
    };
  }
  export function GetCasheirOrder() {
    return (dispatch) => {
      dispatch({
        type: orderactiontypes.GETORDER_START,
      });
      axios
        .get("/cashier")
        .then((res) => {
          GetOrderSuccess(dispatch, res.data);
        })
        .catch((error) => {
            GetOrderFail(dispatch, error.message);
        });
    };
  }
  const GetOrderSuccess = (dispatch, data, history) => {
      dispatch({
        type: orderactiontypes.GETORDER_SUCCESS,
        payload: data,
      })
  };
  
  const GetOrderFail = (dispatch, errorMessage) => {
    dispatch({
      type: orderactiontypes.GETORDER_FAIL,
      payload: {
        errorMessage,
      },
    });
  };



  export function EditOrder(obj) {
    return (dispatch) => {
      dispatch({
        type: orderactiontypes.ORDEREDIT_START,
      });
      axios
        .put("/orders", obj)
        .then((res) => {
            EditOrderSuccess(dispatch, res.data);
        })
        .catch((error) => {
            EditOrderFail(dispatch, error.message);
        });
    };
  }
  
  const EditOrderSuccess = (dispatch, data, history) => {
      dispatch({
        type: orderactiontypes.ORDEREDIT_SUCCESS,
        payload: data,
      })
  };
  
  const EditOrderFail = (dispatch, errorMessage) => {
    dispatch({
      type:orderactiontypes.ORDEREDIT_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


export function GetOrderDetail() {
    return (dispatch) => {
      dispatch({
        type: orderactiontypes.GETORDERDETAILS_START,
      });
      axios
        .get("/orders/:orderId")
        .then((res) => {
          GetOrderDetailSuccess(dispatch, res.data);
        })
        .catch((error) => {
            GetOrderDetailFail(dispatch, error.message);
        });
    };
  }
  
  const GetOrderDetailSuccess = (dispatch, data, history) => {
      dispatch({
        type: orderactiontypes.GETORDERDETAIL_SUCCESS,
        payload: data,
      })
  };
  
  const GetOrderDetailFail = (dispatch, errorMessage) => {
    dispatch({
      type: orderactiontypes.GETORDERDETAILS_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


  export function GetOrderRevenue() {
    return (dispatch) => {
      dispatch({
        type: orderactiontypes.GETORDERREVENUE_START,
      });
      axios
        .get("/orders/revenue")
        .then((res) => {
          GetOrderRevenueSuccess(dispatch, res.data);
        })
        .catch((error) => {
            GetOrderRevenueFail(dispatch, error.message);
        });
    };
  }
  
  const GetOrderRevenueSuccess = (dispatch, data, history) => {
      dispatch({
        type: orderactiontypes.GETORDERREVENUE_SUCCESS,
        payload: data,
      })
  };
  
  const GetOrderRevenueFail = (dispatch, errorMessage) => {
    dispatch({
      type: orderactiontypes.GETORDERREVENUE_FAIL,
      payload: {
        errorMessage,
      },
    });
  };

