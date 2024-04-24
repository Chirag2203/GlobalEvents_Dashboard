import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import jagratiLogo from "../../assets/jagrati-logo.png";
import { FaArrowRight } from "react-icons/fa";
const NotFound = () => {
  return (
    <div className=" mt-8 flex flex-col item-center items-center min-h-screen gap-8">
      <div className="flex justify-center gap-4">
        <img
          src={jagratiLogo}
          alt="jagratiLogo"
          className="w-32 rounded-full border-2 border-lpurple"
        />
        <div className="mt-2">
          <p className="text-4xl font-medium text-lpurple">Jagruti</p>
          <p>
            An initiative by{" "}
            <span className="font-semibold">Govt. of Odisha</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 flex-col " >
       <p className="font-bold text-lpurple text-4xl mt-16"> 404 NOT FOUND</p>
        <p className="text-lg text-lblue font-semibold">The page you are looking for does not exist</p>
        <Link to={"/"}>
          <Button className="purple-btn ">Go to Sign in <FaArrowRight/> </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
