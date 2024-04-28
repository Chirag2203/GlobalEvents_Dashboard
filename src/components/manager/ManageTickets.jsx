import React from "react";
import ManagerConsole from "./ManagerConsole";
import Banner from "../shared/Banner";

const ManageTickets = () => {
  return (
    <div>
      <ManagerConsole>
        <Banner name="Manager Home" />
      </ManagerConsole>
    </div>
  );
};

export default ManageTickets;
