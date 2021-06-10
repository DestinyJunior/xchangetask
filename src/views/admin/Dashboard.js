import "../../App.css";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { getItem } from "../../utils/storage.helper";

// services
import AuthService from "../../services/auth";

// components
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

// pages
import AdminList from "./AdminList";
import SingleAdmin from "./SingleAdmin";
import NotFound from "../common/NotFound";

function DashBoard() {
  let { path } = useRouteMatch();

  if (!AuthService.isLoggedIn()) {
    return <Redirect to="/login" />;
  }

  const { user } = getItem("u_p_d_1");

  return (
    <div className="bg-gray-100 font-family-karla flex">
      <SideBar loginUser={user} />
      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <TopBar loginUser={user} />
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <Switch>
              <Route exact path={path} component={AdminList} />
              <Route
                exact
                path={`${path}/admin/:adminId/profile`}
                component={SingleAdmin}
              />
              <Route path={`${path}/*`} component={NotFound} />
            </Switch>
          </main>

          <footer className="w-full bg-white text-right p-4">
            Built by{" "}
            <a
              target="_blank"
              href="https://davidgrzyb.com"
              className="underline"
            >
              DestinyJunior
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
