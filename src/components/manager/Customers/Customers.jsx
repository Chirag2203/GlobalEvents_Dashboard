import React from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "../../shared/Banner";
import CustomerStats from "./CustomerStats";

const Customers = () => {
  return (
    <div>
      <ManagerConsole>
        <Banner name="Manager Home" />
        <CustomerStats/>
        <div className="mt-4">
          <p className="div-head-blue">Customer details</p>
          <p>table</p>
        </div>
      </ManagerConsole>
    </div>
  );
};

export default Customers;
