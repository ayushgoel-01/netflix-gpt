import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>

        <form className='w-1/2 bg-black rounded-lg grid grid-cols-12'>
            <input className='p-3 m-3 rounded-lg col-span-9' type='text' placeholder={lang[langKey].gtpSearchPlaceholder}/>

            <button className='col-span-3 m-3 py-2 rounded-lg px-4 bg-red-700 text-white'>
                {lang[langKey].search}
            </button>
        </form>
 
    </div>
  )
}

export default GptSearchBar