import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants';

const GptMovieSuggestions = () => {

    const movies = useSelector(store => store.movies.searchedMovies);
    console.log(movies);

  return (
    <div>
      {(!movies || movies.length === 0) ? 
        (
          <div className='bg-black bg-opacity-80 mt-12 pt-5 flex align-center justify-center'>
            <p className='text-white text-xl pb-8'>Search Movie to get results</p>
          </div>
        ) : 
        (
          <div className='mt-10'>
            <h1 className='text-white pl-5 -mb-14 pb-4 text-3xl font-bold'>Similar Results</h1>

            <div className='mt-6 bg-black bg-opacity-75 flex overflow-x-scroll p-4'>
              {movies?.filter(movie => movie.poster_path).map((movie) => (
                <div className='cursor-pointer m-6' key={movie.id}>
                  <h1 className='text-white min-h-14 max-h-18 mb-4'>{movie.title}</h1>
                  <img className='min-w-40 max-w-40 text-white' alt='Poster not available' src={IMG_CDN_URL + movie.poster_path}></img>
                </div>
              ))}
            </div> 
          </div>
        )
      }
    </div>
  )
}

export default GptMovieSuggestions;
