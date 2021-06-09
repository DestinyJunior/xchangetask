import { getItem } from "../utils/storage.helper";

export default function authHeader() {
  let user = getItem("u_p_d_1");

  if (user && user.access_token) {
    return { Authorization: "Bearer " + user.access_token };
  } else {
    return {};
  }
}
