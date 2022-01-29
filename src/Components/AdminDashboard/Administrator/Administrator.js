import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

const Administrator = () => {
  const [email, setEmail] = useState(" ");
  const [administrator, setAdministrator] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(administrator);
  useEffect(() => {
    fetch("https://still-bayou-58826.herokuapp.com/users/administration/role")
      .then((res) => res.json())
      .then((data) => {
        setAdministrator(data);
      });
  }, [success]);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    setSuccess(false);
    setLoading(true);
    e.preventDefault();
    const user = { email };
    fetch("https://still-bayou-58826.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setLoading(false);
          setSuccess(true);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {administrator.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.photoURL}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.title ? person.title : "Whatever"}
                        </div>
                        <div className="text-sm text-gray-500">
                          {person.department ? person.department : "Nothing"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          to="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {success && (
          <div
            id="toast-success"
            class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="ml-3 text-sm font-normal">
              Admin Creation successfully.
            </div>
            <button
              type="button"
              class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-collapse-toggle="toast-success"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )}
        <div className="flex flex-col max-w-4xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row ">
          <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
            <div className="py-6 px-8 md:py-0">
              <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100">
                Make Your Trusted Administrator
              </h2>
              <p className="mt-2 text-gray-600 md:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur obcaecati odio
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
            {loading && (
              <div className="flex justify-center items-center h-screen">
                <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
                </div>
              </div>
            )}
            <form onSubmit={handleLoginSubmit}>
              <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                <input
                  className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Administrator;
