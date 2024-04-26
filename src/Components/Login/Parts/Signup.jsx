import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }

    try {
      const response = await axios.post("http://localhost:8080/signup", {
        email,
        fullName,
        username,
        password,
        confirmPassword,
      });

      console.log("Signup successful:", response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response?.data?.message || "Unknown error"
      );
      setErrorMessage(
        error.response?.data?.message || "Signup failed: Unknown error"
      );
    }
  };

  return (
    <div className=" flex min-h-screen items-center justify-center flex-col px-6 pb-20 lg:px-8 bg-[#ffffff] w-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <a href="/">
          <img
            className="mx-auto h-auto w-auto -mt-28"
            src="./src/assets/logo (1).png"
            alt="Logo"
          />
        </a>
        <h1 className="-mt-32 text-center text-xl font-light leading-9 tracking-tight text-black">
          Sign up to Connect With Your friends.
        </h1>
        <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-black">
          Create an account
        </h2>
      </div>
      {errorMessage && <p className="text-gray-500 mb-4">{errorMessage}</p>}
      <form
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-black"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 mt-4">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-[#fafafa] "
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4 mt-4">
          <input
            type="text"
            id="fullName"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-[#fafafa] "
            placeholder="Username  "
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-[#fafafa] "
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-[#fafafa] "
            placeholder="Password"
          />
        </div>
        <div className="mb-4">
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-[#fafafa] "
            placeholder="Confirm Password"
          />
        </div>

        <Link to="/login">
          <button
            type="submit"
            className="bg-[#00bf63] font-bold px-4 py-2 rounded-md mt-5 sm:mx-auto sm:w-full sm:max-w-sm text-white transition hover:bg-[#307554]"
          >
            Sign up
          </button>
        </Link>
      </form>
      <div className="flex  p-5 mt-5">
        <h1>Have an account?</h1>
        <Link to="/login" className="font-bold text-[#00bf63] ">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
