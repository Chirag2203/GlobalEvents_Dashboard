import React from 'react'
import { Button } from "../../ui/button";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { Input } from "../../ui/input";
import { BiSearch } from 'react-icons/bi';
const BookTicketsNavbar = () => {
  return (
    <div className="mt-2">
          <div className="flex justify-end gap-2">
            <div className="w-1/3 flex  items-center">
            <Input
              type="text"
              placeholder="Search"
              className="border border-input p-2 rounded-lg"
            />
            <BiSearch className="text-lg -ml-8"/>
            </div>
            <Link to="/manager/manage-events/edit">
              <Button className="flex items-center justify-center gap-2">
                {" "}
                Edit
                <FaEdit className="" />
              </Button>
            </Link>
            <Link to="/manager/book-tickets/quick-tickets">
              <Button className=" ">
                Quick Ticket <PlusIcon className="w-5 mt-1 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
  )
}

export default BookTicketsNavbar
