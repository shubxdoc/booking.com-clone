import React, { useState } from "react";
import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa";
import { FaCalendarDays, FaPerson } from "react-icons/fa6";
import { GrAttraction } from "react-icons/gr";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { OptionItem } from "./index";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [selectedButton, setSelectedButton] = useState("stays");
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openOptions, setOpenOptions] = useState(false);

  const navigate = useNavigate();

  const handleFocus = (button) => {
    setSelectedButton(button);
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <>
      <div className="relative flex justify-center text-white bg-mainBlue">
        <div className={`w-full max-w-5xl  ${type !== "list" && "mb-24"} mt-5`}>
          <div className="flex gap-2 mb-10">
            <div
              tabIndex={0}
              onClick={() => handleFocus("stays")}
              className={`flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 ${
                selectedButton === "stays" ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <FaBed />
              <span>Stays</span>
            </div>

            <div
              tabIndex={1}
              onClick={() => handleFocus("flights")}
              className={`flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 ${
                selectedButton === "flights" ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <FaPlane />
              <span>Flights</span>
            </div>

            <div
              tabIndex={2}
              onClick={() => handleFocus("car")}
              className={`flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 ${
                selectedButton === "car" ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <FaCar />
              <span>Car rentals</span>
            </div>

            <div
              tabIndex={3}
              onClick={() => handleFocus("attractions")}
              className={`flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 ${
                selectedButton === "attractions" ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <GrAttraction />
              <span>Attractions</span>
            </div>

            <div
              tabIndex={4}
              onClick={() => handleFocus("taxis")}
              className={`flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 ${
                selectedButton === "taxis" ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <FaTaxi />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="text-3xl font-bold">Find your next stay</h1>
              <p className="my-5 font-medium">
                Search low prices on hotels, homes and much more...
              </p>
              <button className="px-4 py-2 transition duration-300 bg-blue-700 hover:shadow-md hover:bg-blue-600 active:bg-blue-500 active:shadow-md">
                Sign in / Register
              </button>
              <div className="absolute flex items-center justify-around w-full max-w-5xl py-3 text-gray-400 bg-white border-4 border-orange-400 rounded h-14 -bottom-6">
                <div className="flex items-center gap-2">
                  <FaBed className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="text-black border-none outline-none"
                  />
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <FaCalendarDays className="text-gray-300" />
                  <span onClick={() => setOpenDate((prev) => !prev)}>{`${format(
                    date[0].startDate,
                    "dd/MM/yyyy"
                  )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      minDate={new Date()}
                      className="absolute z-20 rounded shadow-lg shadow-gray-700 top-14"
                    />
                  )}
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <FaPerson className="text-gray-300" />
                  <span
                    onClick={() => setOpenOptions((prev) => !prev)}
                  >{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                  {openOptions && (
                    <div className="absolute z-20 text-gray-500 bg-white border rounded shadow-md shadow-gray-600 top-14">
                      <OptionItem
                        person="adult"
                        count={options.adult}
                        handleOption={handleOption}
                      />
                      <OptionItem
                        person="children"
                        count={options.children}
                        handleOption={handleOption}
                      />
                      <OptionItem
                        person="room"
                        count={options.room}
                        handleOption={handleOption}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSearch}
                    className="px-4 py-2 text-white bg-blue-700 rounded-md"
                  >
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
