import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "@/assets/logo.jpeg";
import { Button } from "../ui/button";
import { Settings2 } from "lucide-react";

const Sidebar = ({ data }) => {
  const location = useLocation();

  const signOut = () => {
    localStorage.clear();
    toast.success("Logged out successfully!");
    setTimeout(() => {
      window.location.href = "/";
    }, 1300);
  };

  const handleThemeChange = () => {
    const currTheme = localStorage.getItem("theme");
    if (currTheme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    
  };

  return (
    <div>
      <ToastContainer />
      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-1/3 lg:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-white shadow-md dark:bg-gray-900">
        <a href="" class="flex items-center gap-2 mb-5 ml-2">
            
            <div className="mt-2">
              <p className="text-3xl font-semibold text-secondaryMain">Global Events</p>
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
                      ? "border-primaryDark border text-secondaryMain rounded-md dark:text-primaryLight"
                      : `${item.status === 'disabled' ? 'text-gray-400 cursor-not-allowed' : 'hover:text-white hover:bg-gradient-to-r hover:to-primaryLight hover:from-primaryDark dark:hover:bg-gray-700 group '} rounded-lg dark:text-white group-hover:text-white`
                  }`}
                >
                  <item.logo
                    className={`w-5 h-5 ${
                      location.pathname === item.link
                        ? ""
                        : item.status === 'disabled' ? 'opacity-50' : 'text-primaryDark transition-colors duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white'
                    }`}
                  />
                  <p className={`text-lg ${item.status === 'disabled' ? 'text-gray-400' : ''}`}>{item.title}</p>
                </div>
              </Link>
            ))}
          </ul>
          <div className=" mt-8  flex-col flex  gap-2">
          <button
            onClick={handleThemeChange}
            className="flex gap-2 w-full cursor-pointer text-blue-600 justify-start items-center p-2  rounded-lg hover:border hover:border-blue-600 dark:text-white border "
          >
            <Settings2 className="w-5 h-5 transition-colors duration-75 dark:text-gray-400 " />
            <p className="text-lg font-medium ">Switch theme</p>
          </button>
          <button
            onClick={signOut}
            className="flex gap-2 w-full cursor-pointer text-red-600 justify-start items-center p-2  rounded-lg hover:border hover:border-red-600 border"
          >
            <TbLogout className="w-5 h-5 transition-colors duration-75 dark:text-gray-400 " />
            <p className="text-lg font-medium ">Log out</p>
          </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
