import React from "react";
import { IoPeople } from "react-icons/io5";

const TicketCard = ({ ticket }) => {
  return (
    <div
      className={`flex justify-start gap-4 border p-2 cursor-pointer rounded-md dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 hover:dark:bg-slate-900`}
    >
    {/* unspalash image */}
            <img
            src="https://source.unsplash.com/random"
            alt="ticket"
            className="w-16 h-16 rounded-md"
            />
      <div className="flex flex-col ">
        <p className="font-semibold ">{ticket.name}</p>
        <p className="text-sm ">{ticket.description}</p>
      </div>
    </div>
  );
};

export default TicketCard;
