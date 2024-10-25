const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-12">
      <div className="w-[1024px] text-xs ">
        <div className="flex justify-between w-full mb-12 text-gray-600">
          <ul className="space-y-1 cursor-pointer">
            <li className="hover:underline">Countries</li>
            <li className="hover:underline">Region</li>
            <li className="hover:underline">Cities</li>
            <li className="hover:underline">Districts</li>
            <li className="hover:underline">Airports</li>
            <li className="hover:underline">Hotels</li>
          </ul>
          <ul className="space-y-1 cursor-pointer">
            <li className="hover:underline">Genius loyalty programme</li>
            <li className="hover:underline">Seasonal and holiday deals</li>
            <li className="hover:underline">Travel articles</li>
            <li className="hover:underline">Traveller Review Awards</li>
            <li className="hover:underline">Car hire</li>
            <li className="hover:underline">Flight finder</li>
          </ul>
          <ul className="space-y-1 cursor-pointer">
            <li className="hover:underline">Privacy & cookies</li>
            <li className="hover:underline">Terms and conditions</li>
            <li className="hover:underline">Grievance officer</li>
            <li className="hover:underline">Modern Slavery Statement</li>
            <li className="hover:underline">Human Rights Statement</li>
          </ul>
          <ul className="space-y-1 cursor-pointer">
            <li className="hover:underline">Extranet login</li>
            <li className="hover:underline">Partner help</li>
            <li className="hover:underline">List your property</li>
            <li className="hover:underline">Become an affiliate</li>
          </ul>
          <ul className="space-y-1 cursor-pointer">
            <li className="hover:underline">About Booking.com</li>
            <li className="hover:underline">How we work</li>
            <li className="hover:underline">Sustainability</li>
            <li className="hover:underline">Press centre</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Investor relations</li>
          </ul>
        </div>
        <div className="pb-4 text-[10px] font-normal text-center text-gray-700">
          Booking.com is part of Booking Holdings Inc., the world leader in
          online travel and related services.
          <p>Copyright © 1996–2024 Booking.com™. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
