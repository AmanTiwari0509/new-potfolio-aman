
import developmet from "../../public/icons/development.svg"
import skip from "../../public/icons/skip.svg"
import chart from "../../public/icons/chart.svg"
import project from "../../public/icons/project.svg"

const Services = () => {
    return (
        <div className='w-full lg:h-screen h-auto bg-white md:pt-32 pt-16'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='text-4xl font-bold border-t-4 border-t-black border-b-blue-400 border-b-4 border-solid p-2 text-center '>Services</div>
                <div className='text-sm tracking-wide text-center text-gray-500'>Experienced frontend engineer specializing in crafting pixel-perfect, user-centric interfaces that elevate digital experiences.</div>
            </div>
            <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 flex flex-col gap-4 items-center justify-center md:py-36 py-16  md:pl-20 pl-0'>
                <div className='w-[280px]  h-[280px]  bg-gray-200 hover:bg-white  flex flex-row justify-center items-center rounded-md hover:border-4 hover:border-blue-400'>
                    <div className='flex flex-col gap-8 justify-center items-center '>
                        <img src={developmet} alt="" className='w-20 h-20' />
                        <div className='flex flex-col  justify-center items-center'>
                            <p className='font-bold text-black text-lg'>Web Development</p>
                            <p className='text-center px-4 pt-2'>Transforming ideas into digital reality with our expert web development services for a standout online presence.</p>
                        </div>

                    </div>

                </div>
                <div className='w-[280px] h-[280px] bg-gray-200 hover:bg-white  flex flex-row justify-center items-center rounded-md hover:border-4 hover:border-blue-400'>
                    <div className='flex flex-col gap-8 justify-center items-center'>
                        <img src={skip} alt="" className='w-20 h-20' />
                        <div className='flex flex-col  justify-center items-center'>
                            <p className='font-bold text-black text-lg'>Motion Development</p>
                            <p className='text-center px-4 pt-2'>Capturing attention through the art of motion, we redefine digital experiences with seamless animations and transitions.</p>
                        </div>

                    </div>

                </div><div className='w-[280px] h-[280px] bg-gray-200 hover:bg-white  flex flex-row justify-center items-center rounded-md hover:border-4 hover:border-blue-400'>
                    <div className='flex flex-col gap-8 justify-center items-center'>
                        <img src={project} alt="" className='w-20 h-20' />
                        <div className='flex flex-col  justify-center items-center'>
                            <p className='font-bold text-black text-lg'>Project Mangement</p>
                            <p className='text-center px-4 pt-2'>Efficiently steering projects from conception to completion, our project management ensures precision, collaboration, and success.</p>
                        </div>

                    </div>

                </div><div className='w-[280px] h-[280px] bg-gray-200 hover:bg-white  flex flex-row justify-center items-center rounded-md hover:border-4 hover:border-blue-400'>
                    <div className='flex flex-col gap-8 justify-center items-center'>
                        <img src={chart} alt="" className='w-20 h-20' />
                        <div className='flex flex-col  justify-center items-center'>
                            <p className='font-bold text-black text-lg'>Management Software</p>
                            <p className='text-center px-4 pt-2'>Strategic software management for streamlined development, ensuring efficiency, quality, and project success.</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services