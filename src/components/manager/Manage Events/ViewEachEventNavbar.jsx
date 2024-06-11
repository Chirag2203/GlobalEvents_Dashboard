import React from "react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";
const ViewEachEventNavbar = () => {
  return (
    <div className="mt-2">
      <div className="flex justify-end gap-2">
        <Link to="/manager/manage-events/edit">
          <Button className="flex items-center justify-center gap-2">
            {" "}
            View Bookings
            <RxArrowTopRight />
          </Button>
        </Link>
        <Link to="/manager/manage-tickets/view">
          <Button className="flex items-center justify-center gap-2">
             Manage Tickets <RxArrowTopRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ViewEachEventNavbar;
