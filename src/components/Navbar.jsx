import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center h-14 bg-mainBlue">
      <div className="flex items-center justify-between w-full max-w-5xl text-white ">
        <Link to="/" className="pl-4 text-2xl font-semibold">
          Booking.com
        </Link>
        <div className="space-x-5">
          <button className="px-2 py-1 font-medium bg-white rounded text-mainBlue">
            Register
          </button>
          <button className="px-2 py-1 font-medium bg-white rounded text-mainBlue">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
