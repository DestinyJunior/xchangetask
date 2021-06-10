import { useHistory } from "react-router-dom";
import "../../App.css";
import { useState } from "react";

function TopBar({ loginUser }) {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  // console.log(loginUser);
  const signOut = () => {
    localStorage.removeItem("u_p_d_1");
    history.push("/");
  };

  // AuthService.logout()
  //   .then(() => {
  //     localStorage.removeItem("u_p_d_1");
  //     <Redirect to="/" />;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     localStorage.removeItem("u_p_d_1");
  //     <Redirect to="/" />;
  //   });

  return (
    <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
      <div className="w-1/2"></div>
      <div className="relative w-1/2 flex items-center justify-end space-x-2">
        <span>{loginUser.email}</span>
        <button
          type="button"
          onClick={onMenuOpen}
          className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        >
          <img
        
        
                  src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"
    
    
                          alt="profile"
         
         
          />
        </button>
        {/* <button className="h-full w-full fixed inset-0 cursor-default"></button> */}
        {isMenuOpen ? (
          <div className="absolute bg-white rounded-lg shadow-lg py-2 px-2 mt-52">
            <a
              href="#"
              className="block px-4 py-2 account-link hover:text-white"
            >
              Account
            </a>
            <a
              href="#"
              className="block px-4 py-2 account-link hover:text-white"
            >
              Support
            </a>
            <button
              onClick={signOut}
              className="block px-4 py-2 account-link hover:text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default TopBar;
