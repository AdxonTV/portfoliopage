import React from "react";

const Loadbar = () => {
  return (
    <div className="flex gap-4  h-full justify-between items-center">
 
 <div className="">SCROLL UP</div>
      <div
        id="loadbar-con"
        className=" overflow-hidden w-[12vw] bg-[#565550] flex h-[0.3vh]  z-[1000]"
      >
        <div id="loadbar" className="bg-[#e57c40] h-full w-[12vw] "></div>
      </div>

     
    </div>
  );
};

export default Loadbar;
