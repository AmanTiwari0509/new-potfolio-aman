// import React from 'react'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const skills = [
//     {
//         name: "HTML5",
//         value: 90
//     },
//     {
//         name: "CSS3",
//         value: 90
//     },
//     {
//         name: "Javascript",
//         value: 75
//     },
//     {
//         name: "React JS",
//         value: 80
//     },
//     {
//         name: "Next JS",
//         value: 90
//     },
//     {
//         name: "Redux",
//         value: 85
//     },
//     {
//         name: "GSAP",
//         value: 90
//     },
//     {
//         name: "Tailwind CSS",
//         value: 90
//     },
//     {
//         name: "Framer-motion",
//         value: 80
//     },
// ]

// const Skills = () => {
//     return (
//         <div className='bg-gray-100 w-full flex flex-col gap-10 items-center md:py-24 py-16 '>

//             <div className='text-4xl font-bold border-t-4 border-t-black border-b-blue-400 border-b-4 border-solid p-2 '>Skills </div>

//             <div className='md:grid md:grid-cols-3 flex flex-col justify-center items-center gap-16 '>
//                 {skills.map((item: any, index: number) => (
//                     <div key={index} style={{ maxWidth: '150px' }} className='md:mx-16 mx-0' >
//                         <CircularProgressbar value={item.value} text={`${item.value}%`} />
//                         {/* <h1 className='flex justify-center items-center pt-4 font-semibold text-2xl text-center'>{item.name}</h1> */}
//                         <h1 className='flex justify-center items-center pt-4 font-semibold text-2xl text-center whitespace-nowrap'>
//                             {item.name}
//                         </h1>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Skills

import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<any>();

  const skills = [
    {
      name: "HTML5",
      value: 90,
    },
    {
      name: "CSS3",
      value: 90,
    },
    {
      name: "Javascript",
      value: 85,
    },
    {
      name: "React JS",
      value: 80,
    },
    {
      name: "Next JS",
      value: 90,
    },
    {
      name: "Redux",
      value: 85,
    },
    {
      name: "GSAP",
      value: 90,
    },
    {
      name: "Tailwind CSS",
      value: 90,
    },
    {
      name: "Framer-motion",
      value: 80,
    },
  ];

  const handleIntersection = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={skillsRef}
      className="bg-gray-100 w-full flex flex-col gap-10 items-center md:py-24 py-16"
    >
      <div className="text-4xl font-bold border-t-4 border-t-black border-b-blue-400 border-b-4 border-solid p-2">
        Skills{" "}
      </div>

      <div className="md:grid md:grid-cols-3 flex flex-col justify-center items-center gap-16">
        {skills.map((item, index) => (
          <div
            key={index}
            style={{ maxWidth: "150px" }}
            className="md:mx-16 mx-0"
          >
            <CircularProgressbar
              value={isVisible ? item.value : 0}
              text={`${isVisible ? item.value : 0}%`}
              styles={buildStyles({
                pathColor: isVisible
                  ? `rgba(66, 165, 245, ${item.value / 100})`
                  : "transparent",
              })}
            />
            <h1 className="flex justify-center items-center pt-4 font-semibold text-2xl text-center whitespace-nowrap">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
