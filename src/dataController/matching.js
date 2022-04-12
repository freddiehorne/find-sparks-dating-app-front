import { API_URL } from "../config/general";
import { callAxios } from "./dynamicAxios";

export const callAPI = async (type, payload) => {
  // console.log(type);
  switch (type) {
    case "ADD_TO_SEEN":
      callAxios("post", API_URL + "/matching/seen", {
        user_id: payload.userId,
        foreign_id: payload.foreignUserId,
      });
      break;

    case "ADD_TO_LIKES":
      callAxios("post", API_URL + "/matching/likes", {
        user_id: payload.userId,
        foreign_id: payload.foreignUserId,
      });
      break;

    case "GET_ALL_USERS":
      // console.log("about to get results");
      const result = await callAxios("get", API_URL + "/matching/0");
      // console.log(result);
      return result;

    default:
      console.log("DEFAULT OCCURED. THIS SHOULD NEVER HAPPEN");
      break;
  }
};
