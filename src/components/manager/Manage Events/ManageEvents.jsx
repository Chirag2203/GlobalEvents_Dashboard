import React from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "../../shared/Banner";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import ManageEventsNavbar from "./ManageEventsNavbar";
import EventCard from "../../shared/Cards/EventCard";

const eventData=[
  {
    name:"Event 1",
    date:"12-12-2021",
    price:"1000",
    location:"Delhi",
    capacity:"200",
    link:"/manager/manage-events/view"
  },
  {
    name:"Event 2",
    date:"12-12-2021",
    price:"1000",
    location:"Delhi",
    capacity:"200",
    link:"/manager/manage-events/view"
  },
  {
    name:"Event 3",
    date:"12-12-2021",
    price:"1000",
    location:"Delhi",
    capacity:"200",
    link:"/manager/manage-events/view"
  },
  {
    name:"Event 4",
    date:"12-12-2021",
    price:"1000",
    location:"Delhi",
    capacity:"200",
    link:"/manager/manage-events/view"
  },
  {
    name:"Event 5",
    date:"12-12-2021",
    price:"1000",
    location:"Delhi",
    capacity:"200",
    link:"/manager/manage-events/view"
  },
  
]
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
              />
          ))}
          </div>
        </div>
      </ManagerConsole>
    </div>
  );
};

export default ManageEvents;
