import { instance as axios } from "../../@api/axios";
import { DishActionTypes } from "../redux/actionTypes";

export function GetDishes() {
  return (dispatch) => {
    dispatch({
      type: DishActionTypes.GETDISH_START,
    });
    axios
      .get("/dishTag")
      .then((res) => {
        GetDishesSuccess(dispatch, res.data);
      })
      .catch((error) => {
        GetDishesFail(dispatch, error.message);
      });
  };
}

const GetDishesSuccess = (dispatch, data, history) => {
  dispatch({
    type: DishActionTypes.GETDISH_SUCCESS,
    payload: data,
  });
};

const GetDishesFail = (dispatch, errorMessage) => {
  dispatch({
    type: DishActionTypes.GETDISH_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function CreateDishes(obj , history) {
  return (dispatch) => {
    dispatch({
      type: DishActionTypes.DISHCREATE_START,
    });
    axios
      .post("/dishTag", obj , history)
      .then((res) => {
        CreateDishesSuccess(dispatch, res.data);
      })
      .catch((error) => {
        CreateDishesFail(dispatch, error.message);
      });
  };
}

const CreateDishesSuccess = (dispatch, data, history) => {
  dispatch({
    type: DishActionTypes.DISHCREATE_SUCCESS,
    payload: data,
  });
  history.push("/menu");
};

const CreateDishesFail = (dispatch, errorMessage) => {
  dispatch({
    type: DishActionTypes.DISHCREATE_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function DishEdit(obj , history) {
  return (dispatch) => {
    dispatch({
      type: DishActionTypes.DISHEDIT_START,
    });
    axios
      .put("/dishTag", obj , history)
      .then((res) => {
        DishEditSuccess(dispatch, res.data);
      })
      .catch((error) => {
        DishEditFail(dispatch, error.message);
      });
  };
}

const DishEditSuccess = (dispatch, data, history) => {
  dispatch({
    type: DishActionTypes.DISHEDIT_SUCCESS,
    payload: data,
  });
  history.push("/menu");
};

const DishEditFail = (dispatch, errorMessage) => {
  dispatch({
    type: DishActionTypes.DISHEDIT_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function DisheTagDelete(obj , history) {
  return (dispatch) => {
    dispatch({
      type: DishActionTypes.DISHDELETE_START,
    });
    axios
      .delete("/dishTag", {
        data: obj,
      })
      .then((res) => {
        DisheDeleteSuccess(dispatch, res.data , history);
      })
      .catch((error) => {
        DisheDeleteFail(dispatch, error.message);
      });
  };
}

const DisheDeleteSuccess = (dispatch, data, history) => {
  dispatch({
    type: DishActionTypes.DISHDELETE_SUCCESS,
    payload: data,
  });
  history.push("/menu");
};

const DisheDeleteFail = (dispatch, errorMessage) => {
  dispatch({
    type: DishActionTypes.DISHDELETE_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function DisheTagDrag(obj , history) {
  return (dispatch) => {
    dispatch({
      type: DishActionTypes.DISHDRAG_START,
    });
    axios
      .put("/dishTag/drag", { data: obj })
      .then((res) => {
        DisheTagDragSuccess(dispatch, res.data , history);
      })
      .catch((error) => {
        DisheTagDragFail(dispatch, error.message);
      });
  };
}

const DisheTagDragSuccess = (dispatch, data, history) => {
  dispatch({
    type: DishActionTypes.DISHDRAG_SUCCESS,
    payload: data,
  });
  dispatch(GetDishes());
  // history.push("/menu");
};

const DisheTagDragFail = (dispatch, errorMessage) => {
  dispatch({
    type: DishActionTypes.DISHDRAG_FAIL,
    payload: {
      errorMessage,
    },
  });
};