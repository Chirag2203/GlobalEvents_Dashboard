import React, { useState } from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "@/components/shared/Banner";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { IoPeople } from "react-icons/io5";
import PresetTicketPopup from "./PresetTicketPopup";
import ConfirmPopup from "@/components/shared/ConfirmPopup";
const ticketData = [
  {
    name: "Ticket 1",
    price: "100",
    description: "Description 1",
    entryCount: "2",
    id: 1,
  },
  {
    name: "Ticket 2",
    price: "150",
    description: "Description 2",
    entryCount: "1",
    id: 2,
  },
  {
    name: "Ticket 3",
    price: "200",
    description: "Description 3",
    entryCount: "3",
    id: 3,
  },
];


const handleDelete = () => {};
const ManagePresetTicket = () => {
  const [selectedTicketIndex, setSelectedTicketIndex] = useState("");
  const [selectedTicket, setSelectedTicket] = useState({});

  const handleTicketSelect = (index) => {
    if (selectedTicketIndex.includes(index)) {
      setSelectedTicketIndex(
        selectedTicketIndex.filter((item) => item !== index)
      );
    } else if (selectedTicketIndex.length > 0) {
      setSelectedTicketIndex([index]);
    } else {
      setSelectedTicketIndex([...selectedTicketIndex, index]);
    }
    console.log(ticketData[index]);
    setSelectedTicket(ticketData[index]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedTicket({
      ...selectedTicket,
      [name]: value,
    });
  };
  
  const handleClick = () => {
    // save the new data
  };
  return (
    <div>
      <ManagerConsole>
        <Banner name="Manage Preset Ticket" />
        <div className="flex justify-end gap-4">
          <ConfirmPopup
            title={"Delete"}
            task={" Delete this ticket"}
            handleClick={handleDelete}
            disabled={selectedTicketIndex <= 0}
          />
          <PresetTicketPopup
            ticket={selectedTicket}
            title={"Edit"}
            disabled={selectedTicketIndex <= 0}
            handleChange={handleChange}
            handleClick={handleClick}
          />
          {/* check again */}
          <PresetTicketPopup
            ticket={{name:"",price:"", entryCount:"", description:"" }}
            title={"Add New"}
            disabled={false}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </div>
        <div className="mt-4">
          <p className="div-head-blue">Preset tickets</p>
          <div className="flex items-center w-full flex-wrap gap-4 text-2xl mt-4">
            {ticketData.map((ticket, index) => (
              <div
                key={index}
                className={`flex w-1/3 justify-between border p-4 cursor-pointer rounded-md ${
                  selectedTicketIndex.includes(index)
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
            ))}
          </div>
        </div>
      </ManagerConsole>
    </div>
  );
};

export default ManagePresetTicket;
