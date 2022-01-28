import { React, Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ViewGridIcon } from "@heroicons/react/solid";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import PendingBlog from "../PendingBlog/PendingBlog";
import Administrator from "../Administrator/Administrator";
import Visitor from "../Visitor/Visitor";
import BlogUploadForm from "../../Pages/Blog/BlogUploadForm";

const subCategories = [
  { name: "Home", href: "/home" },
  { name: "Pending Blog", href: "pending-blog" },
  { name: "Administrator", href: "administrator" },
  { name: "Visitor", href: "visitor" },
  { name: "New Blog", href: "new-blog" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Admin = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <>
      <div className="bg-[#ef4270] text-white text-lg ">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul className="font-medium text-gray-900 px-2 py-3">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <Link to={category.href} className="block px-2 py-3">
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </form>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between pt-5 pb-6 border-b border-white">
              <h1 className="text-4xl font-extrabold tracking-tight text-white">
                <Link to="/home">Travel24</Link>
              </h1>

              <div className="flex items-center">
                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Travel24</span>
                  <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6">
              <div className="grid gap-5 grid-cols-1 lg:grid-cols-4">
                <div className="hidden lg:block  rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 h-fit">
                  <h3 className="sr-only">Categories</h3>
                  <div className="flex flex-col text-sm font-medium text-gray-900">
                    {subCategories.map((category) => (
                      <Link
                        to={category.href}
                        key={category.name}
                        className="py-4 px-5 text-lg font-medium text-[#ffff]"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Product grid */}
                <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 lg:col-span-3 min-h-screen p-5 font-normal">
                  <Outlet />
                  <Routes>
                    <Route path="/" element={<PendingBlog />} />
                    <Route path="pending-blog" element={<PendingBlog />} />
                    <Route path="administrator" element={<Administrator />} />
                    <Route path="visitor" element={<Visitor />} />
                    <Route path="new-blog" element={<BlogUploadForm />} />
                  </Routes>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
