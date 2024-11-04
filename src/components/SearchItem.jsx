import { Link } from "react-router-dom";

const SearchItem = ({ img }) => {
  return (
    <div className="flex justify-between gap-4 p-4 mb-5 border border-gray-300 rounded-md">
      <Link to={"/hotels/1"}>
        <img src={img} alt="" className="w-56 h-56 rounded" />
      </Link>
      <div className="flex flex-col justify-between flex-[2] gap-2">
        <h1 className="text-lg font-semibold">Tower Street Apartments</h1>
        <span className="text-sm">500m from center</span>
        <span className="px-2 py-1 text-xs text-white bg-green-500 rounded w-max">
          Free airport taxi
        </span>
        <span className="text-xs font-medium">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-sm font-medium text-green-600">
          Free cancellation
        </span>
        <span className="text-[10px] text-green-700">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-[1] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-mainBlue">Excellent</span>
          <button className="p-1 text-xs text-white rounded bg-mainBlue">
            8.9
          </button>
        </div>
        <div className="text-right">
          <span className="text-xl font-medium text-mainBlue">$112</span>
          <span className="block text-[10px] text-gray-400">
            Includes taxes and fees
          </span>
          <button className="px-3 py-2 text-xs font-bold text-white bg-blue-700 rounded">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
