
import linkdin from "../../public/icons/linkdin.svg"
import git from "../../public/icons/git.svg"
import instagram from "../../public/icons/instagram.svg"
import twitter from "../../public/icons/twitter.svg"

const Footer = () => {
    return (
        <div className='p-4 bg-gray-100'>
            <div className='md:grid md:grid-cols-2 flex flex-col gap-4  '>
                <div className='text-sm font-bold text-black flex justify-center items-center'>All Right Reserved @ Aman Tiwari </div>
                <div className='flex gap-12 justify-center items-center '>
                    <p><img src={linkdin} alt="" className='h-10 w-10'/></p>
                    <p><img src={git} alt="" className='h-8 w-8'/></p>
                    <p><img src={instagram} alt="" className='h-8 w-8'/></p>
                    <p><img src={twitter} alt="" className='h-10 w-10'/></p>
                </div>
            </div>
        </div>
    )
}

export default Footer