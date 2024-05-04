import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FaClock, FaDownload, FaSave, FaSearch } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { TableComponent } from "@/components/shared";
import { ExcelDownload, PdfDownload } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { BiCalendar, BiSave } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import TicketCard from "./TicketCard";
import { Calendar, Clock } from "lucide-react";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TbClock } from "react-icons/tb";

const TicketBookingPopup = ({ ticket, handleAddToCart }) => {
  const [count, setCount] = useState(1);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [selectedFee, setSelectedFee] = useState(null);

  const handleAddToCartClick = () => {
    console.log("Adding to cart");
    console.log(ticket, count, selectedDiscount, selectedFee);
    if(selectedFee===null){
        alert("Please select a fee")
        return
    }
    if (selectedDiscount!==null) {
        handleAddToCart(ticket, count, selectedDiscount, selectedFee);
    } else {
      return ()=> handleAddToCart(ticket, count, { value: 0 }, selectedFee); // No discount selected
    }
  };
  const handleAddDiscount = (disc) => {
    if(selectedDiscount === disc){
      setSelectedDiscount(null)
    }
    else{
      setSelectedDiscount(disc)
      console.log(disc)
    }
  };
  const handleAddFee = (fee) => {
    if(selectedFee === fee){
      setSelectedFee(null)
    } else {
        setSelectedFee(fee)
        }
  };

  return (
    <div className="w-1/4">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full">
            <TicketCard ticket={ticket} />
          </div>
        </DialogTrigger>
        <DialogContent className="w-full max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-lpurple text-xl">
              Book {ticket.name}
            </DialogTitle>
            <div>
              <div className="pt-4 ">
                <p className="font-medium dark:text-blue-300 text-lg mb-1">
                  Fees
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {ticket.feeStructure.map((fee, index) => (
                    <div
                    className={`border border-blue-500 cursor-pointer rounded-md flex justify-between w-1/3 p-2 ${
                        selectedFee === fee ? "gradient-blue text-gray-200" : ""
                      }`}
                      key={index}
                      onClick={() => handleAddFee(fee)}
                    >
                      <div className="flex flex-col gap-2  ">
                        <p className="text-lg font-medium">{fee.name}</p>
                        <p className="text-sm dark:text-gray-300">
                          {fee.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 items-end ">
                        <p className="text-lg font-medium ">{fee.price}₹</p>
                        <p className="text-sm dark:text-gray-300">
                          {fee.count}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <p className="font-medium dark:text-blue-300 text-lg mb-1">
                  Discounts
                </p>
                <div className="flex flex-wrap gap-2">
                  {ticket.discounts.map((disc, index) => (
                    <div
                      className={`border border-blue-500 cursor-pointer rounded-md flex justify-between w-1/3 p-2 ${
                        selectedDiscount === disc ? "gradient-blue text-gray-200" : ""
                      }`}
                      key={index}
                      onClick={() => handleAddDiscount(disc)}
                    >
                      <div className="flex flex-col gap-2">
                        <p className="text-lg font-medium">{disc.name}</p>
                        <p className="text-sm dark:text-gray-300">
                          {disc.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <p className="text-lg font-medium">{disc.value}%</p>
                        <p className="text-sm dark:text-gray-300">
                          {disc.count}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="font-medium dark:text-blue-300 text-lg mb-2">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => setCount(count - 1)}
                    disabled={count <= 1}
                    className="text-2xl font-medium hover:dark:bg-blue-200 hover:bg-slate-700"
                  >
                    -
                  </Button>
                  <p className="text-lg font-medium">{count}</p>
                  <Button onClick={() => setCount(count + 1)} className="text-2xl font-medium hover:dark:bg-blue-200 hover:bg-slate-700">+</Button>
                </div>

              </div>
              <div className="pt-8">
                <p className="font-medium dark:text-blue-300 text-lg mb-1">
                  Details
                </p>
                <div className="flex">
                  <div className="flex flex-col gap-1 w-1/4">
                    <p className="text-lg font-medium flex items-center gap-1">
                      <BiCalendar className="" /> Date
                    </p>
                    <p className=" dark:text-gray-300">{ticket.date}</p>
                  </div>
                  <div className="flex flex-col gap-1 w-1/4">
                    <p className="text-lg font-medium flex items-center gap-1">
                      <TbClock /> Time
                    </p>
                    <p className=" dark:text-gray-300">{ticket.time}</p>
                  </div>
                  <div className="flex flex-col gap-1 w-1/4">
                    <p className="text-lg font-medium flex items-center gap-1">
                      <IoLocationOutline /> Location
                    </p>
                    <p className=" dark:text-gray-300">{ticket.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4 justify-end">
              <Button
                className="w-fit flex items-center gap-2 mt-4 hover:text-lpurple "
                variant={"outline"}
                onClick={() => handleAddToCartClick()}
              >
                Add to cart <MdDone />
              </Button>
            </div>
          </DialogHeader>
          {/* 
          <DialogFooter>
            <Button type="submit" className="bg-lpurple hover:bg-lpurple/90"> Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TicketBookingPopup;
