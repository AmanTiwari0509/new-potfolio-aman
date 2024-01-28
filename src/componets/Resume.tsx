import React, { useState } from 'react'
import work from "../../public/icons/work.svg"
import study from "../../public/icons/study.svg"

const experence = [
  {
    companyName: "Annalect",
    experence: "16 Nov 2024 - Present",
    role: "Front End & Motion Developer",
    description: "Responsible for spearheading projects as a front-end and motion developer, I seamlessly blend technical proficiency with creative innovation. My role involves initiating and driving the development of visually captivating user interfaces, utilizing HTML, CSS, and JavaScript to deliver engaging digital experiences."
  },
  {
    companyName: "Scube Technologies",
    experence: "Nov 2022 - Sept 2023",
    role: "Front End Developer",
    description: "I was responsible to integrate innovative motion design elements into applications, collaborating with design team to implement motion design elements, Creating reacts components, Fixing the UI related issues, attend the agile meetings and collaborate with team members of all projects for our clients."
  },
  {
    companyName: "Ksolves",
    experence: "May 2021 - Jan 2022",
    role: "Sr. Front End Developer",
    description: "I was responsible for developing and maintaining user interface, focusing on enhancing user experiences through motion design, implementing responsive and mobile friendly design and collaborating with design and backend team of all projects for clients",
  },
  {
    companyName: "Adsphere Technolgy",
    experence: "Dec 2018 - May 2021",
    role: "Sr. Front End Developer",
    description: "I was responsible for converting Figma design to functional UI, building reusable components for the application integrating the Api’s for enhanced functionality of all projects for our company"
  },

]

const education = [
  {
    name: "Radharaman institute of technolgy and science",
    course: "Bachelor of Technology And Science (B.TECH)",
    batch: "2013-2017"
  },
  {
    name: "St Joseph High School",
    course: "12th",
    batch: "2012-2013"
  },
]
const Resume = () => {


  const circles = Array.from({ length: 6 }, (_, index) => index + 1);

  const [isLeftPosition, setLeftPosition] = useState(true);

  const togglePosition = () => {
    setLeftPosition((prevPosition) => !prevPosition);
  };





  return (
    <>
      <div className='py-10 h-full md:block hidden'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <div className='text-4xl font-bold border-t-4 border-t-black border-b-blue-400 border-b-4 border-solid p-2 text-center '>Resume</div>
        </div>
        <div className='flex justify-center items-center pt-20'>
          {/* Circle content */}
          <div className="rounded-full border-2 w-[150px] h-[150px]  bg-blue-400 flex p-4 relative ">
            <img src={work} alt="" className=' absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 flex items-center justify-center' />
          </div>

          {/* Text to the right of the circle */}
          <div className="absolute left-[55%] transform translate-x-2 font-extrabold text-3xl">
            WORK EXPERIENCE
          </div>
        </div>
        {experence?.map((item: any, index) => (
          <div className='flex justify-center items-center pt-20' key={index}>
            {/* Circle content */}
            <div className="rounded-full border-2 w-[150px] h-[150px] bg-blue-400 flex p-3 relative">
              <div className='flex justify-center items-center'>
                <p className='text-center text-xl text-white'>{item.experence}</p>
              </div>
            </div>

            {/* Text to the right or left of the circle based on state */}
            <div className={`absolute ${index % 2 ? 'left-[55%]' : 'right-[57%]'} pl-4`}>
              <div className={`flex flex-col ${index % 2 ? "justify-start items-start" : "justify-end items-end"}  `}>
                <h1 className='text-xl font-bold'>{item.companyName}</h1>
                <p className='text-lg text-blue-400'>{item.role}</p>
                <p className={`${index % 2 ? "text-left pr-20" : "text-right pl-20"}tracking-wide text-gray-400 `}>{item.description}</p>
              </div>
            </div>


          </div>
        ))}

        <div>
          <div className='flex justify-center items-center pt-20'>
            {/* Circle content */}
            <div className="rounded-full border-2 w-[150px] h-[150px] bg-blue-400 flex p-3 relative">
              <img src={study} alt="" className=' absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 flex items-center justify-center' />
            </div>

            {/* Text to the right of the circle */}
            <div className="absolute left-[55%] transform translate-x-2 font-extrabold text-3xl">
              EDUCATION
            </div>
          </div>
          {education?.map((item: any, index) => (
            <div className='flex justify-center items-center pt-20' key={index}>
              {/* Circle content */}
              <div className="rounded-full border-2 w-[150px] h-[150px] bg-blue-400 flex p-3 relative">
                <div className='flex justify-center items-center'>
                  <p className='text-center text-2xl text-white '>{item.batch}</p>
                </div>
              </div>

              {/* Text to the right or left of the circle based on state */}
              <div className={`absolute ${index % 2 ? 'left-[55%]' : 'right-[57%]'} transform translate-x-2`}>
                <div className={`flex flex-col ${index % 2 ? "justify-start items-start" : "justify-end items-end"}  `}>
                  <h1 className='text-xl font-bold'>{item.name}</h1>
                  <p className='text-lg text-blue-400'>{item.course}</p>
                </div>
              </div>


            </div>
          ))}
        </div>




      </div>

      <div className='block md:hidden p-4 py-5'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <div className='text-4xl font-bold border-t-4 border-t-black border-b-blue-400 border-b-4 border-solid p-2 text-center '>Resume</div>
        </div>
        <div className='flex justify-center items-center gap-2 pt-20'>
          {/* Circle content */}
          <div className="rounded-full border-2 w-[100px] h-[100px]  bg-blue-400  p-4 relative  ">
            <img src={work} alt="" className=' absolute top-0 left-0 right-0 bottom-0 m-auto w-16 h-16 ' />
          </div>

          {/* Text to the right of the circle */}
          <div className="">
            <p className='font-extrabold text-3xl '>WORK EXPERENCE</p>
          </div>
        </div>
        {experence?.map((item: any, index) => (
          <div className='flex  gap-2 pt-20'>
            {/* Circle content */}
            <div className="rounded-full border-2 w-[100px] h-[100px]  bg-blue-400  p-5 relative  ">
              <div className=''>
                <p className='text-center text-[12px] text-white'>{item.experence}</p>
              </div>
            </div>

            {/* Text to the right of the circle */}
            <div className={`w-[70%]`}>
              <h1 className='text-xl font-bold'>{item.companyName}</h1>
              <p className='text-lg text-blue-400'>{item.role}</p>
              <p className={` "text-left pr-20" tracking-wide text-gray-400 `}>{item.description}</p>
            </div>
          </div>
        ))}


        <div className='flex items-center gap-2 pt-20'>
          {/* Circle content */}
          <div className="rounded-full border-2 w-[100px] h-[100px]  bg-blue-400  p-4 relative  ">
            <img src={study} alt="" className=' absolute top-0 left-0 right-0 bottom-0 m-auto w-16 h-16 ' />
          </div>

          {/* Text to the right of the circle */}
          <div className="">
            <p className='font-extrabold text-3xl '>EDUCATION </p>
          </div>
        </div>
        {education?.map((item: any, index) => (
          <div className='flex   gap-2 pt-20'>
            {/* Circle content */}
            <div className="rounded-full border-2 w-[100px] h-[100px] flex justify-center items-center  bg-blue-400  p-5 relative  ">
              <div className=''>
                <p className='text-center text-[12px] text-white'>{item.batch}</p>
              </div>
            </div>

            {/* Text to the right of the circle */}
            <div className={`w-[70%]  `}>
              <h1 className='text-xl font-bold'>{item.name}</h1>
              <p className='text-lg text-blue-400'>{item.course}</p>

            </div>
          </div>
        ))}
      </div>
    </>




  )
}

export default Resume






