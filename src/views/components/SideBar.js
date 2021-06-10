import "../../App.css";
import { Link } from "react-router-dom";


function SideBar({ loginUser }) {
  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <div className="flex flex-col">
          <a
            href="index.html"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </a>
          <span>{loginUser.name}</span>
        </div>
        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i className="fas fa-plus mr-3"></i> New Report
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <Link
          to="/dashboard"
          className="flex items-center text-white opacity-75 active-nav-link hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i className="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </Link>
        <Link
          to="/dashboard/admin/create"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i className="fas fa-user-plus mr-3"></i>
          Add Admin
        </Link>
      </nav>
    </aside>
  );
}

export default SideBar;
