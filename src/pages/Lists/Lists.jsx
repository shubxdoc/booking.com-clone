import { useLocation } from "react-router-dom";
import { Header, SearchItem } from "../../components";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const Lists = () => {
  const location = useLocation();

  console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Header type="list" />
      <div className="flex justify-center my-5">
        <div className="flex w-full max-w-5xl gap-5">
          <div className="flex-[1.5] space-y-2 sticky top-0 p-4 rounded-md bg-yellow-500 h-max">
            <h1 className="mb-2 text-2xl font-bold text-gray-600">Search</h1>
            <div className="space-y-1">
              <label className="block text-sm font-medium">Destination</label>
              <input
                type="text"
                defaultValue={destination}
                className="w-full px-4 py-2 text-gray-600 rounded outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium">Check-in Date</label>
              <span
                onClick={() => setOpenDate((prev) => !prev)}
                className="block px-4 py-2 text-gray-600 bg-white rounded outline-none cursor-pointer"
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="pb-4 space-y-2 ">
              <label className="block text-sm font-medium">Options</label>
              <div className="flex justify-between mb-2 text-sm text-gray-800">
                <span className="lsOptionText">
                  Min Price <small className="text-yellow-700">per night</small>
                </span>
                <input type="number" className="w-12 text-center rounded" />
              </div>
              <div className="flex justify-between mb-2 text-sm text-gray-800">
                <span className="lsOptionText">
                  Max Price <small className="text-yellow-700">per night</small>
                </span>
                <input type="number" className="w-12 text-center rounded" />
              </div>
              <div className="flex justify-between mb-2 text-sm text-gray-800">
                <span className="lsOptionText">Adults</span>
                <input
                  type="number"
                  className="w-12 text-center rounded"
                  placeholder={options.adult}
                  min={1}
                />
              </div>
              <div className="flex justify-between mb-2 text-sm text-gray-800">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  className="w-12 text-center rounded"
                  placeholder={options.children}
                  min={0}
                />
              </div>
              <div className="flex justify-between mb-2 text-sm text-gray-800">
                <span className="lsOptionText">Rooms</span>
                <input
                  type="number"
                  className="w-12 text-center rounded"
                  placeholder={options.room}
                  min={1}
                />
              </div>
            </div>
            <button className="w-full p-2 font-medium text-white transition duration-300 rounded hover:bg-blue-700 bg-mainBlue hover:shadow-md">
              Search
            </button>
          </div>
          <div className="flex-[3]">
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/90466482.webp?k=e7b4c85d36cdd318f67670cdaa9ae86f7a085235a5a6de125f3b082f26c60621&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/460773375.webp?k=a61c124433c8c5005fd1af2f8bb87c38355555a1511c42b33283b383f2521f5e&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/497961998.webp?k=57345e3acc23a341d4f8561883904f9059763cb13533f6c37ba8d47db397907e&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/90466482.webp?k=e7b4c85d36cdd318f67670cdaa9ae86f7a085235a5a6de125f3b082f26c60621&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/460773375.webp?k=a61c124433c8c5005fd1af2f8bb87c38355555a1511c42b33283b383f2521f5e&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/497961998.webp?k=57345e3acc23a341d4f8561883904f9059763cb13533f6c37ba8d47db397907e&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/90466482.webp?k=e7b4c85d36cdd318f67670cdaa9ae86f7a085235a5a6de125f3b082f26c60621&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/460773375.webp?k=a61c124433c8c5005fd1af2f8bb87c38355555a1511c42b33283b383f2521f5e&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/497961998.webp?k=57345e3acc23a341d4f8561883904f9059763cb13533f6c37ba8d47db397907e&o="
              }
            />
            <SearchItem
              img={
                "https://cf2.bstatic.com/xdata/images/hotel/square240/90466482.webp?k=e7b4c85d36cdd318f67670cdaa9ae86f7a085235a5a6de125f3b082f26c60621&o="
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
