import { OptionSetypes } from "../redux/actionTypes";

const initial_state = {
  optionset:[]
};

const optionset__Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case OptionSetypes.GETOPTIONSET_START: {
      return {
        ...state,
      };
    }
    case OptionSetypes.GETOPTIONSET_SUCCESS: {
      return {
        ...state,
        optionset:action.payload.data
      };
    }
    case OptionSetypes.GETOPTIONSET_FAIL: {
      return {
        state: action.payload,
      };
    }

    case OptionSetypes.OPTIONSETCREATE_START: {
        return {
          ...state,
        };
      }
      case OptionSetypes.OPTIONSETCREATE_SUCCESS: {
        return {
          ...state,
        };
      }
      case OptionSetypes.OPTIONSETCREATE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case OptionSetypes.OPTIONSETEDIT_START: {
        return {
          ...state,
        };
      }
      case OptionSetypes.OPTIONSETEDIT_SUCCESS: {
        return {
          ...state,
        };
      }
      case OptionSetypes.OPTIONSETEDIT_FAIL: {
        return {
          state: action.payload,
        };
      }

      case OptionSetypes.OPTIONSETDELETE_START: {
        return {
          ...state,
        };
      }
      case OptionSetypes.OPTIONSETDELETE_SUCCESS: {
        return {
          ...state,
        };
      }
      case OptionSetypes.OPTIONSETDELETE_FAIL: {
        return {
          state: action.payload,
        };
      }

    default: {
      return state;
    }
  }
};
export default optionset__Reducer;