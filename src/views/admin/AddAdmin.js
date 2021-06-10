import "../../App.css";

function AddAdmin() {
  return (
    <div className="w-full  mt-6 pl-0 lg:pl-2">
      <p className="text-xl pb-6 flex items-center">
        <i className="fas fa-user-plus mr-3"></i> ADD ADMIN
      </p>
      <div className="leading-loose">
        <form className="p-10 bg-white rounded shadow-xl">
          <p className="text-lg text-gray-800 font-medium pb-4">
            Admin information
          </p>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Firstname
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required
              placeholder="First name"
              aria-label="FirstName"
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Lastname
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required
              placeholder="Last name"
              aria-label="Lastname"
            />
          </div>
          <div className="inline-block mt-2  pr-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Email Address
            </label>
            <input
              className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="email"
              required
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Phone Number
            </label>
            <input
              className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="tel"
              required=""
              placeholder="Phone number"
              aria-label="PhoneNumber"
            />
          </div>
          <div className="mt-2">
            <label className=" block text-sm text-gray-600" htmlFor="cus_email">
              Sex
            </label>
            <select className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">
              <option>Male</option>
              <option>Female</option>
            </select>
            {/* <input
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Street"
              aria-label="Email"
            /> */}
          </div>
          <div className="mt-2">
            <label className=" block text-sm text-gray-600" htmlFor="cus_email">
              Country
            </label>
            <select className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">
              <option>Nigeria</option>
              <option>Ghana</option>
            </select>
            {/* <input
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Street"
              aria-label="Email"
            /> */}
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              State
            </label>
            <select className="w-full px-2 py-3 text-gray-700 bg-gray-200 rounded">
              <option>Kwara</option>
              <option>Lagos</option>
              <option>Edo</option>
            </select>
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              City
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="City"
              aria-label="Email"
            />
          </div>

          {/* <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Zip
            </label>
            <input
              className=""
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Zip"
              aria-label="Email"
            />
          </div> */}
          <div className="mt-2">
            <label className=" block text-sm text-gray-600" htmlFor="message">
              About
            </label>
            <textarea
              className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
              id="message"
              name="message"
              rows="6"
              required=""
              placeholder="About"
              aria-label="Email"
            ></textarea>
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Profile Picture
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="file"
              required=""
              placeholder="Choose Image"
              aria-label="Email"
            />
          </div>
          <p className="text-lg text-gray-800 font-medium py-4">
            Social Profile
          </p>
          <hr />
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Facebook Profile
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              name="facebook"
              type="url"
              required
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Twitter Handle
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              name="twitter"
              type="url"
              required
            />
          </div>
          <div className="inline-block mt-2  pr-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Instagram Handle
            </label>
            <input
              className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"
              name="instagram"
              type="url"
              required
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Tiktok Handle
            </label>
            <input
              className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"
              name="tiktok"
              type="url"
              required
            />
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Youtube Page
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              name="youtube"
              type="url"
              required
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Linkedin Profile
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              name="linkedin"
              type="url"
              required
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Role
            </label>
            <select className="w-full px-2 py-3 text-gray-700 bg-gray-200 rounded">
              <option>Administration</option>
              <option>Staff</option>
              <option>Moderator</option>
            </select>
          </div>
          <div className="mt-2 py-3 px-6 bg-red-200">
            <h5 className="text-lg font-bold">ADMINISTRATION</h5>
            <p>
              This user will have access to every module and feature in the
              system.
            </p>
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Status
            </label>
            <select className="w-full px-2 py-3 text-gray-700 bg-gray-200 rounded">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="mt-6">
            <button
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAdmin;
