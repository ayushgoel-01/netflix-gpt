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
              <p className='text-white text-lg sm:text-xl pb-8'>Search Movie to get results</p>
            </div>
          ) : 
          (
            <div className='mt-10'>
              <h1 className='text-white pl-3 md:pl-5 -mb-14 pb-4 text-2xl md:text-3xl font-bold'>Similar Results</h1>

              <div className='mt-6 bg-black bg-opacity-75 flex flex-wrap md:flex-nowrap overflow-x-auto p-4'>
                {movies?.filter(movie => movie.poster_path).map((movie) => (
                  <div className='cursor-pointer m-4 w-32 md:w-40 flex-shrink-0' key={movie.id}>
                    <h1 className='text-white text-sm md:text-base min-h-[40px] max-h-[60px] mb-2'>{movie.title}</h1>
                    <img 
                      className='w-full h-auto object-cover' 
                      alt='Poster not available' 
                      src={IMG_CDN_URL + movie.poster_path} 
                    />
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
