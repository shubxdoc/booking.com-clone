import {
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaCircleXmark,
  FaLocationDot,
} from "react-icons/fa6";
import { Header, MailList } from "../../components";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen((prev) => !prev);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <div>
        <Header type="list" />
        <div className="flex flex-col items-center mt-5">
          {open && (
            <div className="sticky top-0 left-0 z-50 grid w-full h-screen bg-black bg-opacity-50 place-items-center">
              <FaCircleXmark
                onClick={() => setOpen(false)}
                className="absolute text-3xl text-white cursor-pointer top-5 right-5"
              />
              <FaCircleArrowLeft
                onClick={() => handleMove("l")}
                className="absolute text-4xl text-white cursor-pointer left-28"
              />
              <div className="grid w-full h-full place-items-center">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="w-4/5 h-[90vh]"
                />
              </div>
              <FaCircleArrowRight
                onClick={() => handleMove("r")}
                className="absolute text-4xl text-white cursor-pointer right-28"
              />
            </div>
          )}
          <div className="relative flex flex-col w-full max-w-5xl gap-2">
            <button className="absolute right-0 px-5 py-2 font-medium text-white bg-blue-600 rounded top-10">
              Reserve or Book Now!
            </button>
            <h1 className="text-2xl font-semibold">Tower Street Apartments</h1>
            <div className="flex items-center gap-2 text-xs">
              <FaLocationDot />
              <span>Elton St 125 New york</span>
            </div>
            <span className="font-medium text-blue-600">
              Excellent location – 500m from center
            </span>
            <span className="font-medium text-green-600">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="flex flex-wrap justify-between">
              {photos.map((photo, i) => (
                <div className="w-1/3" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="object-cover w-full"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-5 mt-5">
              <div className="flex-[3]">
                <h1 className="text-2xl italic font-semibold">
                  Stay in the heart of City
                </h1>
                <p className="mt-5 text-sm text-gray-500">
                  Located a 5-minute walk from St. Florian's Gate in Krakow,
                  Tower Street Apartments has accommodations with air
                  conditioning and free WiFi. The units come with hardwood
                  floors and feature a fully equipped kitchenette with a
                  microwave, a flat-screen TV, and a private bathroom with
                  shower and a hairdryer. A fridge is also offered, as well as
                  an electric tea pot and a coffee machine. Popular points of
                  interest near the apartment include Cloth Hall, Main Market
                  Square and Town Hall Tower. The nearest airport is John Paul
                  II International Kraków–Balice, 16.1 km from Tower Street
                  Apartments, and the property offers a paid airport shuttle
                  service.
                </p>
              </div>
              <div className="flex-[1] p-5 flex flex-col gap-5 bg-blue-200 rounded">
                <h1 className="font-semibold text-gray-600 ">
                  Perfect for a 9-night stay!
                </h1>
                <span className="text-sm ">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2 className="text-lg">
                  <b>$945</b> (9 nights)
                </h2>
                <button className="p-2 font-medium text-white rounded bg-mainBlue">
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
          <MailList />
        </div>
      </div>
    </>
  );
};

export default Hotel;
