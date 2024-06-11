import React from 'react'
import { Button } from "../../ui/button";
import { DeleteIcon, PlusIcon, TicketMinusIcon, TicketXIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { Input } from "../../ui/input";
import { BiSearch } from 'react-icons/bi';
import { RxArrowTopRight } from 'react-icons/rx';
const  EachEventNavbar = () => {
  return (
    <div className="mt-2">
          <div className="flex justify-end gap-2">
            
            <Link to="/manager/manage-events/edit">
              <Button className="flex items-center justify-center gap-2">
                {" "}
                Add Tickets
                <FaEdit className="" />
              </Button>
            </Link>
            <Link to="/manager/manage-events/view">
            <Button className="flex items-center justify-center gap-2">
             View Event Details <RxArrowTopRight />
          </Button>
            </Link>
          </div>
        </div>
  )
}

export default EachEventNavbar
