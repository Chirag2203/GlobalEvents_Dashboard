import { Button } from "@/components/ui/button";
import React, {  useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { TableComponent } from "@/components/shared";
import { BiCalendar } from "react-icons/bi";
import TicketCard from "./TicketCard";
import { IoLocationOutline } from "react-icons/io5";
import { TbClock } from "react-icons/tb";

const AddNewTicketPopup = ({ ticket }) => {
  const [count, setCount] = useState(1);

  return (
    <div className="w-1/4">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full">
            <Button> Add new ticket</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-lpurple text-xl">
              Fill up the details of new ticket
            </DialogTitle>
            <div>
              
            </div>
          </DialogHeader>
          {/* 
          <DialogFooter>
            <Button type="submit" className="bg-lpurple hover:bg-lpurple/90"> Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewTicketPopup;
