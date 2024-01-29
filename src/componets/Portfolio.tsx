
import scube from "../../public/images/scube.png"
import zaincare from "../../public/images/zaincare.png"
import duvet from "../../public/images/duvet.png"
import apply from "../../public/images/apply.png"
import building from "../../public/images/building.png"
import travel from "../../public/images/travel.png"
import minimal from "../../public/images/minimal.png"
import markagency from "../../public/images/markagency.png"
import inito from "../../public/images/inito.png"




const workHistory = [
    {
        image: scube,
        website: "Scube",
        link: "https://velvety-kelpie-266b33.netlify.app",
        description: "Transforming Vision into Digital Realities",
        techStack: "HTML/CSS, Javascript, React, Tailwind CSS, Greensock, Framer Motion and Typescript"
    },
    {
        image:zaincare,
        website: "Zaincare",
        link: "https://zaincare.com",
        description: "Revolutionize your healthcare  with ‘ZainCare’.",
        techStack: "HTML/CSS, Javascript, React, Tailwind CSS, Greensock, Framer Motion and Typescript",
    },
    {
        image:duvet,
        website: "Duvet",
        link: "https://furnitureorfurnishing.netlify.app",
        description: "Duvet Homes",
        techStack: "HTML/CSS, React, Tailwind CSS and Typescript, Greensock, Framer motion",
    },
    {
        image: apply,
        website: "Apply Uni Now",
        link: "https://www.applyuninow.com",
        description: "A platform that helps international students search, find and apply to the best-match programs from start to end.  ",
        techStack: "HTML/CSS, Javascript, React, Tailwind CSS, Framer Motion and Typescript",
    },
    {
        image: building,
        website: "Building Engines",
        link: "https://www.buildingengines.com",
        description: "software solution designed to help rental business owners with the building and management of commercial properties.",
        techStack: "HTML/CSS, Javascript, React, Tailwind CSS, React styled components Framer Motion and Typescript Reducx,Redux Saga",
    },
    {
        image: travel,
        website: "Travel Site",
        link: "https://apocryphon06-travel-site-gsap.netlify.app",
        description: "Experience the world, one adventure at a time.",
        techStack: "HTML/CSS, React, Tailwind CSS, Greensock and Typescript",
    },
    {
        image: minimal,
        website: "Minimal Portfolio Template",
        link: "https://apocryphon-portfolio.netlify.app",
        description: "Minimal portfolio template built using the react library.",
        techStack: "HTML/CSS, React, Tailwind CSS, Greensock and Typescript",
    },
    {
        image: markagency,
        website: "MarkAgency",
        link: "https://markagency.netlify.app",
        description: "Ignite Your Marketing Agency.",
        techStack: "HTML/CSS, React, Tailwind CSS, Greensock and Typescript",
    },
    {
        image: inito,
        website: "Inito",
        link: "https://inito.netlify.app",
        description: "Track your fertility hormones at home, in 5 minutes.",
        techStack: "HTML/CSS, Javascript, React, Tailwind CSS and Typescript",
    },
]

const Portfolio = () => {
    return (
        <div className=' h-full bg-gray-100 pt-20'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='text-4xl font-bold border-t-4 border-t-black border-b-blue-400 border-b-4 border-solid p-2 text-center '>Portfolio</div>
            </div>
            <div className='flex flex-row gap-8 justify-center items-center py-8'>
                <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 flex flex-col gap-8'>
                    {workHistory?.map((item: any) => {
                        return (
                            <div className='lg:w-[400px] w-full h-auto shadow-lg hover:bg-gray-200'>
                                <div className='w-full p-4 '><img src={item.image} alt="" /></div>
                                <div className='flex flex-col gap-4 p-4 w-full'>
                                    <p className='text-2xl font bold  text-blue-400'>{item.website}</p>
                                    <p className='text-gray-400'>{item.description}</p>
                                    <p className='font-bold text-gray-600 '>Tech Stack: <span className='font-normal'>HTML/CSS, Javascript, React, Tailwind CSS, Greensock, Framer Motion and Typescript</span></p>
                                    <a href={item.link} target="_blank" className='hover:text-blue-400'>Live Preview</a>
                                </div>  

                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default Portfolio