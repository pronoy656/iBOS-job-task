import { useContext } from "react";
import { FaApple } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const allInputField = { email, password };
    console.log(allInputField);

    userLogin(email, password)
      .then((logInUser) => {
        console.log(logInUser.user);
        toast.success("login successfully");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div className="mt-20">
      <div className="flex flex-row-reverse w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg  dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2 relative"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/JpqG7M2/chris-lee-70l1t-DAI6r-M-unsplash-1.png')",
          }}
        >
          <div className="absolute w-[340px]  mt-[300px] ml-16">
            <div className="flex justify-center">
              <img src="https://i.ibb.co/xGkVs7h/icon.png" alt="" />
            </div>
            <p className="text-[40px] font-bold text-white text-center">
              Furni <span className="text-[#4977EE]">Flex</span>
            </p>
            <p className="text-white text-xs font-medium">
              Discover a seamless shopping experience with our curated <br />{" "}
              collection of products. From fashion to electronics, we bring{" "}
            </p>
            <p className="text-center text-white text-base font-medium">
              quality.
            </p>
          </div>
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 bg-[#F5F5F5]">
          <p className="mt-3 text-[24px] font-semibold text-center text-[#000000] dark:text-gray-200">
            Welcome Back
          </p>

          <p className="text-center text-base font-medium text-[#707070]">
            Enter your Credentials to access your account
          </p>

          <form onSubmit={handleLogIn}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="flex space-x-1 items-center mt-2">
              <input type="checkbox" name="" id="" />
              <p className="text-[14px] font-medium">
                I agree to the Terms & Policy
              </p>
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="border border-[#D9D9D9] w-[218px] h-[52px] rounded-md flex space-x-2 items-center justify-center">
              <div>
                <img
                  className="w-[20px] h-[20px]"
                  src="https://i.ibb.co/31x8wFc/png-transparent-google-logo-google-text-trademark-logo-thumbnail-removebg-preview.png"
                  alt=""
                />
              </div>
              <p className="text-base font-medium">Sign in with Google</p>
            </button>
            <button className="border border-[#D9D9D9] w-[218px] h-[52px] rounded-md flex space-x-2 items-center justify-center">
              <div className="text-black text-2xl">
                <FaApple />
              </div>
              <p className="text-base font-medium">Sign in with apple</p>
            </button>
          </div>
          <p className="text-center text-[16px] font-medium mt-5">
            Have an account?{" "}
            <Link to={"/register"}>
              <span className="text-[#1E99F5]">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
