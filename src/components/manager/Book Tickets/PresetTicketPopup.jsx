import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FaDownload, FaSave, FaSearch } from "react-icons/fa";
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
import { ExcelDownload, PdfDownload } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { BiSave } from "react-icons/bi";
import { MdDone } from "react-icons/md";

const PresetTicketPopup = ({ ticket, title, disabled, handleClick, handleChange }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-auto">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className=" flex items-center gap-2 text-md w-full"
            disabled={disabled}
          >
            {title}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle className="text-lpurple">
            
            {ticket ?`Preset Ticket id: ${ticket.id}`: "Add New Preset Ticket"}
            </DialogTitle>
            <DialogDescription>
              <p>Manage Preset Ticket</p>
            </DialogDescription>
            <div className="flex flex-col gap-2 pt-4 text-gray-300">
              <div >
                <label className="text-sm ">Ticket Name</label>
                <Input
                  type="string"
                  className="border border-input w-full p-2 rounded-lg"
                  name="name"
                  value={ticket.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Ticket Description
                </label>
                <Input
                  type="text"
                  className="border border-input w-full p-2 rounded-lg"
                  name="description"
                  value={ticket.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Ticket Price</label>
                <Input
                  type="text"
                  className="border border-input w-full p-2 rounded-lg"
                  name="price"
                  value={ticket.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Entry Count</label>
                <Input
                  type="text"
                  className="border border-input w-full p-2 rounded-lg"
                  name="entryCount"
                  value={ticket.entryCount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4 justify-end">
              <Button
                className="w-fit flex items-center gap-2 mt-4 hover:text-lpurple "
                variant={"outline"}
                onClick={handleClick}
              >
                Save <MdDone />
              </Button>
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

export default PresetTicketPopup;
