import React from 'react';

function Banner({name, greetings}) {
  return (
    <div className=" relative bg-gradient-to-r from-white to-lpurple/30  p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <div className="relative">
        <h1 className='text-2xl md:text-4xl text-lpurple dark:text-slate-100 font-bold mb-1'>{greetings&&"Welcome"} {name}</h1>
        {greetings&& <p className="text-lg">Here is what’s happening today:</p>}
      </div>
    </div>
  );
}

export default Banner;
