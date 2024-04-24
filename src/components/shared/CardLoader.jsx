import React from "react";

const CardLoader = () => {
  return (
    <div className="mt-4 flex items-center w-1/3 animate-pulse">
      <div className="flex justify-center h-32 w-full  bg-gray-100 rounded-md dark:bg-gray-700">
        <div className="flex justify-between items-start w-full p-4">
          <div className="w-2/3 flex flex-col gap-2 justify-start">
            <div className="bg-gray-200 h-4 rounded-md"></div>
            <div className="bg-gray-200 h-2 rounded-md"></div>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="bg-gray-200 h-2 w-r p-4 rounded-full"></div>
            <div className="bg-gray-200 h-2 w-r p-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
