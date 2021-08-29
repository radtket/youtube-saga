import {
  createAction,
  createActionTypes,
} from "../../../../utils/redux-helpers";
import { TRENDING } from "../actions";

const types = createActionTypes(TRENDING, ["REQUEST", "SUCCESS", "FAILURE"]);

export default {
  types,
  actions: {
    request: () => {
      return createAction(types.REQUEST, {
        fetching: true,
        success: false,
        error: null,
      });
    },
    success: data => {
      return createAction(types.SUCCESS, {
        ...data,
        fetching: false,
        success: true,
        error: null,
      });
    },
    failure: error => {
      return createAction(types.FAILURE, {
        ...error,
        fetching: false,
        success: false,
      });
    },
  },
};
