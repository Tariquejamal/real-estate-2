import React from 'react'

export default function Search() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className="p-7  border-b-2 md:border-r-2 md:min-h-screen">
            <form className='flex flex-col gap-8' action="">
                <div className="flex items-center gap-2">
                    <label className='whitespace-nowrap font-semibold' >Search Term:</label>
                    <input type="text" id='serachTerm' placeholder='serach...'
                    className='border rounded-lg p-3 w-full'
                     />
                </div>
                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold' >Type:</label>
                    <div className="flex gap-2">
                        <input className='w-5' type="checkbox" name="" id="all" />
                        <span>Rent & Sale</span>
                    </div>
                    <div className="flex gap-2">
                        <input className='w-5' type="checkbox" name="" id="rent" />
                        <span>Rent</span>
                    </div>
                    <div className="flex gap-2">
                        <input className='w-5' type="checkbox" name="" id="sale" />
                        <span>Sale</span>
                    </div>
                    <div className="flex gap-2">
                        <input className='w-5' type="checkbox" name="" id="offer" />
                        <span>Offer</span>
                    </div>
                    
                </div>
                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold' >Amenities:</label>
                    <div className="flex gap-2">
                        <input className='w-5' type="checkbox" name="" id="parking" />
                        <span>Parking</span>
                    </div>
                    <div className="flex gap-2">
                        <input className='w-5' type="checkbox" name="" id="furnished" />
                        <span>Furnished</span>
                    </div>
                    
                    
                </div>


                <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <select
              defaultValue={'created_at_desc'}
              id='sort_order'
              className='border rounded-lg p-3'
            >
              <option value='regularPrice_desc'>Price high to low</option>
              <option value='regularPrice_asc'>Price low to hight</option>
              <option value='createdAt_desc'>Latest</option>
              <option value='createdAt_asc'>Oldest</option>
            </select>
          </div>

          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Search
          </button>


            </form>
        </div>
        <div className='flex-1'>
        <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>
          Listing results:
        </h1>
        </div>
    </div>
  )
}
