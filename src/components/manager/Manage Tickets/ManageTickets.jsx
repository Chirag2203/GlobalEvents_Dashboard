import React from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "../../shared/Banner";
import ManageTicketsNavbar from "./ManageTicketNavbar";

const ManageTickets = () => {
  return (
    <div>
      <ManagerConsole>
        <Banner name="Manage Tickets" />
        <ManageTicketsNavbar />
      </ManagerConsole>
    </div>
  );
};

export default ManageTickets;
