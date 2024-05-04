import React, { useState } from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "../../shared/Banner";
import BookTicketsNavbar from "./BookTicketsNavbar";

// this is the main page for ticket booking
const BookTickets = () => {
  const [multi, setMulti]= useState(false)
  return (
    <div>
      <ManagerConsole>
        <Banner name="Book Tickets" />
        <BookTicketsNavbar/>
      </ManagerConsole>
    </div>
  );
};

export default BookTickets;
