import React from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = ({ setToken, setMethod }) => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const getToken = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(e.target.email.value, e.target.password.value);
  };

  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
  }

  if (user) {
    localStorage.setItem("token", user.user.accessToken);
    window.location.reload();
  }

  return (
    <div className="bg-dark-ash h-screen w-screen md:p-5 pt-5">
      <div className="w-11/12 md:w-1/2 mx-auto bg-blue text-white p-3 md:p-5">
        <h1 className="text-center text-2xl font-medium">Login</h1>
        <hr className="text-secondary-ash w-1/2 mx-auto my-2" />

        <form className="md:w-2/3 mx-auto text-white" onSubmit={getToken}>
          <label htmlFor="email" className="ml-1 text-lg">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 focus:outline-none rounded-md text-black mb-3"
            placeholder="Enter Your Email Address Here"
          />

          <label htmlFor="password" className="ml-1 text-lg">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 focus:outline-none rounded-md text-black"
            placeholder="Enter your Password Here"
          />

          <div className="flex justify-end">
            <input
              type="submit"
              disabled={loading}
              className="bg-green hover:bg-dark-green px-5 py-2 mt-3 rounded-md"
              value={loading ? "loading..." : "Submit"}
            />
          </div>
        </form>

        <div className="text-center mt-5">
          Don't have an account?{" "}
          <button className="underline" onClick={() => setMethod("register")}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
