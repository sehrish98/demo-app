import {instance as axios} from "../../@api/axios";
import { UserActionTypes } from "../redux/actionTypes";
import { Redirect } from "react-router-dom";

export function userLogin(obj) {
    return (dispatch) => {
      dispatch({
        type: UserActionTypes.LOGIN_USER_START,
      });
      axios
        .post("http://localhost:8003/api/v1/auth/login", obj)
        .then((res) => {
            localStorage.setItem("accessToken",res.data.data.accessToken)
            localStorage.setItem("clientId",res.data.data._id)
            userLoginSuccess(dispatch, res.data);
        })
        .catch((error) => {
          userLoginFail(dispatch, error.message);
        });
    };
  }
  
  const userLoginSuccess = (dispatch, data, history) => {
      dispatch({
        type: UserActionTypes.LOGIN_USER_SUCCESS,
        payload: data,
      })
    //   <Redirect to={history}  />
  };
  
  const userLoginFail = (dispatch, errorMessage) => {
    dispatch({
      type: UserActionTypes.LOGIN_USER_FAIL,
      payload: {
        errorMessage,
      },
    });
  };


  export function userloggedOut() {
    const token=localStorage.getItem("accessToken")
    return (dispatch) => {
      dispatch({
        type: UserActionTypes.LOGOUT_USER_START,
      });
      axios
        .post("/auth/logout",{headers: {
          'Authorization': `Bearer ${token}` 
        }})
        .then((res) => {
          localStorage.removeItem("accessToken");
          userLoggedOutSuccess();
        })
        .catch((error) => {
          userLoggedOutFail(dispatch, error.message);
        });
    };
  }
  
  const userLoggedOutSuccess = (dispatch) => {
    dispatch({
      type: UserActionTypes.LOGOUT_USER_SUCCESS,
    });
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