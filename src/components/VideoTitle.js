import React from 'react'
import info_icon from '../images/info_icon.png'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='text-sm py-6 w-1/3'>{overview}</p>

        <div className=''>
            <button className='bg-white text-xl text-black p-2 px-12 rounded-lg hover:bg-opacity-80'>
                ▶️ Play
            </button>

            <button className='mx-2 bg-gray-500 text-xl text-white p-2 px-7 bg-opacity-50 rounded-lg'>
              <img className='w-6 pb-1 pr-1 inline' src={info_icon}></img>More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle