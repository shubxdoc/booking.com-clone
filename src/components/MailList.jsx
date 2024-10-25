import React from "react";

const MailList = () => {
  return (
    <div className="flex flex-col items-center w-full gap-5 text-white mt-14 bg-mainBlue p-14">
      <h1 className="text-2xl font-bold">Save time, save money!</h1>
      <span className="text-lg font-medium">
        Sign up and we'll send the best deals to you
      </span>
      <div className="space-x-5 ">
        <input
          type="text"
          placeholder="Enter Email"
          className="p-5 text-black rounded outline-none w-80 h-7"
        />
        <button className="h-10 px-4 bg-blue-700 rounded hover:bg-blue-600">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
