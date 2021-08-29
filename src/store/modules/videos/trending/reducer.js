import TRENDING from "./actions";

const initialState = {
  totalResults: 0,
  nextPageToken: null,
  data: {},
  fetching: false,
  success: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TRENDING.types.REQUEST:
    case TRENDING.types.SUCCESS:
    case TRENDING.types.FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
