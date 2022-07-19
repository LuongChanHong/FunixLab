import { URL } from "../database/baseUrls";

export const apiOtherElement = (method, body) => {
  return {
    method,
    body: `${body ? JSON.stringify(body) : ""}`,
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  };
};

export const fetchAPI = (param, otherElement) =>
  fetch(URL.base + param, otherElement)
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
