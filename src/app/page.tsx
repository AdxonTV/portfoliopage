"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import Menu from "./components/menu";
import Nav2 from "./components/nav2";
import AM from "./components/am";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Photos from "./components/photos";
import Footer from "./components/footer";
import Forfooter from "./components/forfooter";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  let i = 0; // Zmienna do śledzenia progresu


  useEffect(() => {
    gsap.from("#loadbar", { x: -400 });
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 0);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY;

      // Przewijanie w górę
      if (delta < 0) {
        i++;
       
        console.log(i);
      } 
      // Przewijanie w dół
      else {
        i = Math.max(i - 100, -10); // Zmniejsza i, ale nie poniżej -20
        gsap.to(".animation", { y: -50 });
   
      }

      // Logika dla zmiany loadbar
      if (i > 35) {
        console.log("YOU DID IT:", i);
        i = 55; // Resetuje lub zmienia jak potrzeba
        gsap.to(".animation", { y: -650 });
      }

      // Logika dla loadbar
    // Ustawienia progów dla `i`
if (i < 0) {
  gsap.to("#loadbar", { x: -350 });
}
if (i === 1) {
  gsap.to("#loadbar", { x: -250 });
}
if (i === 3) {
  gsap.to("#loadbar", { x: -200 });
}
if (i === 5) {
  gsap.to("#loadbar", { x: -180 });
}
if (i === 7) {
  gsap.to("#loadbar", { x: -150 });
}
if (i === 9) {
  gsap.to("#loadbar", { x: -130 });
}
if (i === 10) {
  gsap.to("#loadbar", { x: -115 });
}
if (i === 12) {
  gsap.to("#loadbar", { x: -100 });
}
if (i === 15) {
  gsap.to("#loadbar", { x: -80 });
}
if (i === 20) {
  gsap.to("#loadbar", { x: -60 });
}
if (i === 25) {
  gsap.to("#loadbar", { x: -40 });
}
if (i === 30) {
  gsap.to("#loadbar", { x: -20 });
}
if (i >= 35) { // Zmniejszamy końcowy próg, np. do 35
  gsap.to("#loadbar", { x: 0 });
  i = 35; // Ustal maksymalną wartość `i` na 35
}

      
      // Resetowanie flagi przewijania po przewinięciu
     
    };

    window.addEventListener("wheel", handleWheel);

    // Ustalanie interwału do zmniejszania i, jeśli nie przewijano
   

    // Cleanup event listener and interval on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);

    };
  }, []);

  return (
    <div ref={scrollRef}>
      <div className="flex opacity-[2%] z-[22222] fixed"> 
        <Image
        alt=""
          src="/img/Noisebg.gif "
          width={500}  // podaj odpowiednią szerokość
          height={500} 
          className="h-full pointer-events-none w-[10vw] fixed z-[100000]"
        />
       
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* ALL YOUR CONTENT HERE */}
          <div className="flex bg-[#ECE7E3]">
            <div className="flex flex-row">
              <Photos />
              <div className="fixed left-[25vw]">
                <Sidebar />
              </div>
            </div>

            <div className="w-[75vw] fixed right-0">
              <Navbar />
              <Nav2 />

              <div className="flex flex-col justify-between h-[100vh]">
                <div className="w-[70vw] ml-[3.8vw] flex flex-col justify-between">
                  <Menu />
                </div>
              </div>
            </div>

            <div className="fixed z-[1000] right-0">
              <Sidebar />
            </div>
          </div>
          <div className="fixed right-0 bottom-0 mb-[3vw]">
            <AM />
          </div>
          <div className="fixed animation w-full bottom-0 z-[102]">
            <Forfooter />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
