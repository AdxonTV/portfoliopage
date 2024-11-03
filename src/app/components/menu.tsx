import Image from "next/image";

import TextAppear from "./textappear";
import Option from "./option";

const Menu = () => {


  return (
    <div className="font-[nohemi] flex justify-between mt-[2vh] ml-[1.5vh] borderbottomd">
      <div className="flex flex-col justify-between mb-[3vh]">
        <div className="text-[40px] leading-[38px] mb-[3vh]"> 
          DESIGNED TO <br /> SHOW WORK
        </div>
        <div className="flex gmail justify-between ">
          <div>SUPPORT@GMAIL.COM</div>
          <Image className="thearrow" src="/img/LINEUP.svg" alt="" />
        </div>
      </div>

      <div>(2/5)</div>
      <div className="  flex flex-col pr-[18vw] text-[32px]  leading-none justify-between mb-[3vh]">
       
     <Option name="Solutions" text="[ +10]"/>
     <Option name="Works" text=" [ +20] WORKS"/>
     <Option name="About" text="MY_ _ WORKS"/>
      </div>
<div className="absolute ml-[48vw] text-[12px] font-mono"> <TextAppear start={true} texy="“Well done is better than well said.” " /></div>
      {/* Image Section */}


      <Image src="/img/FACE.png" alt="" className="w-fit h-fit bg-white z-[1000000]  fixed right-0 mt-[2.5vw] mr-[7vw]"/>
      <div className="border-[#0000000e] border-2 h-[17vh]  w-[15vh] mr-[4vw] flex relative items-center justify-center mb-[3vh]">
  
        <div className="relative h-[15vh] w-[6vw]">
       
          <div className="absolute inset-0 w-full h-full bg-[#000000]  bg-opacity-20 backdrop-blur-[8px] hover:backdrop-blur-[0px] transition duration-200 z-10"></div>
 
          <Image className="h-full z-30" src="/img/me.png" alt="My Image" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
