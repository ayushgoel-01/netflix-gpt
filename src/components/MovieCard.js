import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = (posterPath) => {

  return (
    <div className='w-48 pr-4 cursor-pointer'>
        <img alt="img" src={IMG_CDN_URL+posterPath.posterPath}/>
    </div>
  )
}

export default MovieCard;