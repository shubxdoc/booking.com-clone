import React from "react";

const Featured = () => {
  return (
    <div className="z-10 flex justify-between w-full max-w-5xl gap-5 ">
      <div className="relative w-full h-64 overflow-hidden text-white rounded-lg">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 w-full h-full hover:bg-gradient-to-t from-transparent to to-black/30"></div>
        <div className="absolute top-5 left-5">
          <h1 className="text-2xl font-bold">New Delhi</h1>
          <h2 className="text-base font-semibold">123 properties</h2>
        </div>
      </div>
      <div className="relative w-full h-64 overflow-hidden text-white rounded-lg">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 w-full h-full hover:bg-gradient-to-t from-transparent to to-black/30"></div>
        <div className="absolute top-5 left-5">
          <h1 className="text-2xl font-bold">Bangalore</h1>
          <h2 className="text-base font-semibold">532 properties</h2>
        </div>
      </div>
      <div className="relative w-full h-64 overflow-hidden text-white rounded-lg">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o="
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 w-full h-full hover:bg-gradient-to-t from-transparent to to-black/30"></div>
        <div className="absolute top-5 left-5">
          <h1 className="text-2xl font-bold">Hyderabad</h1>
          <h2 className="text-base font-semibold">533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
