import CATEGORIES from "./actions";

const initialState = {
  data: {},
  fetching: false,
  success: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CATEGORIES.types.REQUEST:
    case CATEGORIES.types.SUCCESS:
    case CATEGORIES.types.FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
