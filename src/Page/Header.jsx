import React from "react";
import Icons from "../Component/Icons";

const Header = () => {
  return (
    <div className="shadow-lg w-screen bg-[white]">
      <div className=" w-[90%] m-auto py-3">
        <div className="flex">
          <div className="flex">
            <div className="flex items-center px-2">
              <Icons />
            </div>
            <div className=" bg-[#0AA89A] text-white font-bold px-2">
              IOT SEPARATOR
            </div>
          </div>
          <div className="w-[158vh]">
            <div className="text-center text-sm flex items-center justify-center">
              <p className="px-3 rounded-sm"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
