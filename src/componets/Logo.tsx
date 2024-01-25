import React from 'react'
import image1 from "../../public/images/image1.png"
import image2 from "../../public/images/image2.png"
import image3 from "../../public/images/image3.png"
import image4 from "../../public/images/image4.png"
import image5 from "../../public/images/image5.png"

const img = [
  {
    image: image1
  },
  {
    image: image2
  },
  {
    image: image3
  },
  {
    image: image4
  },
  {
    image: image5
  },

]

const Logo = () => {
  return (
    <div className='md:h-[300px] h-[200px] bg-zinc-200 pt-8 flex justify-center items-center '>
      {img?.map((item: any) => {
        return (
          <div className='w-[200px] h-[200px] flex justify-center items-center'>
            <img src={item.image} alt="" />
          </div>
        )
      })}

    </div>
  )
}

export default Logo