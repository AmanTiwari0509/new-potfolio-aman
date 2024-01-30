import  { useEffect, useRef } from 'react'
import gsap from "gsap"
import profile from "../../public/images/profile.png"

const About = () => {

  return (
    <div id='about' className='w-full lg:h-screen md:h-auto h-auto bg-white lg:pt-28 pt-16 lg:pb-0  pb-16'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='text-4xl font-bold border-t-4 border-t-black border-b-blue-400 border-b-4 border-solid p-2 text-center '>ABOUT ME</div>
        <div className='text-sm tracking-wide text-center text-gray-500'>Experienced frontend engineer specializing in crafting pixel-perfect, user-centric interfaces that elevate digital experiences.</div>
      </div>
      <div className='lg:grid lg:grid-cols-2 flex flex-col     '>
        <div className='flex lg:justify-end justify-center items-center lg:pr-24 lg:pt-24 pt-10'>
          <img src={profile} alt="" className='w-[300px] h-[300px] border-4 border-gray-200 rounded-full shadow-5xl  ' />
        </div>
        <div className='flex flex-col gap-8 md:pr-4 md:pt-20 px-8 pt-8 '>
          <div className='text-2xl text-blue-400 font-extrabold tracking-wide'>Aman Tiwari</div>
          <div className='text-xl text-bold '>Frontend Developer | Speacialist Motion UI Developer </div>
          <div className='text-gray-500 tracking-wide pr-4 text-left'>As a seasoned Senior Frontend and Motion Developer, I bring forth over four years of expertise in crafting captivating web interfaces. Proficient in React.js, Next.js, JavaScript, HTML5, and CSS3, I excel in translating complex design concepts into dynamic user experiences. With a focus on seamless motion design and proficiency in GSAP, Framer Motion, Redux, and backend technologies, I consistently engineer sophisticated digital solutions that surpass client expectations.</div>
          <div className=' flex justify-start items-center  '>
            <p  className=' px-10 py-4 flex justify-center items-center  border border-blue-400 hover:bg-blue-400 hover:text-white'>
            <a href="/images/aman-tiwari-portfolio.pdf" download="/images/aman-tiwari-portfolio.pdf">
              <button>Download Resume</button>
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About