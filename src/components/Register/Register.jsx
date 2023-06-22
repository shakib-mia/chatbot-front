import React, { useEffect, useState } from "react";
import { emailValidate, url } from "../../constants";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = ({ setMethod, setToken }) => {
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);

  const handleSignup = async (e) => {
    e.preventDefault();
    setName(e.target.fName.value + " " + e.target.lName.value);
    // try {
    if (
      emailValidate.test(e.target.email.value) &&
      e.target.password.value.length >= 5
    ) {
      if (e.target.password.value === e.target.confirmPass.value) {
        createUserWithEmailAndPassword(
          e.target.email.value,
          e.target.password.value
        );
      } else {
        alert("password did not match");
      }
    }
    // } catch {}
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      const body = {
        name,
        token: user.user.accessToken,
        email: user.user.email,
      };
      updateProfile({ displayName: name });
      // axios.post(url + "user", body).then((res) => console.log(res));
    }
  }, [user]);

  return (
    <div className="bg-dark-ash h-screen w-screen p-3 md:p-5 pt-5">
      <div className="w-11/12 md:w-1/2 mx-auto bg-blue text-white p-3 md:p-5">
        <h1 className="text-center text-2xl font-medium">Register</h1>
        <hr className="text-secondary-ash w-11/12 lg:w-1/2 mx-auto my-2" />

        <form className="lg:w-2/3 mx-auto text-white" onSubmit={handleSignup}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="fName" className="ml-1 text-lg">
                First Name:
              </label>
              <input
                type="text"
                id="fName"
                placeholder="First Name"
                className="w-full p-2 focus:outline-none rounded-md text-black mb-3 placeholder:text-[#00000034]"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lName" className="ml-1 text-lg">
                Last Name:
              </label>
              <input
                type="text"
                id="lName"
                placeholder="Last Name"
                className="w-full p-2 focus:outline-none rounded-md text-black mb-3 placeholder:text-[#00000034]"
              />
            </div>
          </div>
          <label htmlFor="email" className="ml-1 text-lg">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 focus:outline-none rounded-md text-black mb-3"
            placeholder="Enter Your Email Address Here"
            // onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="ml-1 text-lg">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 focus:outline-none rounded-md text-black mb-3"
            placeholder="Enter your Password Here"
            // onChange={(e) => setPass(e.target.value)}
          />

          <label htmlFor="confirmPass" className="ml-1 text-lg">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPass"
            name="confirmPass"
            className="w-full p-2 focus:outline-none rounded-md text-black"
            placeholder="Retype your Password Here"
            // onChange={(e) => setConfirmPass(e.target.value)}
          />

          <div className="flex justify-end">
            <input
              type="submit"
              disabled={disabled}
              className={`hover:bg-dark-green px-5 py-2 mt-3 disabled:cursor-not-allowed bg-green rounded-md cursor-pointer`}
              value="Submit"
            />
          </div>
        </form>

        <div className="text-center mt-5">
          Already have an account?{" "}
          <button className="underline" onClick={() => setMethod("login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
