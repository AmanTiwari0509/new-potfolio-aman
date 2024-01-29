import  { useEffect, useRef } from "react";
import Header from "./Header";
import { Link } from "react-scroll";
import downarrow from "../../public/icons/downarrow.svg";
import gsap from "gsap";

const Page1 = () => {
 


  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 1 ,
        y:0,
        }, // Initial state
        {
          y:20,
          opacity: 1, // Fade in
          duration: 0.5, // Animation duration
          ease: 'power1.inOut', // Ease in-out
          yoyo: true, // Yoyo effect (fade out after fading in)
          repeat: -1, // Infinite loop
        }
      );
    }
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
        <div ref={buttonRef} className="arrow h-42 w-24 ">
          <img src={downarrow} alt="" />
        </div>
        </Link>
        {/* <div ref={buttonRef} className="arrow h-42 w-24 ">
            <img src={downarrow} alt="" />
          </div> */}
      </div>
    </div>
  );
};

export default Page1;
