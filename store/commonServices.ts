// import { Method } from "axios";
import {api} from "./api/api";
const apiResponse = (isSuccess,data, errorMessage) =>({
  isSuccess,
  data,
  errorMessage
})

type Method = "POST" | "PUT" | "PATCH" | "DELETE"
export const postService = async (url, body, method:Method = "POST") => {
  try {
    const resp = await api(url, {
      method,
      data: body,
    });
    
    if (resp.status >= 200 && resp.status < 300) {
      return apiResponse(true, resp.data, null);
    } else {
    
      return apiResponse(false,resp.data, null);
    }

  } catch (err) {
    return apiResponse(false, null, err);
  }
};

export const getService = async (url) => {
  try {
    console.log({url})

    const resp = await api(url, {
      method: "GET",
    });
console.log({resp})
  if (resp.status >= 200 && resp.status < 300) {
      return apiResponse(true,resp.data, null);
    } else {
     
      return apiResponse(false, null, resp.data);
    }

  } catch (err) {
    return apiResponse(false, null, err);
  }
};




