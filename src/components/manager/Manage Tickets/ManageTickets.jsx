import React from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "../../shared/Banner";
import ManageTicketsNavbar from "./ManageTicketNavbar";
import { eventData } from "@/components/shared/data/dummy";
import EventCard from "@/components/shared/Cards/EventCard";
const ManageTickets = () => {
  return (
    <div>
      <ManagerConsole>
        <Banner name="Manage Tickets" />
        <ManageTicketsNavbar />
        <div className="mt-4">
          <p className="div-head-blue mb-4">ALL EVENTS</p>
          <div className="flex gap-4 flex-wrap">
          {eventData.map((event, index) => (
            <EventCard
              event={event}
              type={"ticket"}
              />
          ))}
          </div>
        </div>
      </ManagerConsole>
    </div>
  );
};

export default ManageTickets;
