import { get } from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case "GET_URL_SUCCESS":
      let previousResult = get(state, "result", {});
      action.payload = Object.assign({}, action.payload, previousResult);
      return {
        fetching: false,
        result: action.payload
      };
    case "GET_URL_FAILURE":
      return {
        fetching: false,
        result: action.payload
      };
    case "GET_URL_STARTED":
      return {
        fetching: true,
        result: {}
      };
    default:
      return state;
  }
};
