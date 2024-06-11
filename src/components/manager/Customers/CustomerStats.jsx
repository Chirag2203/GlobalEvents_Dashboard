import React from "react";

const CustomerStats = () => {
  const customerStats = [
    {
      title: "Total Customers",
      value: "100",
    },
    {
      title: "Customers this month",
      value: "20",
    },
  ];

  return (
    <div className="w-full flex flex-wrap gap-4">
      {customerStats.map((stat, index) => (
        <div className="w-1/3 dark:bg-slate-900 border bg-slate-100 hover:bg-slate-200 p-4 rounded-md ">
          <p className="text-xl font-medium">{stat.title}</p>
          <p className="text-2xl">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerStats;
