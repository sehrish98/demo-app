import {instance as axios} from "../../@api/axios";
import { StaffActionTypes } from "../redux/actionTypes";
import { toast } from "react-toastify";

export function GetStaff() {
    return (dispatch) => {
      dispatch({
        type: StaffActionTypes.GET_STAFF_START,
      });
      axios
        .get("/auth/client")
        .then((res) => {
            GetStaffSuccess(dispatch, res.data);
        })
        .catch((error) => {
            GetStaffFail(dispatch, error.message);
        });
    };
  }
  
  const GetStaffSuccess = (dispatch, data, history) => {
    dispatch({
      type: StaffActionTypes.GET_STAFF_SUCCESS,
      payload: data,
    });
  };
  
  const GetStaffFail = (dispatch, errorMessage) => {
    dispatch({
      type: StaffActionTypes.GET_STAFF_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


  export function createStaff(obj , history) {
    return (dispatch) => {
      dispatch({
        type: StaffActionTypes.CREATE_STAFF_START,
      });
      axios      
        .post("/auth/client", obj)
        .then((res) => {
          toast.success("Successfully Logged in");
          CreateStaffSuccess(dispatch, res.data ,history);
        })
        .catch((error) => {
          CreateStaffFail(dispatch, error.message);
        });
    };
  }
  
  const CreateStaffSuccess = (dispatch, data, history) => {
    dispatch({
      type: StaffActionTypes.CREATE_STAFF_SUCCESS,
      payload: data,
    });
    history.push("/staff");
  };
  
  const CreateStaffFail = (dispatch, errorMessage) => {
    dispatch({
      type: StaffActionTypes.CREATE_STAFF_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


export function staffLogin(obj , history) {
    return (dispatch) => {
      dispatch({
        type: StaffActionTypes.LOGIN_STAFF_START,
      });
      axios
        .post("http://localhost:8003/api/v1/auth/login", obj , history)
        .then((res) => {
            localStorage.setItem("accessToken",res.data.data.accessToken)
            localStorage.setItem("clientId",res.data.data._id)
            toast.success("Successfully Logged in");
            staffLoginSuccess(dispatch, res.data , history);
        })
        .catch((error) => {
          if (error.message === "Request failed with status code 306") {
            toast.error("Email is mandatory");
          } else if (error.message === "Request failed with status code 307") {
            toast.error("Password is mandatory");
          }
          else if (error.message === "Request failed with status code 308") {
            toast.error("Email and Password is mandatory");
          }
          else if (error.message === "Request failed with status code 309") {
            toast.error("Password Invalid");
          }
          else if (error.message === "Request failed with status code 310") {
            toast.error("Email Invalid");
          }
          else{
            toast.error("Invalid Email or Password.");
          }
          staffLoginFail(dispatch, error.message);
        });
    };
  }
  
  const staffLoginSuccess = (dispatch, data, history) => {
      dispatch({
        type: StaffActionTypes.LOGIN_STAFF_SUCCESS,
        payload: data,
      })
      history.push("/dash-board");
  };
  
  const staffLoginFail = (dispatch, errorMessage) => {
    dispatch({
      type: StaffActionTypes.LOGIN_STAFF_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


  export function staffloggedOut(history) {
    return (dispatch) => {
      dispatch({
        type: StaffActionTypes.LOGOUT_STAFF_START,
      });
      axios
        .post("/auth/logout")
        .then((res) => {
            staffloggedOutSuccess(dispatch,history);
          localStorage.removeItem("accessToken");
        })
        .catch((error) => {
            staffloggedOutFail(dispatch, error.message);
        });
    };
  }
  
  const staffloggedOutSuccess = (dispatch , history) => {
    dispatch({
      type: StaffActionTypes.LOGOUT_STAFF_SUCCESS,
    });
    history.push("/login");
  };
  
  const staffloggedOutFail = (dispatch, errorMessage) => {
    dispatch({
      type: StaffActionTypes.LOGOUT_STAFF_FAIL,
      payload: {
        errorMessage,
      },
    });
  };

  export function staffchange(data , history) {
    return (dispatch) => {
      dispatch({
        type:StaffActionTypes.STAFF_CHANGE_START,
      });
      axios
        .put("/auth/staff", data)
        .then((res) => {
          toast.success("Successfully updated");
          staffchangeSuccess(dispatch, data, history);
        })
        .catch((error) => {
          staffchangeFail(dispatch, error);
        });
    };
  }
  
  const staffchangeSuccess = (dispatch, history) => {
    dispatch({
      type: StaffActionTypes.STAFF_CHANGE_SUCCESS,
    });
    history.push("/staff")
  };
  
  const staffchangeFail = (dispatch, errorMessage) => {
    dispatch({
      type: StaffActionTypes.STAFF_CHANGE_FAIL,
      payload: {
        errorMessage,
      },
    });
  };

  export function deleteStaff(data , history) {
    return (dispatch) => {
      dispatch({
        type: StaffActionTypes.DELETE_STAFF_START,
      });
      axios
        .delete("/auth/staff", { data })
        .then((res) => {
          toast.success("Staff has been deleted successfully");
            deleteStaffSuccess(dispatch, res.data , history);
        })
        .catch((error) => {
            deleteStaffFail(dispatch, error.message);
        });
    };
  }
  
  const deleteStaffSuccess = (dispatch, data , history) => {
    dispatch({
      type: StaffActionTypes.DELETE_STAFF_SUCCESS,
      payload: data,
    });
    history.push("/staff")
  };
  
  const deleteStaffFail = (dispatch, errorMessage) => {
    dispatch({
      type: StaffActionTypes.DELETE_STAFF_FAIL,
      payload: {
        errorMessage,
      },
    });
  };