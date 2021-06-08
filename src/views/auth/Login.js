import { useState } from "react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = () => {
    console.log("clicked");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          style={{ backgroundColor: "#282c34" }}
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="bg-white w-full mx-auto py-10 px-10">
              <div class="sm:flex flex-col sm:items-center space-y-10">
                <h4 class="font-bold text-2xl text-green-ngo">Welcome back</h4>
                <div class="w-full space-y-4">
                  <div class="w-full">
                    <input
                      type="text"
                      class="w-full px-4 py-2 outline-none rounded-lg border"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="w-full">
                    <input
                      type="password"
                      class="w-full px-4 py-2 outline-none rounded-lg border"
                      placeholder="Your Password"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  class="bg-black text-white px-20 py-2 rounded-lg focus:outline-none"
                  disabled={isLoading}
                  onClick={loginUser}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
