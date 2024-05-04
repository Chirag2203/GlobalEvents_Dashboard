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

const ConfirmPopup = ({  title, task, disabled, handleClick }) => {
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
              Please confirm
            </DialogTitle>
            <div className="flex flex-col gap-2 pt-4 text-gray-300">
              Are you sure you want to {task}
              </div>
            <div className="flex gap-2 mt-4 justify-end">
              <Button
                className="w-fit flex items-center gap-2 mt-4 hover:text-lpurple "
                variant={"outline"}
                onClick={handleClick}
              >
                Confirm <MdDone />
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmPopup;
