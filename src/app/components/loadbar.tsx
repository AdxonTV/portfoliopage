import React from "react";

const Loadbar = () => {
  return (
    <div className="flex gap-4  h-full justify-between items-center">
 
 <div className="">SCROLL UP</div>
      <div
        id="loadbar-con"
        className=" overflow-hidden w-[12vw] bg-[#565550] flex h-[0.3vh]  z-[1000]"
      >
        <div id="loadbar" className="bg-[#B0ADA2] h-full w-[12vw] "></div>
      </div>

     
    </div>
  );
};

export default Loadbar;
