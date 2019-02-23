import axios from "axios";

export const getURLs = imageType => {
  return dispatch => {
    dispatch(getURLsStarted());
    axios
      .get(
        "https://api.unsplash.com/photos/search?client_id=" +
          "26b1f698acd8466f46f3c368a809fab75c8772d2e78ae3684f35dd1b8a2cd35b",
        {
          params: {
            query: imageType,
            page: 1,
            per_page: 3
          }
        }
      )
      .then(res => {
        let data = res.data;
        if (data && data.length) {
          data = data.map(singleData => {
            return {
              id: singleData["id"],
              url: singleData["urls"]["full"]
            };
          });
        }
        let finalData = {};
        finalData[imageType] = data;
        dispatch(addTodoSuccess(finalData));
      })
      .catch(err => {
        dispatch(addTodoFailure(err));
      });
  };
};

const addTodoSuccess = urlList => ({
  type: "GET_URL_SUCCESS",
  payload: {
    ...urlList
  }
});

const getURLsStarted = () => ({
  type: "GET_URL_STARTED"
});

const addTodoFailure = error => ({
  type: "GET_URL_FAILURE",
  payload: {
    error
  }
});
