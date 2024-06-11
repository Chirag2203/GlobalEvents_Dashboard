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
import { FaThemeco } from "react-icons/fa";
import { MoonIcon, SunIcon } from "lucide-react";
import { handleThemeChange } from "@/lib/utils";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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


  return (
    <LoginConsole>
      <div className="p-12 login-page">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-medium dark:text-gray-300 text-slate-800">
            Login to your account
          </p>
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
              Username{" "}
            </label>
            <Input
              id="username"
              name="username"
              type="email"
              className="input-primary "
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label htmlFor="password" className="input-label justify-start">
              <RiLockPasswordLine className="text-xl" /> Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              className="input-primary"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex gap-4 justify-end items-center mt-4">
            <Button className="secondary-btn bg-transparent text-sky-500 hover:text-sky-400 hover:bg-transparent">Forgot Password</Button>
            {/* <Button
                className="w-1/3 bg-lpurple/90 text-white hover:bg-lpink/80 text-md"
                onClick={handleRegister}
              >
                Register
              </Button> */}
            <Button className="main-btn w-1/3" onClick={onLogin}>
              Login
            </Button>
          </div>
          {loading && (
            <div className="mt-2 flex justify-center">
              <MainLoader />
            </div>
          )}
        </form>
        <div className="mt-4">
          Don't have an account?{" "} 
          <Link to="/register" className="text-sky-500 hover:text-sky-400">Register</Link>

        </div>
      </div>
    </LoginConsole>
  );
};

export default Login;
