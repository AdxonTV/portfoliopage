import React, {  useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { gsap } from "gsap";
import { infophotos } from "../utils"; // Assume this is your initial array of photos
import Image from "next/image";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Photos = () => {
  const [photos, setPhotos] = useState(infophotos);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMorePhotos = () => {
    if (loading) return;

    setLoading(true);

    console.log(setHasMore)
    setTimeout(() => {
      
      const newPhotos = infophotos; 
  
      setPhotos((prev) => [...prev, ...newPhotos]);

     
      setLoading(false);
    }, 1000); 
  };



  return (
    <div className="w-[25vw] h-full">
      <div className="w-[25vw] bg-[#CCC6B4] z-50 h-[5vh] flex items-center textcolor fixed ">
        <div className="flex justify-between mx-4 w-full items-center z-50 ">
          <span>ADAM MARKOWSKI</span>
          <span>(2008)</span>
        </div>
      </div>
      <div className="w-[25vw] bg-[#CCC6B4] z-50 mt-[4.5vh] bordertop borderbottom h-[5vh] flex items-center textcolor fixed ">
        <div className="flex justify-between mx-4 w-full items-center z-50 ">
          <span>NAME</span>
          <span>(YEAR)</span>
        </div>
      </div>
      <InfiniteScroll
    dataLength={photos.length}
    next={loadMorePhotos}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    endMessage={<p style={{ textAlign: "center" }}>You have seen it all!</p>}
>
    <div className="pb-6">
    {photos.map((list, index) => (
    <div key={`${list.id}-${index}`}> {/* Unique key here */}
        <Image className="box w-[23vw] ml-[1vw]" alt="" src={list.image} />
        <div className="flex justify-between mx-4 w-[23vw] items-center mb-[2vw]">
            {list.textLists.map((text, textIndex) => (
                <p className="font-mono opacity-35 font-extralight" key={`${list.id}-${textIndex}`}>{text}</p> // Ensure uniqueness
            ))}
        </div>
    </div>
))}

    </div>
</InfiniteScroll>

    </div>
  );
};

export default Photos;
