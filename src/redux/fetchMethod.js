import { URL } from "../database/baseUrls";

export const fetchAPI = (param) =>
  fetch(URL.base + param)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "ERROR::" + response.status + ":" + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (error) => {
        let errMes = new Error(error.message);
        // console.log("Error message:", errMes);
        throw errMes;
      }
    )
    .then((response) => response.json());
