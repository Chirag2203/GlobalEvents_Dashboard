import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "@/assets/logo.jpeg";

const Sidebar = ({ data }) => {
  const location = useLocation();

  const signOut = () => {
    localStorage.clear();
    toast.success("Logged out successfully!");
    setTimeout(() => {
      window.location.href = "/";
    }, 1300);
  };

  return (
    <div>
      <ToastContainer />
      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-1/3 lg:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-white shadow-md dark:bg-gray-800">
        <a href="" class="flex items-center gap-2 mb-5">
            <img
              src={logo}
              class=" w-16 rounded-full border-2 "
              alt=" Logo"
            />
            <div className="mt-2">
              <p className="text-3xl font-semibold text-lpurple">RajaFarms</p>
              <p>
                Management Console
              </p>
            </div>
          </a>
          <ul class="space-y-2 font-medium flex flex-col items-start w-full">
            {data.map((item, index) => (
              <Link to={item.link} key={index} className="w-full">
                <div
                  className={`w-full flex gap-2 justify-start items-center p-2 ${
                    location.pathname === item.link
                      ? "border-lpink border text-lpink rounded-md"
                      : `${item.status === 'disabled' ? 'text-gray-400 cursor-not-allowed' : 'hover:text-white hover:bg-gradient-to-r hover:from-lpink/90 hover:to-lpurple/100 dark:hover:bg-gray-700 group'} rounded-lg dark:text-white group-hover:text-white`
                  }`}
                >
                  <item.logo
                    className={`w-5 h-5 ${
                      location.pathname === item.link
                        ? ""
                        : item.status === 'disabled' ? 'opacity-50' : 'text-lpurple transition-colors duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white'
                    }`}
                  />
                  <p className={`text-lg ${item.status === 'disabled' ? 'text-gray-400' : ''}`}>{item.title}</p>
                </div>
              </Link>
            ))}
          </ul>
          <button
            onClick={signOut}
            className="flex gap-2 mt-8 w-full cursor-pointer text-red-600 justify-start items-center p-2  rounded-lg hover:border hover:border-red-600 dark:text-white hover:bg-white "
          >
            <TbLogout className="w-5 h-5 transition-colors duration-75 dark:text-gray-400  dark:group-hover:text-white" />
            <p className="text-lg font-medium ">Log out</p>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
