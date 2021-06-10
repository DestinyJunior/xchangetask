import { useState } from "react";
import AuthService from "../../services/auth"
import { Redirect, useHistory } from "react-router-dom";



function Login() {
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");

    const history = useHistory();



    const loginUser = (e) => {
      e.preventDefault();
      setIsLoading(true);
      // console.log({ email, password })

      var data = {
        email: email,
        password: password,
      };
      AuthService.adminLogin(data)
        .then((res) => {
          // console.log(res)
         
          history.push("/dashboard");
        //   setTimeout(() => {
        //     setIsLoading(false);
        //   }, 1000);
        })
        .catch((err) => {
        //   console.log(err);
          setIsLoading(false);
          setError("Email and password not correct, check and try again.")
        });
    };

    if (AuthService.isLoggedIn()) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div
            className="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    style={{ backgroundColor: "#282c34" }}
                ></div>

                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
        </span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="bg-white w-full mx-auto py-10 px-10">
                            <form method="POST">
                                <div className="sm:flex flex-col sm:items-center space-y-10">
                                    <h4 className="font-bold text-2xl text-green-ngo">Welcome back</h4>
                                        {error != '' ? (
                                            <div className="py-2 px-3 border border-red-300 rounded">{error}</div>
                                        ): "" }
                                    <div className="w-full space-y-4">
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 outline-none rounded-lg border"
                                                placeholder="Your Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="w-full">
                                            <input
                                                type="password"
                                                className="w-full px-4 py-2 outline-none rounded-lg border"
                                                placeholder="Your Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-black text-white px-20 py-2 rounded-lg focus:outline-none disabled:bg-gray-50"
                                        disabled={isLoading}
                                        onClick={loginUser}
                                    >
                                        {isLoading ? "loading..." : "Signing"}
                                        </button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;
