import logo from "../../logo.svg";
import "../../App.css";

function NotFound() {
  console.log("404");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-blue-400">Page not Found</p>
      </header>
    </div>
  );
}

export default NotFound;
