import "../../App.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AdminService from "../../services/admin";

function SingleAdmin() {
  let { adminId } = useParams();

  const [admin, setAdmin] = useState({});
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const fetchAdmin = () => {
    AdminService.getSingleAdmin(adminId)
      .then((res) => {
        setAdmin(res.admin);
        setIsLoadingPage(false);
        // console.log(admin, isLoadingPage);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingPage(false);

      });
  };

   useEffect(() => {
     fetchAdmin();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  return (
    <>
      <h1 className="text-3xl text-black pb-2">Profile</h1>
      {isLoadingPage ? (
        <div className="w-full h-full">
          <span className="text-center text-5xl">Loading...</span>
        </div>
      ) : (
        <div className="container mx-auto mt-1 mb-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src={admin.podcast_profile.profile_image}
                    alt={admin.name}
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {admin.name}
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  {admin.role} at Xchange Inc.
                </h3>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  {admin.about ? admin.about : admin.podcast_profile.about}
                </p>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        {admin.status}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Feb 07, 2021</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Full Name</div>
                      <div className="px-4 py-2">{admin.name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">Nil</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">
                        {admin.phone_no ? admin.phone_no : "Nil"}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Country</div>
                      <div className="px-4 py-2">
                        {admin.country ? admin.country : "Nil"}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">City</div>
                      <div className="px-4 py-2">
                        {admin.city ? admin.city : "Nil"}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">
                        <span className="text-blue-800">{admin.email}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Birthday</div>
                      <div className="px-4 py-2">Nil</div>
                    </div>
                  </div>
                </div>
                <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                  Show Full Information
                </button>
              </div>

              <div className="my-4"></div>

              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Social Profile</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">Facebook</div>
                        <div className="text-blue-500 text-xs">
                          https://www.facebook.com/
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">Linkedin</div>
                        <div className="text-blue-500 text-xs">
                          https://instagram.com/
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">Twitter</div>
                        <div className="text-blue-500 text-xs">
                          https://twitter.com
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">Instagram</div>
                        <div className="text-blue-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleAdmin;
