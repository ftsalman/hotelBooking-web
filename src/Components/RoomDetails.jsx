import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "./StarRating";

export const RoomDetails = () => {
  const { id } = useParams();

  const [roomsData, setRoomsData] = useState(null);
  const [mainImages, setMainImages] = useState(null);

  useEffect(() => {
    const rooms = roomsDummyData.find((room) => room._id === id);

    setRoomsData(rooms);
  }, []);

  return (
    roomsData && (
      <>
        <div className=" py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32">
          {/* Room Details */}

          <div className=" flex items-center  gap-2">
            <h2 className=" text-3xl md:text-4xl font-semibold">
              {roomsData?.hotel?.name}{" "}
              <span className=" font-normal text-sm">
                ({roomsData?.roomType})
              </span>
            </h2>
            <p className=" py-0.5 px-2 bg-orange-400 font-semibold rounded-4xl text-white">
              20% OFF
            </p>
          </div>
          {/* Room Rating */}
          <div className=" flex items-center gap-1 mt-2 ">
            <StarRating />
            <span className=" ml-2">200+ Reviews</span>
          </div>

          {/* Room Address */}

          <div className=" flex  items-center gap-1 text-gray-700 mt-2">
            <img src={assets.locationIcon} alt="" />
            <span>{roomsData?.hotel?.address}</span>
          </div>

          {/* Image Sections  */}

          <div className=" flex flex-col lg:flex-row mt-6 gap-6">
            <div className=" lg:w-1/2 w-full">
              <img
                src={mainImages}
                alt="Room Image"
                className=" w-full rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className=" grid  grid-cols-2 gap-2 lg:w-1/2 w-full">
              {roomsData?.images.length > 1 &&
                roomsData.images.map((image, index) => (
                  <img
                    onClick={() => setMainImages(image)}
                    key={index}
                    src={image}
                    alt="Room Image"
                    className={` w-full rounded-xl shadow-md object-cover cursor-pointer ${
                      mainImages === image && " outline-4 outline-orange-500"
                    }`}
                  />
                ))}
            </div>
          </div>

          {/* Rooms Highlights */}
          <div className=" flex  flex-col md:flex-row md:justify-between mt-10">
            <div className=" flex flex-col">
              <h1 className=" text-3xl md:text-4xl font-playfair">
                Experience Luxury Like Never Before
              </h1>
              <div className=" flex flex-wrap items-center mt-3 mb-6 gap-2">
                {roomsData.amenities.map((item, index) => (
                  <div
                    key={index}
                    className=" flex  items-center gap-2 px-2 py-2 rounded-lg bg-gray-100"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className=" w-5 h-5"
                    />
                    <p className=" text-xs">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Room Pricing */}
            <p className=" text-2xl font-medium">
              ${roomsData?.pricePerNight}/night
            </p>
          </div>

          {/* CheckIn CheckOut Form */}

          <form
            action=""
            className=" flex flex-col md:flex-row items-start md:items-center justify-between bg-white  shadow-[0px_0px_20px_rgba(0,0,0,0.15)]  p-4 rounded-xl mx-auto  max-w-6xl gap-4 mt-16"
          >
            <div className=" flex flex-col flex-wrap md:flex-row items-start  md:items-center  gap-4 md:gap-4  text-gray-500 ">
              <div className=" flex flex-col ">
                <label htmlFor="checkInDate" className=" font-medium">
                  Check-In
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  placeholder="Check-In"
                  className=" w-full  rounded  border border-gray-200 px-3 py-2  mt-1.5  outline-none"
                  required
                />
              </div>
              <div className=" w-px  h-14  bg-gray-200/70 max-md:hidden" />

              {/* Check-Out */}

              <div className=" flex flex-col ">
                <label htmlFor="checkOutDate" className=" font-medium">
                  Check-Out
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  placeholder="Check-Out"
                  className=" w-full  rounded  border border-gray-200 px-3 py-2  mt-1.5  outline-none"
                  required
                />
              </div>

              <div className=" w-px  h-14  bg-gray-200/70 max-md:hidden" />
              {/* Guest */}

              <div className=" flex flex-col ">
                <label htmlFor="guests" className=" font-medium">
                  Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  placeholder="0"
                  className="max-w-20 rounded border border-gray-200 px-3 py-2 mt-1.5 outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className=" bg-orange-500 active:scale-95    text-white px-6  md:py-4 text-base cursor-pointer rounded-md  max-md:w-full max-sm:mt-6 md:px-24 py-3 font-semibold hover:bg-orange-600 transition-all duration-300"
            >
              Check Availability
            </button>
          </form>

          {/* Common Specifications */}

          <div className=" mt-24 space-y-4">
            {roomCommonData.map((item, index) => (
              <div className=" flex items-start gap-2">
                <img
                  src={item.icon}
                  alt={`${item.title}-icon`}
                  className=" w-6.5"
                />

                <div>
                  <p className=" text-base">{item.title}</p>
                  <p className=" text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
};
