import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { Link } from "react-scroll";
import downarrow from "../../public/icons/downarrow.svg";
import gsap from "gsap";

const Page1 = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrow = arrowRef.current;

    const handleIntersection = (entries: any) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        gsap.from(arrow, {
          y: 20,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      } else {
        // Stop animation or reset state if needed when not in viewport
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Customize this threshold based on your needs
    });

    if (arrow) {
      observer.observe(arrow);
    }

    return () => {
      if (arrow) {
        observer.unobserve(arrow);
      }
    };
  }, []);

  return (
    <div className="screen1 md:h-screen h-auto w-full pb-10 md:pb-0  relative">
      <Header />
      <div className="flex flex-col gap-12 justify-center items-center text-center md:pt-28 pt-24 text-white">
        <div className="md:text-4xl text-2xl tracking-wide">
          Welcome to my site!
        </div>
        <div className="md:text-8xl text-4xl tracking-wide">
          Hi, I am Aman Tiwari.
        </div>
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="hover:text-white"
        >
          {" "}
          <div className="text-xl tracking-wide border-2 border-white p-3 hover:bg-blue-400">
            More About me
          </div>
        </Link>
        <Link  to="about"
          smooth={true}
          duration={800}
          className="hover:text-white">
        <div ref={arrowRef} className="arrow h-42 w-24 ">
          <img src={downarrow} alt="" />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Page1;
