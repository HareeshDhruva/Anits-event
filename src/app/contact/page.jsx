import React from "react";
import Image from "next/image"
const page = () => {
  return (
    <div>
        <div className="absolute z-0">
          <Image src="bg.svg" alt="" className="opacity-[0.3]" width={1300} height={1000} />
        </div>
      <div className="flex justify-evenly items-center h-screen mx-[50px] z-10">
        <div className="w-1/2 h-[500px]">
          <p className="text-[50px] font-bold ml-4">
            Les’t talk <br /> on something{" "}
            <span className="text-[#ff0099]">great</span> <br /> together
          </p>
          <div>
            <div className="flex items-center">
              <img src="tabler_mail.svg" alt="" />
              <p>anitstnp@gmail.com</p>
            </div>
            <div className="flex items-center">
              <img src="ph_phone-fill.svg" alt="" />
              <p>9959751997</p>
            </div>
            <div className="flex items-center">
              <img src="carbon_location-filled.svg" alt="" />
              <p>Visakhapatnam, Andhra Pradesh 531162</p>
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex flex-col gap-4 mx-[20px] ring-2 ring-black px-5 py-6 rounded-2xl bg-white z-10">
          <p className="ml-4">Your name</p>
          <input
            type="text"
            placeholder="hareesh"
            className=" mx-[20px] text-gray-400 border-b-2 border-b-[#ff0099] focus:outline-none"
          />
          <p className="ml-4">Your mail</p>
          <input
            type="text"
            placeholder="hareeshdhruva123@gmail.com"
            className=" mx-[20px] text-gray-400 border-b-2 border-b-[#ff0099] focus:outline-none"
          />
          <p className="ml-4">Your message</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="ring-2 mx-[20px] rounded-2xl resize-none ring-[#ff0099]"
          ></textarea>
          <button className=" bg-[#ff0099] text-[#fff] rounded-full py-2 px-10 mx-[20px]">
            <h1>Send message</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
