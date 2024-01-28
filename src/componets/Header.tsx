import React, { useState } from "react";
import menu from "../../public/images/menu.svg";
import { Link } from "react-scroll";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="pt-16 px-36 hidden md:block">
        <div className="flex justify-between items-center text-white">
          <div className="text-2xl text-extrabold pl-8">
            <p className=" border-blue-400 border-2 p-3">Profile</p>
          </div>
          <div className="flex gap-6 text-xl ">
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="hover:text-blue-400"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={800}
              className="hover:text-blue-400"
            >
              Skills
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={800}
              className="hover:text-blue-400"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              className="hover:text-blue-400"
            >
              Portfolio
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={800}
              className="hover:text-blue-400"
            >
              Resume
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="hover:text-blue-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden block bg-white p-4  w-full fixed">
        <div className="flex justify-between">
          <div className="text-2xl text-extrabold">
            <p className=" border-blue-400 border-2 p-2">Profile</p>
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 "
            onClick={handleToggle}
          >
            <img src={menu} alt="" className="h-10 w-10" />
          </button>
        </div>

        {expanded && (
          <div className="h-[220px] pt-4">
            <div className="flex flex-col gap-2 text-xl ">
              <Link
                to="about"
                smooth={true}
                duration={800}
                className="hover:text-blue-400"
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={800}
                className="hover:text-blue-400"
              >
                Skills
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={800}
                className="hover:text-blue-400"
              >
                Services
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                duration={800}
                className="hover:text-blue-400"
              >
                Portfolio
              </Link>
              <Link
                to="resume"
                smooth={true}
                duration={800}
                className="hover:text-blue-400"
              >
                Resume
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
