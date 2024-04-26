import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" h-screen w-1/2 flex flex-1 flex-col justify-start px-6  lg:px-8 bg-[#ffffff] ">
      <div className="">
        <img
          className="mx-auto -mt-10  w-72"
          src="./src/assets/logo (1).png"
          alt="Logo"
        />
        <h1 className="-mt-20 text-center text-xl font-extralight leading-9 tracking-tight text-gray-950">
          Welcome to Backle, a platform to connect with the social world
        </h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-950">
          Log in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-950"
            >
             
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-950"
              >
                
              </label>
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-semibold text-[#000000] transition-opacity hover:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
          <Link to="/home" >
            <button
              type="button"
              onClick={handleSignIn}
              className="flex w-full justify-center rounded-md bg-[#00bf63] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#369e47] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </Link>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-950">
          Not a member?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-[#00bf63] hover:text-[#79dd9f]"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
