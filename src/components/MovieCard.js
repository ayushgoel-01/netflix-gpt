import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-32 md:w-48 pr-2 md:pr-4 cursor-pointer'>
      <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} className="w-full h-auto object-cover" />
    </div>
  )
}

export default MovieCard;
