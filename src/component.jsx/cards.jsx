import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-white" id="Resources">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium ">
              <p className=" py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] text-black  rounded-md font-medium my-6  py-3  px-6 mx-auto w-[200px]">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 rounded-lg hover:scale-105 duration-300 md:my-0 my-8">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
              src={Double}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
            <p className="text-center text-4xl font-bold">$169</p>
            <div className="text-center font-medium ">
              <p className=" py-2 border-b mx-8 mt-8">850 GB Storage</p>
              <p className="py-2 border-b mx-8">2 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 4 GB</p>
            </div>
            <button className="bg-black text-[#00df9a] rounded-md font-medium my-6  py-3  px-6 mx-auto w-[200px]">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
            <p className="text-center text-4xl font-bold">$199</p>
            <div className="text-center font-medium ">
              <p className=" py-2 border-b mx-8 mt-8">1000 GB Storage</p>
              <p className="py-2 border-b mx-8">3 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 5 GB</p>
            </div>
            <button className="bg-[#00df9a] text-black  rounded-md font-medium my-6  py-3  px-6 mx-auto w-[200px]">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
