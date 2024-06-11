"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";
import { FaArrowRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

export function BoxBg() {
  return (
    <div className="dark:text-gray-200 p-12 h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col  justify-start  text-white">
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn("md:text-5xl font-bold text-xl heading-blue relative z-20")}
      >
        Global Events
      </h1>

      <p className=" mt-2 text-lg  font-semibold  relative z-20">
        The only place you need to manage your events.
      </p>
      
    </div>
  );
}
