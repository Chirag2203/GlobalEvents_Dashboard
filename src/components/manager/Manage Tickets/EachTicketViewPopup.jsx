import { Button } from "@/components/ui/button";
import React, {  useState } from "react";
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
import { BiCalendar } from "react-icons/bi";
import TicketCard from "../Book Tickets/TicketCard";
import { IoLocationOutline } from "react-icons/io5";
import { TbClock } from "react-icons/tb";

const EachTicketViewPopup = ({ ticket }) => {
  const [count, setCount] = useState(1);

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
                    className={`border border-blue-500 cursor-pointer rounded-md flex justify-between w-1/3 p-2 `}
                      key={index}
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
                      className={`border border-blue-500 cursor-pointer rounded-md flex justify-between w-1/3 p-2 `}
                      key={index}
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

export default EachTicketViewPopup;
