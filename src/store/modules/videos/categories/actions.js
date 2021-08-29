import {
  createAction,
  createActionTypes,
} from "../../../../utils/redux-helpers";
import { CATEGORIES } from "../actions";

const types = createActionTypes(CATEGORIES, ["REQUEST", "SUCCESS", "FAILURE"]);

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
