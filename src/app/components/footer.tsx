import React from "react";
import Image from "next/image";
import Loadbar from "./loadbar";
import Text from "./text";
const Footer = () => {
  return (
    <div className="w-full h-[75vh] items-center footer  bgblack bordertop textcolorw  absolute">
      <span className="w-full h-[3.5vh] items-center    textcolorw flex">

        <div className=" ">
          <div className="flex justify-between  w-[23vw] ml-3  mr-[4vw]">
            <span>MEET ME</span>
            <span>03</span>
          </div>
        </div>



        
        <div className="flex  w-[69vw] j left-0 justify-between ">
          <span>FOOTER</span>
          
        


            <div className="flex ">
              <Image alt="" src="/img/arrow.svg"    width={15}  // podaj odpowiednią szerokość
  height={15} style={{ transform: "rotate(-90deg)" }} className=" h-2 mt-2  mx-3 arrow-icon" />
              <span>F0OTER</span>
        

           

          </div>

          <div className="mr-[1.5vw] w-[19vw]  flex justify-end items-center">
  <div className="">
  <div className="">
  <Loadbar></Loadbar>
  

        
      </div>
  </div>
</div>
        </div>



          <Image className="mt-2 ml-[1.2vw]"   width={35}  // podaj odpowiednią szerokość
    height={35} src="/img/CIRCLE.svg" alt="" />
      </span>
      <div className="flex justify-center flex-col">
        <div className="flex justify-between pt-10 mx-7 w-[95vw]">
        <div>CHOJNICE</div>
        <div className="flex gap-40">
        <div>INDEPENDENT DESIGNER : </div>
        <div className="flex flex-col font-bold font-[ibm] text-[#fffff]">
          
        <Text  texy="HIRE"></Text>
        <div className="w-fit">
        <Text  texy="SEND ME MAIL"></Text></div>
        <Text  texy="CONTACT"></Text>
     
        </div>
        </div>
        <div>GOBOLAB@GMAIL.COM</div></div>
      <div className="text-[22vw]  top-[22220px] w-full text-center absolut leading-[90%]   py-[5vw]">(FOOTER)</div>
      <div className="absolut w-[20vw]"></div>
      </div></div>
  );
};

export default Footer;
