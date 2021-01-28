import {instance as axios} from "../../@api/axios";
import { ordertabletypes} from "../redux/actionTypes";

export function GetOrderTable() {
    return (dispatch) => {
      dispatch({
        type: ordertabletypes.GETORDERTABLE_START,
      });
      axios
        .get("/order/table")
        .then((res) => {
          GetOrderTableSuccess(dispatch, res.data);
        })
        .catch((error) => {
            GetOrderTableFail(dispatch, error.message);
        });
    };
  }
  
  const GetOrderTableSuccess = (dispatch, data, history) => {
      dispatch({
        type: ordertabletypes.GETORDERTABLE_SUCCESS,
        payload: data,
      })
  };
  
  const GetOrderTableFail = (dispatch, errorMessage) => {
    dispatch({
      type: ordertabletypes.GETORDERTABLE_FAIL,
      payload: {
        errorMessage,
      },
    });
  };

  export function CreateOrderTable(obj) {
    return (dispatch) => {
      dispatch({
        type: ordertabletypes.ORDERTABLECREATE_START,
      });
      axios
        .post("/order/table", obj)
        .then((res) => {
            CreateOrderTableSuccess(dispatch, res.data);
        })
        .catch((error) => {
            CreateOptionSetFail(dispatch, error.message);
        });
    };
  }
  
  const CreateOrderTableSuccess = (dispatch, data, history) => {
      dispatch({
        type: ordertabletypes.ORDERTABLECREATE_SUCCESS,
        payload: data,
      })
  };
  
  const CreateOrderTableFail = (dispatch, errorMessage) => {
    dispatch({
      type: ordertabletypes.ORDERTABLECREATE_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


  export function EditOrderTable(obj) {
    return (dispatch) => {
      dispatch({
        type: ordertabletypes.ORDERTABLEEDIT_START,
      });
      axios
        .put("/order/table", obj)
        .then((res) => {
            EditOrderTableSuccess(dispatch, res.data);
        })
        .catch((error) => {
            EditOrderTableFail(dispatch, error.message);
        });
    };
  }
  
  const EditOrderTableSuccess = (dispatch, data, history) => {
      dispatch({
        type: ordertabletypes.ORDERTABLEEDIT_SUCCESS,
        payload: data,
      })
  };
  
  const EditOrderTableFail = (dispatch, errorMessage) => {
    dispatch({
      type: ordertabletypes.ORDERTABLEEDIT_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


  export function DeleteOrderTable(obj) {
    return (dispatch) => {
      dispatch({
        type: ordertabletypes.ORDERTABLEDELETE_START,
      });
      axios
        .delete("/order/table", obj)
        .then((res) => {
            DeleteOrderTableSuccess(dispatch, res.data);
        })
        .catch((error) => {
            DeleteOrderTableFail(dispatch, error.message);
        });
    };
  }
  
  const DeleteOrderTableSuccess = (dispatch, data, history) => {
      dispatch({
        type: ordertabletypes.ORDERTABLEDELETE_SUCCESS,
        payload: data,
      })
  };
  
  const DeleteOrderTableFail = (dispatch, errorMessage) => {
    dispatch({
      type: ordertabletypes.ORDERTABLEDELETE_FAIL,
      payload: {
        errorMessage,
      },
    });
  };