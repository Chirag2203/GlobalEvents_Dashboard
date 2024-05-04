import { Button } from "@/components/ui/button";
import React from "react";
import { BiRightArrow, BiRightArrowAlt, BiRightArrowCircle } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdViewArray, MdViewModule } from "react-icons/md";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div class="w-full 2xl:max-w-[300px] lg:max-w-[260px] bg-white border rounded-lg shadow dark:bg-gray-800 ">
      <a href="#" className="bg-orange-600 ">
        <img
          // src={event.image}
          src="https://source.unsplash.com/400x400/?event"
          alt="event"
          class="w-full h-36 object-cover object-center rounded-t-lg"
        />
      </a>
      <div class=" text-left bg-slate-100 shadow-sm dark:bg-slate-900 p-4 pt-2">
        <a href="#">
          <h5 class="text-xl mt-1 font-medium  text-gray-900 dark:text-white">
            {event.name}
          </h5>
        </a>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <FaCalendar /> {event.date}
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <FaLocationPin />
            {event.location}
          </p>
        </div>

        <div class="flex items-center justify-between mt-6">
          <span class="text-xl font-bold text-gray-900 dark:text-white">
            ${event.price}
          </span>
          <Link
            // to={"/events/" + event.id}
            to={event.link}
          >
            <Button className="text-white  font-medium rounded-md text-sm text-center gradient-blue h-8 flex items-center gap-1">
              View <BiRightArrowAlt className="text-lg"/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
