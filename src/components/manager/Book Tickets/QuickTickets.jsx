import React, { useState } from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "@/components/shared/Banner";
import { Button } from "@/components/ui/button";
import { IoSettings } from "react-icons/io5";
import TicketQRCode from "./TicketQrCode";
import QuickTicketCard from "./QuickTicketCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

//booking one time tickets whose data is stored in a separate table
const QuickTickets = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);
  // temporary state to show the ticket modal, later this should be shown after the payment is done
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [booking, setBooking] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    count: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOneTimeTicket = () => {
      const temp = {...formData,description:"one time ticket"};
      // add a desc to it
      setBooking([temp]);
      setShowTicketModal(true);
  }



  // Sample data for preset tickets
  const ticketData = [
    {
      name: "Ticket 1",
      price: "100",
      description: "Description 1",
      entryCount: "2",
    },
    {
      name: "Ticket 2",
      price: "150",
      description: "Description 2",
      entryCount: "1",
    },
    {
      name: "Ticket 3",
      price: "200",
      description: "Description 3",
      entryCount: "3",
    },
  ];

  const handleTicketSelect = (ticketIndex) => {
    // Check if the ticket is already selected
    const isSelected = selectedTickets.includes(ticketIndex);
    if (isSelected) {
      // Deselect the ticket
      const updatedSelection = selectedTickets.filter(
        (index) => index !== ticketIndex
      );
      setSelectedTickets(updatedSelection);
    } else {
      // Select the ticket
      setSelectedTickets([...selectedTickets, ticketIndex]);
    }
    console.log(ticketIndex,selectedTickets)
  };

  const handleReset = () => {
    setSelectedTickets([]);
    setShowTicketModal(false);
  };

  const handleBookTickets = () => {
    // Logic to book the selected tickets
    selectedTickets.forEach((ticketIndex) => {
      const selected = ticketData[ticketIndex];
      console.log(`Ticket ${selected.name} booked!`);
    });
    // take the indexs from the the selected tickets and add the whole ticket to booking
    const currBooking = selectedTickets.map((index) => ticketData[index]);
    setBooking(currBooking);
    setShowTicketModal(true);
  };

  return (
    <div>
      <ManagerConsole>
        <Banner name="Quick Tickets" />
        {/* to manage preset tickets */}
        <div className="flex justify-end">
          <Link to={"/manager/book-tickets/manage-preset-tickets"}>
          <Button className="flex items-center gap-1">
            <IoSettings className="text-lg" />
            Manage
          </Button>
          </Link>
        </div>
        {/* preset tickets */}
        <div className="mt-4">
          <p className="div-head-blue">PRESET TICKETS</p>
          <div className="flex items-center w-full flex-wrap gap-4 text-2xl mt-4">
            {ticketData.map((ticket, index) => (
              <QuickTicketCard ticket={ticket} key={index}index={index} handleTicketSelect={handleTicketSelect} selectedTickets={selectedTickets}/>
            ))}
          </div>
            <div className="mt-4">
              <Button onClick={handleBookTickets} disabled={selectedTickets.length<=0}>Book Ticket</Button>
              <Button className="ml-4" onClick={handleReset} disabled={selectedTickets.length<=0}>
                Reset
              </Button>
            </div>
          {showTicketModal && <TicketQRCode selectedTickets={booking} />}
        </div>
        {/* to create a one time ticket */}
        <div className="mt-8">
          <p className="div-head-blue">NEW TICKET</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="w-1/3">
              <Label className="block mb-2">Ticket Name</Label>
              <Input
                type="string"
                placeholder="Enter Ticket Name"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="w-1/3">
              <Label className="block mb-2">Count</Label>
              <Input
                type="string"
                placeholder="Count"
                value={formData.count}
                onChange={handleChange}
                name="count"
              />
            </div>
            <div className="w-1/3">
              <Label className="block mb-2">Price</Label>
              <Input
                type="string"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                name="price"
              />
            </div>
          </div>
          <div className="mt-4">
            <Button onClick={handleOneTimeTicket} disabled={selectedTickets.length<=0 || formData.name=="" || formData.count=="" || formData.price==""}>Book Ticket</Button>
            </div>
        </div>
      </ManagerConsole>
    </div>
  );
};

export default QuickTickets;
