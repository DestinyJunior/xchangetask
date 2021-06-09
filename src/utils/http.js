import Axios from "axios";
// create an new axios http instance
const http = Axios.create({
  baseURL: "https://xchangeapp-api.herokuapp.com/api/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

// before a request is made start  anything
http.interceptors.request.use((config) => {
    return config;
});

// before a response is returned do anything
http.interceptors.response.use(
    (response) => {

        return response;
    }
);

const base_url = http.defaults.baseURL;

export { http, base_url };
