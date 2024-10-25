import React from "react";

const OptionItem = ({ person, handleOption, count }) => {
  return (
    <div className="flex justify-between m-2 w-52">
      <span className="optionText">{person}</span>
      <span className="optionText"></span>
      <div className="flex items-center gap-2 text-sm text-black">
        <button
          disabled={count <= 0}
          onClick={() => handleOption(person, "d")}
          className="font-bold border rounded w-7 h-7 bg-slate-200 hover:bg-slate-300 disabled:cursor-not-allowed"
        >
          -
        </button>
        <span className="optionCounterNo.">{count}</span>
        <button
          onClick={() => handleOption(person, "i")}
          className="font-bold border rounded w-7 h-7 bg-slate-200 hover:bg-slate-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default OptionItem;
