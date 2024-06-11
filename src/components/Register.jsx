import { useState } from "react";
import { Button } from "./ui/button";
import MainLoader from "./shared/MainLoader";
import {
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiUser3Line,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import bg from "@/assets/backgrounds/login.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { BoxBg } from "./shared/BoxBg";
import LoginConsole from "./LoginConsole";
import { handleThemeChange } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });
  // Function to convert timezone offset to string
  const getTimezoneOffsetString = (offset) => {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset / 60);
    const minutes = absOffset % 60;
    return `${sign}${padZero(hours)}${padZero(minutes)}`;
  };

  // Function to pad zeros
  const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };

  const onLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      if (username === "admin" && password === "admin") {
        navigate("/admin/home");
      } else if (username === "manager" && password === "manager") {
        navigate("/manager/home");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoading(false);
      toast.error("An error occurred while logging in");
    } finally {
      setLoading(false);
    }

    // e.preventDefault();
    // localStorage.clear();
    // try {
    //   setLoading(true);
    //   if (!username || !password) {
    //     toast.error("Please fill all the fields");
    //     return;
    //   }
    //   const formData = {
    //     userName: username,
    //     password: password,
    //     userType: userType,
    //   };
    //   // console.log(formData);
    //   const response = await axios.post(
    //     "https://api.odishajagruti.in/api/webapp/v1/loginAdmin",
    //     // "http://localhost:4000/api/webapp/v1/loginAdmin",
    //     formData
    //   );
    //   setLoading(false);
    //   if (response.status === 200) {
    //     // console.log(response)
    //     const token = response.data.token
    //     // console.log("-->>>>token",token)
    //     localStorage.setItem("token",token.toString())
    //     navigate("/verify-otp")
    //     toast.success("Complete 2 factor authentication");
    //   } else {
    //     toast.error(response.data.message || "Invalid username or password");
    //   }

    //   const date = new Date();
    //   const dateString = `${date.toDateString()} ${date.toTimeString()} GMT${getTimezoneOffsetString(date.getTimezoneOffset())}`;
    //   localStorage.setItem("lastLogin", dateString)

    // } catch (error) {
    //   console.error("Error logging in:", error);
    //   setLoading(false);
    //   toast.error("An error occurred while logging in");
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
      <LoginConsole>
        <div className="p-12 login-page">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
          <p className="text-3xl font-medium dark:text-gray-300 text-slate-800">
           Let's get started! 
          </p>
          <p>Register your account to continue</p>
          </div>
          <div>
            {localStorage.getItem("theme") === "dark" ? (
              <button onClick={handleThemeChange}>
                <SunIcon className="w-8 h-8  cursor-pointer" />
              </button>
            ) : (
              <button onClick={handleThemeChange}>
                <MoonIcon className="w-8 h-8  cursor-pointer" />
              </button>
            )}
          </div>
        </div>
        <form className="signup-box h-auto w-full mx-0 mt-16">
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="email-address"
              className="input-label justify-start"
            >
              <RiUser3Line className="text-xl" />
              Name{" "}
            </label>
            <Input
              id="username"
              name="name"
              type="string"
              className="input-primary "
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="email-address"
              className="input-label justify-start"
            >
              <RiUser3Line className="text-xl" />
              Username{" "}
            </label>
            <Input
              id="username"
              name="username"
              type="email"
              className="input-primary "
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="password"
              className="input-label justify-start"
            >
              <RiLockPasswordLine className="text-xl" /> Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              className="input-primary"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-4 justify-end items-center mt-4">
              {/* <Button
                className="w-1/3 bg-lpurple/90 text-white hover:bg-lpink/80 text-md"
                onClick={handleRegister}
              >
                Register
              </Button> */}
            <Button
              className="main-btn w-1/3"
              onClick={onLogin}
            >
              Register
            </Button>
          </div>
          
          {loading && (
            <div className="mt-2 flex justify-center">
              <MainLoader />
            </div>
          )}
        </form>
        <p className=" mt-4">
            Already have an account?{" "}
          <Link to="/" className="text-center text-sky-500 hover:text-sky-400">
             Login
          </Link>
          </p>
        </div>
      </LoginConsole>
  );
};

export default Login;
