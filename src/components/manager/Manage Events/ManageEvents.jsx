import React from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "../../shared/Banner";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import ManageEventsNavbar from "./ManageEventsNavbar";
import EventCard from "../../shared/Cards/EventCard";
import { eventData } from "@/components/shared/data/dummy";
const ManageEvents = () => {
  return (
    <div>
      <ManagerConsole>
        <Banner name="Manage Events" />
        <ManageEventsNavbar />
        <div className="mt-4">
          <p className="div-head-blue">ALL EVENTS</p>
          <div className="flex gap-4 flex-wrap">
          {eventData.map((event, index) => (
            <EventCard
              event={event}
              type={"event"}
              />
          ))}
          </div>
        </div>
      </ManagerConsole>
    </div>
  );
};

export default ManageEvents;
