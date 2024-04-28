import React from "react";

const StatsCard = ({ item }) => {
  return (
    <div className={`border shadow-sm rounded-md md:w-1/3  flex  mt-2 p-4 justify-between items-start h-32 hover:shadow-md  `}>
      <p className="text-2xl font-medium w-3/4 text-primaryMain dark:text-gray-200">
        {item.text}
      </p>
      <div className="flex flex-col justify-center items-end ">
        <item.logo className="text-xl text-primaryMain dark:text-gray-200" />
        <p className="text-3xl  font-semibold mt-8  text-slate-700 dark:text-gray-400">{item.data}</p>
      </div>
    </div>
  );
};

export default StatsCard;
