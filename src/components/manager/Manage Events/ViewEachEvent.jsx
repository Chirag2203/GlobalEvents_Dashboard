import React from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "../../shared/Banner";
import MovingCarousel from "@/components/shared/MovingCarousel";

const eventStats = [
  {
    name: "Tickets Left",
    value: "100",
  },
  {
    name: "Total Revenue",
    value: "20000",
  },
  {
    name: "Profit Earned",
    value: "10000",
  },
];
const eventsData = [
  {
    name: "Event Name",
    value: "Event1",
  },
  {
    name: "Event Description",
    value: "Event Description",
  },
  {
    name: "Event Date",
    value: "12/12/2021",
  },
  {
    name: "Event Time",
    value: "12:00 PM",
  },
  {
    name: "Event Location",
    value: "Event Location",
  },
  {
    name: "Event Capacity",
    value: "100",
  },
  {
    name: "Event Price",
    value: "200",
  },
  {
    name: "Event Type",
    value: "Event Type",
  },
  
  {
    name: "Price structure",
    value: [
      {
        name: "Ticket1",
        value: "100",
      },
      {
        name: "Ticket2",
        value: "200",
      },
    ],
  },
  {
    name: "Active Discounts",
    value: [
      {
        name: "Discount1",
        value: "10%",
      },
      {
        name: "Discount2",
        value: "20%",
      },
    ],
  },
  {
    name: "Event Status",
    value: "Event Status",
  },
];
const ViewEachEvent = () => {
  return (
    <div>
      <ManagerConsole>
        <Banner name="View Each Event" />
        <div>
          <p className="div-head-blue">Event Details</p>
          <div>
            {/* stats card */}
            <div className="flex gap-4 flex-wrap mt-4">
              {eventStats.map((stat) => (
                <div className="flex  flex-col justify-between border-blue-400 border p-4 rounded-md w-1/4">
                  <p className="text-xl font-medium">{stat.name}</p>
                  <p>{stat.value}</p>
                </div>
              ))}
            </div>
            {/* top, details div  */}
            <div className="mt-12 flex items-start gap-12 ">
              <div className="w-1/2">
                <MovingCarousel />
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 w-full flex gap-4 flex-wrap p-4 rounded-md">
                {eventsData.map((data) => (
                  <div className="w-2/5">
                    <p className="text-lg font-medium">{data.name}</p>
                    {data.value && typeof data.value === "string" ? (
                      <p className="text-gray-400">{data.value}</p>
                    ) : (
                      <div>
                        {data.value.map((discount) => (
                          <div className="flex justify-between">
                            <p className="text-gray-200">{discount.name}</p>
                            <p className="text-gray-400">{discount.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* graphs and stats */}
            <div className="mt-16 flex gap-8 flex-wrap">
              <div className="w-2/5">
                <p className="div-head-blue">Revenue Graph</p>
                <div className="dark:bg-slate-900 p-4 rounded-md">
                  <p>Graph</p>
                </div>
              </div>
              <div className="w-2/5">
                <p className="div-head-blue">Attendees Stats</p>
                <div className="dark:bg-slate-900 p-4 rounded-md">
                  <p>Graph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ManagerConsole>
    </div>
  );
};

export default ViewEachEvent;
