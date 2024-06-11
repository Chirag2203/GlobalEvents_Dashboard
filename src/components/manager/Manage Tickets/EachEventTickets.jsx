import React from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "@/components/shared/Banner";
import EachEventNavbar from "./EachEventNavbar";
import { ticketData } from "@/components/shared/data/dummy";
import EachTicketViewPopup from "./EachTicketViewPopup";
const EachEventTickets = () => {
  return (
    <div>
      <ManagerConsole>
        <Banner name="Event Name" />
        <EachEventNavbar/>
        <div className="my-4">
            <p className="div-head-blue">Active Tickets</p>
           <div className="flex gap-4 flex-wrap">
           {ticketData.map((ticket, index) => (
                <EachTicketViewPopup
                ticket={ticket}
                key={index}
                />
            ))}
           </div>

        </div>
      </ManagerConsole>
    </div>
  );
};

export default EachEventTickets;
