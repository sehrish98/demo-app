import { instance as axios } from "../../@api/axios";
import { OptionSetypes } from "../redux/actionTypes";

export function GetOptionSet() {
  return (dispatch) => {
    dispatch({
      type: OptionSetypes.GETOPTIONSET_START,
    });
    axios
      .get("/optionSet")
      .then((res) => {
        GetOptionSetSuccess(dispatch, res.data);
      })
      .catch((error) => {
        GetOptionSetFail(dispatch, error.message);
      });
  };
}

const GetOptionSetSuccess = (dispatch, data, history) => {
  dispatch({
    type: OptionSetypes.GETOPTIONSET_SUCCESS,
    payload: data,
  });
};

const GetOptionSetFail = (dispatch, errorMessage) => {
  dispatch({
    type: OptionSetypes.GETOPTIONSET_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function CreateOptionSet(obj) {
  return (dispatch) => {
    dispatch({
      type: OptionSetypes.OPTIONSETCREATE_START,
    });
    axios
      .post("/optionSet", obj)
      .then((res) => {
        CreateOptionSetSuccess(dispatch, res.data);
      })
      .catch((error) => {
        CreateOptionSetFail(dispatch, error.message);
      });
  };
}

const CreateOptionSetSuccess = (dispatch, data, history) => {
  dispatch({
    type: OptionSetypes.OPTIONSETCREATE_SUCCESS,
    payload: data,
  });
};

const CreateOptionSetFail = (dispatch, errorMessage) => {
  dispatch({
    type: OptionSetypes.OPTIONSETCREATE_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function EditOptionSet(obj) {
  return (dispatch) => {
    dispatch({
      type: OptionSetypes.OPTIONSETEDIT_START,
    });
    axios
      .put("/optionSet", obj)
      .then((res) => {
        EditOptionSetSuccess(dispatch, res.data);
      })
      .catch((error) => {
        EditOptionSetFail(dispatch, error.message);
      });
  };
}

const EditOptionSetSuccess = (dispatch, data, history) => {
  dispatch({
    type: OptionSetypes.OPTIONSETEDIT_SUCCESS,
    payload: data,
  });
};

const EditOptionSetFail = (dispatch, errorMessage) => {
  dispatch({
    type: OptionSetypes.OPTIONSETEDIT_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function DeleteOptionSet(obj) {
  return (dispatch) => {
    dispatch({
      type: OptionSetypes.OPTIONSETDELETE_START,
    });
    axios
      .delete("/optionSet", { data: obj })
      .then((res) => {
        DeleteOptionSetSuccess(dispatch, res.data);
      })
      .catch((error) => {
        DeleteOptionSetFail(dispatch, error.message);
      });
  };
}

const DeleteOptionSetSuccess = (dispatch, data, history) => {
  dispatch({
    type: OptionSetypes.OPTIONSETDELETE_SUCCESS,
    payload: data,
  });
};

const DeleteOptionSetFail = (dispatch, errorMessage) => {
  dispatch({
    type: OptionSetypes.OPTIONSETDELETE_FAIL,
    payload: {
      errorMessage,
    },
  });
};
