import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../Components/StarRating";

// const checkBox = ({ label, selected = false, onChange = () => {} }) => {
//   return {};
// };

export const AllRooms = () => {
  const navigate = useNavigate();

  const [isFilterShow, setIsFilterShow] = useState(false);

  const roomTypes = [
    "Single Bed",
    "Single Bed",
    "Single Bed",
    "Single Bed",
    "Single Bed",
  ];

  const priceType = ["0 to 50", "0 to 50", "0 to 50", "0 to 50", "0 to 50"];

  const sortOptions = [
    "Price Low To High",
    "Price Low To High",
    "Price Low To High",
  ];

  return (
    <>
      <div className=" flex  flex-col-reverse  md:flex-row  items-start  justify-between pt-28 md:pt-35  px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="">
          <div className=" flex flex-col items-start justify-center ">
            <h2 className=" text-md md:text-2xl font-semibold">Hotel Rooms</h2>
            <p className=" text-sm md:text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              corporis, tenetur cum animi enim aliquid doloribus deserunt iste
              non unde fugit totam voluptatem libero hic similique dignissimos
              repellendus, impedit odio?
            </p>
          </div>

          <div>
            {roomsDummyData.map((rooms) => (
              <>
                <div
                  key={rooms?._id}
                  className=" flex flex-col-reverse md:flex-row items-start py-8 gap-6  border-b border-gray-300 last:pb-32 last:border-0"
                >
                  <img
                    onClick={() => {
                      navigate(`/rooms/${rooms?._id}`);
                      scrollTo(0, 0);
                    }}
                    src={rooms.images[0]}
                    alt="hotel-img"
                    title="View  Room Details "
                    className=" max-h-65 rounded-xl shadow-lg object-cover    cursor-pointer"
                  />
                  <div className=" md:w-1/2 flex flex-col gap-2">
                    <p className="text-gray-500">{rooms?.hotel?.city}</p>
                    <p
                      onClick={() => {
                        navigate(`/rooms/${rooms?._id}`);
                        scrollTo(0, 0);
                      }}
                      className=" text-gray-800 text-2xl cursor-pointer"
                    >
                      {rooms?.hotel?.name}
                    </p>
                    <div className=" flex items-center">
                      <StarRating />
                      <p className=" ml-2 text-gray-500">200+ Reviews </p>
                    </div>

                    <div className=" flex items-center gap-1 text-gray-500 mt-2 text-sm">
                      <img src={assets?.locationIcon} alt="icon-Locations" />
                      <span className="  text-gray-500">
                        {rooms?.hotel?.address}
                      </span>
                    </div>

                    {/* Rooms Amenities  */}

                    <div className=" flex flex-wrap items-center mt-3 mb-6 gap-4">
                      {rooms.amenities.map((items, index) => (
                        <>
                          <div
                            key={index}
                            className=" flex items-center gap-2 py-1.5 px-2 rounded-md bg-[#F5F5FF]/70"
                          >
                            <img
                              src={facilityIcons[items]}
                              alt=""
                              className=" w-5 h-5"
                            />
                            <p className=" text-xs font-semibold">{items}</p>
                          </div>
                        </>
                      ))}
                    </div>

                    {/* Room Price  */}

                    <p className=" text-lg font-semibold text-gray-700">
                      ${rooms?.pricePerNight}/night
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Filter Side */}
        <div className=" bg-white w-[25rem] border border-gray-200  rounded-xl text-gray-600 max-lg:mb-8 min-lg:mt-16">
          <div
            className={`flex  items-center justify-between px-5 min-lg:border-b py-2.5 border-gray-200 ${
              isFilterShow && "border-b"
            }`}
          >
            <h4 className=" text-base font-medium text-gray-800">Filters</h4>
            <div className=" text-xs cursor-pointer">
              <span
                onClick={() => setIsFilterShow(!isFilterShow)}
                className="lg:hidden cursor-pointer"
              >
                {isFilterShow ? "Hidden" : "Show"}
              </span>
              <span className=" hidden md:block">Clear</span>
            </div>
          </div>

          <div
            className={`${
              isFilterShow ? "h-auto" : " h-0  lg:h-auto"
            } overflow-hidden  transition-all duration-700`}
          >
            <div className=" px-5 pt-5">
              <p className=" font-medium text-gray-800 pb-2">POPULAR FILTERS</p>
              {roomTypes.map((type, index) => (
                <>
                  <CheckBox key={index}  label={type} />
                </>
              ))}
            </div>

            <div className=" px-5 pt-5">
              <p className=" font-medium text-gray-800 pb-2">Price Range</p>
              {priceType.map((price, index) => (
                <>
                  <CheckBox key={index}  label={`$ ${price}`} />
                </>
              ))}
            </div>

             <div className=" px-5 pt-5 pb-7">
              <p className=" font-medium text-gray-800 pb-2">Sort By</p>
              {sortOptions.map((radio, index) => (
                <>
                 
                 <RadioButton key={index} label={radio}/>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const CheckBox = ({ label, select = false, onChange = () => {} }) => {
  return (
    <label
      className=" flex gap-3  items-center cursor-pointer mt-2 text-sm"
      htmlFor=""
    >
      <input
        type="checkbox"
        checked={select}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className=" font-light select-none">{label}</span>
    </label>
  );
};

export const RadioButton = ({ label, select = false, onChange = () => {} }) => {
  return (
    <label
      className=" flex gap-3  items-center cursor-pointer mt-2 text-sm"
      htmlFor=""
    >
      <input
        type="radio"
        name="sortoption"
        checked={select}
        onChange={() => onChange(label)}
      />
      <span className=" font-light select-none">{label}</span>
    </label>
  );
};
