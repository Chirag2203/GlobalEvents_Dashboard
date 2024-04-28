import { useState } from "react";
import { Button } from "./ui/button";
import MainLoader from "./shared/MainLoader";
import {
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiUser3Line,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import logo from "@/assets/logo.jpeg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        if(username === "admin" && password === "admin"){
            navigate("/admin/home")
        }else if(username === "manager" && password === "manager"){
            navigate("/manager/home")
        }else{
            toast.error("Invalid username or password")
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
    <div>
      <ToastContainer />
      <div className="mt-8 flex flex-col item-center items-center min-h-screen gap-8  ">
        <div className="flex justify-center items-center gap-4 flex-col">
            <p className="text-4xl font-medium text-lpurple">Global Events</p>
            <p>
              Connecting you to{" "}
              <span className="font-semibold">The world of Events</span>
            </p>
         
        </div>
        <form className="signup-box">
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="email-address"
              className="text-lg flex gap-2 items-center"
            >
              <RiUser3Line className="text-xl" />
              Username{" "}
            </label>
            <input
              id="username"
              name="username"
              type="email"
              className="login-input  "
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="password"
              className="text-lg flex items-center gap-2"
            >
              <RiLockPasswordLine className="text-xl" /> Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4 justify-end items-center mt-4">
            <Button className="border border-input hover:bg-lpink/5 bg-white hover:text-lpink text-lpurple">
              Forgot Password
            </Button>
            {/* <Button
              className="w-1/3 bg-lpurple/90 text-white hover:bg-lpink/80 text-md"
              onClick={handleRegister}
            >
              Register
            </Button> */}
            <Button
              className="w-1/3 bg-lpurple/90 text-white hover:bg-lpink/80 text-md"
              onClick={onLogin}
            >
              Login
            </Button>
          </div>
          {loading && (
            <div className="mt-2 flex justify-center">
              <MainLoader />
            </div>
          )}
        </form>
        {/* <div className="flex flex-col items-center mt-12 gap-4 text-slate-800 ">
          <img src={govtLogo} alt="govtLogo" className="w-2/5 " />
          
        </div> */}
      </div>
    </div>
  );
};

export default Login;
