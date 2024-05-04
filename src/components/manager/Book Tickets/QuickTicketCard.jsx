import React from "react";
import { IoPeople } from "react-icons/io5";

const QuickTicketCard = ({ ticket, handleTicketSelect,selectedTickets,index }) => {
  return (
    <div
      key={index}
      className={`flex w-1/3 justify-between border p-4 cursor-pointer rounded-md ${
        selectedTickets.includes(index)
          ? "gradient-blue text-gray-200 "
          : "dark:bg-slate-800 bg-slate-200 "
      }`}
      onClick={() => handleTicketSelect(index)}
    >
      <div className="flex flex-col w-[70%]">
        <p className="font-semibold ">{ticket.name}</p>
        <p className="text-sm ">{ticket.description}</p>
      </div>
      <div className="flex gap-4 flex-col justify-between items-end">
        <p className="  flex gap-1 ">
          {ticket.entryCount} <IoPeople className="mt-1 text-md" />
        </p>
        <p className=" font-semibold">{ticket.price} ₹</p>
      </div>
    </div>
  );
};

export default QuickTicketCard;
