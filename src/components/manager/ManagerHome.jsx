import React from "react";
import { ManagerConsole } from ".";
import Banner from "../shared/Banner";
import StatsCard from "../shared/StatsCard";
import { managerCowsData, managerHomeData } from "../shared/data/homeData";

const ManagerHome = () => {
  return (
    <ManagerConsole>
      <Banner name="Manager" greetings={true} />
      <div className="flex flex-col gap-2">
        <p className="div-head-blue">Monthly Stats</p>
        <div className="flex flex-wrap w-full gap-4">
          {managerHomeData.map((data, index) => (
            <StatsCard key={index} item={data} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <p className="div-head-blue">Cow Stats</p>
        <div className="flex flex-wrap w-full gap-4">
          {managerCowsData.map((data, index) => (
            <StatsCard key={index} item={data} />
          ))}
        </div>
      </div>
    </ManagerConsole>
  );
};

export default ManagerHome;
