import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className=" flex  flex-col px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className=" flex  flex-col md:flex-row justify-between items-center w-full">
        <Title
          alignment="left"
          title="Exclusive Offers"
          subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />

        <button className=" group flex gap-2 items-center font-medium  cursor-pointer max-md:mt-12">
          View All Offers
          <img
            className=" group-hover:translate-x-1 transition-all"
            src={assets.arrowIcon}
            alt=""
          />
        </button>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-3 gap-6 mt-10 ">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className=" group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-semibold rounded-full">
              {item.priceOff}% OFF
            </p>

            <div>
              <p className=" font-playfair text-2xl font-medium">{item.title}</p>
              <p>{item.description}</p>
              <p className=" text-sm text-white/70 mt-3">Expires{item.expiryDate}</p>
            </div>
            <button className=" flex items-center gap-2 cursor-pointer mt-4 mb-5">View Offers <img  className=" invert group-hover:translate-x-1 transition-all" src={assets.arrowIcon} alt="" /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
