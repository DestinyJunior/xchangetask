// import {Redirect} from "react-router-dom"

import Axios from "axios";
// create an new axios http instance
const http = Axios.create({
  baseURL: "https://xchangeapp-api.herokuapp.com/api/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

http.defaults.headers.common.accept = "application/json";

// before a request is made start  anything
http.interceptors.request.use((config) => {
    return config;
});

// before a response is returned do anything
http.interceptors.response.use((response) => {
   
  return response;
}, error => {
      if (
      error.response.status === 401 &&
      error.response.data.error === "Token has Expired"
    ){
      localStorage.removeItem("u_p_d_1");
      return window.location = '/';
    }
      return error;
});


const base_url = http.defaults.baseURL;


export { http, base_url };
