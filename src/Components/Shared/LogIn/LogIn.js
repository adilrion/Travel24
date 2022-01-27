import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/black-01.jpg";
import facebook from "../../Images/f.png";
import google from "../../Images/g.png";
import instaram from "../../Images/insta.png";
import twitter from "../../Images/tw.png";
import Navigation from "../Navigation/Navigation";
import "./LogIn.css";

const LogIn = () => {
  const { signInWithGoogle } = useAuth();
  const [newUser, setSetNewUser] = useState(true);

  const history = useNavigate();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle(history);
  };
  const handleNewUser = (e) => {
    e.preventDefault();
    setSetNewUser(false);
  };
  const handleSaveUser = (e) => {
    e.preventDefault();
    setSetNewUser(true);
  };
  return (
    <>
      <Navigation></Navigation>
      <section className="log-in-page flex items-center justify-center">
        <div className="log-in-section w-11/12 md:w-4/12 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto w-2/6 h-2/6 rounded-full"
                src={logo}
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-xl md:text-2xl lg:text-3xl font-extrabold text-cyan-600 capitalize ">
                Sign in to your account
                <br />
                <span className="uppercase text-4xl text-yellow-500">
                  Travel24
                </span>
              </h2>
            </div>
            {newUser ? (
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <p className="text-sky-400/100 font-medium text-xl">
                      Email<span className="text-yellow-500">*</span>
                    </p>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none mb-2 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <p className="text-sky-400/100 font-medium text-xl">
                      Password<span className="text-yellow-500">*</span>
                    </p>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-400"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="#"
                      className="font-medium text-cyan-600 hover:text-cyan-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            ) : (
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <p className="text-sky-400/100 font-medium text-xl">
                      Name<span className="text-yellow-500">*</span>
                    </p>
                    <label htmlFor="email-address" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="email-address"
                      name="name"
                      type="text"
                      autoComplete="Full Name"
                      required
                      className="appearance-none mb-2 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <p className="text-sky-400/100 font-medium text-xl">
                      Email<span className="text-yellow-500">*</span>
                    </p>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none mb-2 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <p className="text-sky-400/100 font-medium text-xl">
                      Password<span className="text-yellow-500">*</span>
                    </p>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-400"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="#"
                      className="font-medium text-cyan-600 hover:text-cyan-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            )}

            <div>
              {newUser ? (
                <p className="text-white font-medium text-xl">
                  New to GitHub?{" "}
                  <button onClick={handleNewUser} className="text-cyan-600">
                    Create an account →
                  </button>
                </p>
              ) : (
                <p className="text-white font-medium text-xl">
                  Already have an account?{" "}
                  <button onClick={handleSaveUser} className="text-cyan-600">
                    {" "}
                    Sign in →
                  </button>
                </p>
              )}
            </div>

            <div className=" w-full flex items-center justify-center">
              <button onClick={handleGoogleSignIn}>
                <img
                  className="w-7/12 h-2/6 rounded-full mx-auto"
                  src={google}
                  alt="Workflow"
                />
              </button>
              <button>
                <img
                  className="w-7/12 h-2/6 rounded-full mx-auto"
                  src={facebook}
                  alt="Workflow"
                />
              </button>
              <button>
                <img
                  className="w-7/12 h-2/6 rounded-full mx-auto"
                  src={instaram}
                  alt="Workflow"
                />
              </button>
              <button>
                <img
                  className="w-7/12 h-2/6 rounded-full mx-auto"
                  src={twitter}
                  alt="Workflow"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
