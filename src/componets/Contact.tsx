import Inputs from "./Inputs";
import Inputs2 from "./Inputs2";
import abovearrow from "../../public/icons/arrow.svg";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="lg:h-auto h-auto screen3 pt-10">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="text-4xl font-bold border-t-4 border-t-white border-b-blue-400 border-b-4 border-solid p-2 text-center text-white ">
          Contact
        </div>
      </div>
      <div className="pt-10">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" flex flex-col gap-4 lg:pt-20 pt-10 lg:px-36 px-4   ">
            <div className="border-b-2 border-blue-400 w-20 text-2xl text-white ">
              Details
            </div>
            <div className=" text-white text-left flex justify-end items-center  ">
              {" "}
              Innovative web app, modern design, seamless navigation, and robust
              functionality. Elevated user experience with responsive layouts
              and intuitive features.
            </div>
            <p className="text-white">2095 Kodihalli Bengaluru KA India</p>
            <p className="text-white">9755284130</p>
            <p className="text-white">at77245@gmail.com</p>
            <p className="text-white">www.aman-portfolio.com</p>
          </div>
          <div className="flex flex-col gap-8 py-10 ">
            <Inputs placeholder={"Your Name"} />
            <Inputs placeholder={"Your Email"} />
            <Inputs placeholder={"Your Phone"} />
            <Inputs2 placeholder={"Your Message"} />
            {/* <button className='md:ml-8 border border-white md:w-[170px] w-[150px] flex justify-center items-center '>
                        <p className='flex md:justify-start justify-center p-3 text-lg text-white'>Send Message</p>
                        </button> */}
            <div className="flex lg:justify-start justify-center items-center lg:pl-8 pl-0">
              <button className="border border-white text-white text-center p-4 hover:bg-blue-400">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-2">
        <Link
          to="page1"
          smooth={true}
          duration={800}
          className="hover:text-white"
        >
          <div className="bg-blue-400 h-10 w-10 rounded-full ">
            <img src={abovearrow} alt="" className="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
