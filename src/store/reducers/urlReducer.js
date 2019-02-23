import { get } from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case "GET_URL_SUCCESS":
      console.log("Reducer success", action);
      console.log("state", state);
      let previousResult = get(state, "result", {});
      action.payload = Object.assign({}, action.payload, previousResult);
      return {
        fetching: false,
        result: action.payload
      };
    case "GET_URL_FAILURE":
      console.log("Reducer error");
      return {
        fetching: false,
        result: action.payload
      };
    case "GET_URL_STARTED":
      console.log("Reducer started");
      return {
        fetching: true,
        result: {}
      };
    default:
      return state;
  }
};
