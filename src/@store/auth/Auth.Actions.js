import {instance as axios} from "../../@api/axios";
import { UserActionTypes } from "../redux/actionTypes";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export function userLogin(obj , history) {
    return (dispatch) => {
      dispatch({
        type: UserActionTypes.LOGIN_USER_START,
      });
      axios
        .post("http://localhost:8003/api/v1/auth/login", obj , history)
        .then((res) => {
            localStorage.setItem("accessToken",res.data.data.accessToken)
            localStorage.setItem("clientId",res.data.data._id)
            toast.success("Successfully Logged in");
            userLoginSuccess(dispatch, res.data , history);
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
          console.log(error.message);
          userLoginFail(dispatch, error.message);
        });
    };
  }
  
  const userLoginSuccess = (dispatch, data, history) => {
      dispatch({
        type: UserActionTypes.LOGIN_USER_SUCCESS,
        payload: data,
      })
      history.push("/dash-board");
  };
  
  const userLoginFail = (dispatch, errorMessage) => {
    dispatch({
      type: UserActionTypes.LOGIN_USER_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


  export function userloggedOut(history) {
    const token=localStorage.getItem("accessToken")
    return (dispatch) => {
      dispatch({
        type: UserActionTypes.LOGOUT_USER_START,
      });
      axios
        .post("/auth/logout")
        .then((res) => {
          userLoggedOutSuccess(history);
          localStorage.removeItem("accessToken");
        })
        .catch((error) => {
          userLoggedOutFail(dispatch, error.message);
        });
    };
  }
  
  const userLoggedOutSuccess = (dispatch , history) => {
    dispatch({
      type: UserActionTypes.LOGOUT_USER_SUCCESS,
    });
    history.push("/login");
  };
  
  const userLoggedOutFail = (dispatch, errorMessage) => {
    dispatch({
      type: UserActionTypes.LOGOUT_USER_FAIL,
      payload: {
        errorMessage,
      },
    });
  };

  export function changePassword(data) {
    return (dispatch) => {
      dispatch({
        type: UserActionTypes.CHANGE_PASSWORD_START,
      });
      axios
        .post("http://localhost:8003/api/v1/auth/changePassword", data)
        .then((res) => {
          changePasswordSuccess(dispatch, data);
        })
        .catch((error) => {
          changePasswordFail(dispatch, error);
        });
    };
  }
  
  const changePasswordSuccess = (dispatch) => {
    dispatch({
      type: UserActionTypes.CHANGE_PASSWORD_SUCCESS,
    });
  };
  
  const changePasswordFail = (dispatch, errorMessage) => {
    dispatch({
      type: UserActionTypes.CHANGE_PASSWORD_FAIL,
      payload: {
        errorMessage,
      },
    });
  };

  export function deleteUser(data) {
    return (dispatch) => {
      dispatch({
        type: UserActionTypes.DELETE_USER_START,
      });
      axios
        .delete("http://localhost:8003/api/v1/auth/client/:id", { data })
        .then((res) => {
          deleteUserSuccess(dispatch, res.data);
        })
        .catch((error) => {
          deleteUserFail(dispatch, error.message);
        });
    };
  }
  
  const deleteUserSuccess = (dispatch, data) => {
    dispatch({
      type: UserActionTypes.DELETE_USER_SUCCESS,
      payload: data,
    });
  };
  
  const deleteUserFail = (dispatch, errorMessage) => {
    dispatch({
      type: UserActionTypes.DELETE_USER_FAIL,
      payload: {
        errorMessage,
      },
    });
  };