import "../../App.css";
import { useState, useEffect } from "react";

import { Link, useRouteMatch } from "react-router-dom";

import AdminService from "../../services/admin";

function AdminList() {
  let { url } = useRouteMatch();
  const [admins, setAdmins] = useState([]);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const fetchAdmins = () => {
    AdminService.getAdmins()
      .then((res) => {
        // console.log(res);
        setAdmins(res.admins);
        setIsLoadingPage(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingPage(false);
      });
  };

  const disableAdmin = (Id) => {
    setIsLoadingPage(true);
    AdminService.disableAdmin(Id)
      .then((res) => {
        // console.log(res);
        fetchAdmins();
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingPage(false);
      });
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-black pb-6">Admin List</h1>

      <div className="w-full mt-6">
        <p className="text-xl pb-3 flex items-center"></p>
        <div className="bg-white overflow-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Admin
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
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
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
              </tr>
            </thead>
            {isLoadingPage ? (
              <tbody>
                <tr>
                  <td colSpan="6">
                    <div className="text-center py-6">
                      <p className="font-bold text-black text-lg">Loading...</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : !isLoadingPage && admins.length <= 0 ? (
              <tbody>
                <tr>
                  <td colSpan="6">
                    <div className="text-center py-6">
                      <p className="font-bold text-black text-lg">
                        No Admins Yet
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="text-gray-700">
                {admins.map((admin) => (
                  <tr key={admin.id}>
                    <td className="text-left py-3 px-4">{admin.name}</td>
                    <td className="text-left py-3 px-4">{admin.role}</td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        {admin.email}
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        {admin.phone_no ? admin.phone_no : "Nil"}
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      {admin.status === "active" ? (
                        <span className="text-green-600 px-1 py-1 rounded">
                          {admin.status}
                        </span>
                      ) : (
                        <span className="text-red-600 px-1 py-1 rounded">
                          {admin.status}
                        </span>
                      )}
                    </td>
                    <td className="text-left py-3 px-4">
                      {admin.status === "active" ? (
                        <button
                          onClick={() => disableAdmin(admin.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Disable
                        </button>
                      ) : (
                        <button className="bg-blue-500 text-white px-2 py-1 rounded">
                          Enable
                        </button>
                      )}
                    </td>
                    <td className="text-left py-3 px-4">
                      <Link to={`${url}/admin/${admin.id}/profile`}>
                        Profile
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminList;
