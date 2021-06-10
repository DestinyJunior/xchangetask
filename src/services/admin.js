import { http } from "../utils/http";
import authHeader from "../services/auth.header";

class AdminService {
  constructor(http) {
    this.request = http;
  }

  async createAdmin(data) {
    return await this.request
      .post("v1/admin", data, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  async getAdmins() {
    return await this.request
      .get("v1/admins", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  async getSingleAdmin(Id) {
    return await this.request
      .get("v1/admin/" + Id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  async disableAdmin(Id) {
    return await this.request
      .put("v1/admin/" + Id + "/disable", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new AdminService(http);
