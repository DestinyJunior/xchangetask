import { http } from "../utils/http";
import { storeItem, getItem } from "../utils/storage.helper";

class AuthService {
  constructor(http) {
    this.request = http;
  }
  /**
   * Post -- Login
   * admin login .email and user.password
   * @param {*} user
   */
  async adminLogin(admin) {
    return await this.request
      .post("auth/login", {
        email: admin.email,
        password: admin.password,
      })
      .then((response) => {
        if (response.data.access_token) {
          storeItem("u_p_d_1", response.data);
        }
        return response.data;
      });
  }

  /**
   * POST - Register
   * @param  user
   */
  async register(user) {
    return await this.request
      .post("accounts/register", {
        email: user.email,
        password: user.password,
        first_name: user.first_name,
        middle_name: user.middle_name,
        last_name: user.last_name,
        phone: user.phone,
        username: user.username,
      })
      .then((response) => {
        return response.data;
      });
  }

  /**
   * logout
   */
  async logout() {
    return await this.request.post("auth/logout").then((response) => {
      return response.data;
    });
  }

  isLoggedIn() {
    return getItem("u_p_d_1") ? true : false;
  }
}

export default new AuthService(http);
