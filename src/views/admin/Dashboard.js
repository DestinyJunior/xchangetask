import { useState } from "react";
import "../../App.css";
import { Redirect } from "react-router-dom";
import { getItem } from "../../utils/storage.helper";

// services
import AuthService from "../../services/auth";
import AdminService from "../../services/admin";

// components
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

function DashBoard() {
  //   console.log("dashboard");
  const [admins, setAdmins] = useState([]);

  if (!AuthService.isLoggedIn()) {
    return <Redirect to="/login" />;
  }

  const { user } = getItem("u_p_d_1");

  const fetchAdmins = () =>
    AdminService.getAdmins()
      .then((res) => {
        console.log(res);
        // setAdmins();
      })
      .catch((err) => {
        console.log(err);
      });

  fetchAdmins();

  return (
    <div className="bg-gray-100 font-family-karla flex">
      <SideBar loginUser={user} />
      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <TopBar loginUser={user} />
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Admin List</h1>

            <div className="w-full mt-6">
              <p className="text-xl pb-3 flex items-center"></p>
              <div className="bg-white overflow-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                        Admin
                      </th>
                      <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                        Role
                      </th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                        Email Address
                      </th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                        Phone Number
                      </th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Lian Smith</td>
                      <td className="w-1/3 text-left py-3 px-4">
                        Administrator
                      </td>
                      <td className="text-left py-3 px-4">
                        <a
                          className="hover:text-blue-500"
                          href="mailto:jonsmith@mail.com"
                        >
                          jonsmith@mail.com
                        </a>
                      </td>
                      <td className="text-left py-3 px-4">
                        <a className="hover:text-blue-500" href="tel:622322662">
                          622322662
                        </a>
                      </td>
                      <td className="w-1/3 text-left py-3 px-4">Active</td>
                      <td className="w-1/3 text-left py-3 px-4">Disable</td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="w-1/3 text-left py-3 px-4">Lian Smith</td>
                      <td className="w-1/3 text-left py-3 px-4">
                        Administrator
                      </td>
                      <td className="text-left py-3 px-4">
                        <a
                          className="hover:text-blue-500"
                          href="mailto:jonsmith@mail.com"
                        >
                          jonsmith@mail.com
                        </a>
                      </td>
                      <td className="text-left py-3 px-4">
                        <a className="hover:text-blue-500" href="tel:622322662">
                          622322662
                        </a>
                      </td>
                      <td className="w-1/3 text-left py-3 px-4">Active</td>
                      <td className="w-1/3 text-left py-3 px-4">Disable</td>
                    </tr>
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Lian Smith</td>
                      <td className="w-1/3 text-left py-3 px-4">
                        Administrator
                      </td>
                      <td className="text-left py-3 px-4">
                        <a
                          className="hover:text-blue-500"
                          href="mailto:jonsmith@mail.com"
                        >
                          jonsmith@mail.com
                        </a>
                      </td>
                      <td className="text-left py-3 px-4">
                        <a className="hover:text-blue-500" href="tel:622322662">
                          622322662
                        </a>
                      </td>
                      <td className="w-1/3 text-left py-3 px-4">Active</td>
                      <td className="w-1/3 text-left py-3 px-4">Disable</td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="w-1/3 text-left py-3 px-4">Lian Smith</td>
                      <td className="w-1/3 text-left py-3 px-4">
                        Administrator
                      </td>
                      <td className="text-left py-3 px-4">
                        <a
                          className="hover:text-blue-500"
                          href="mailto:jonsmith@mail.com"
                        >
                          jonsmith@mail.com
                        </a>
                      </td>
                      <td className="text-left py-3 px-4">
                        <a className="hover:text-blue-500" href="tel:622322662">
                          622322662
                        </a>
                      </td>
                      <td className="w-1/3 text-left py-3 px-4">Active</td>
                      <td className="w-1/3 text-left py-3 px-4">Disable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          <footer className="w-full bg-white text-right p-4">
            Built by{" "}
            <a
              target="_blank"
              href="https://davidgrzyb.com"
              className="underline"
            >
              David Grzyb
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
