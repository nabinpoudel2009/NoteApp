import React, { useState } from 'react'

const Note = () => {

    const formHandle = (details) => {
        details.preventDefault();
    }

    return (
        <main className='h-screen bg-black p-5 text-white'>

            <form 
                className='flex flex-col gap-y-5'
                onSubmit={(details) => {
                    formHandle(details);
                }}
            >
                <input 
                    type="text" 
                    placeholder='Enter Title'
                    className='ring-1 ring-white/60 font-medium outline-none rounded-md p-2 w-1/2' 
                />
                <textarea
                    placeholder='Enter Details.'
                    className='ring-1 ring-white/60 h-32 font-medium rounded-md outline-none p-2 w-1/2'
                >
                </textarea>

                <button 
                    className='bg-gray-600 text-white p-2 font-medium rounded-lg outline-none w-1/2'
                >
                    Add Note
                </button>
            </form>

            <hr className='mt-3'/>
            <h3 className='text-center font-bold text-2xl mt-1'>Your Notes</h3>
            <section className='mt-5'>
                <div className='bg-white text-black p-2 rounded-xl h-50 w-50'>
                    <h3 className='text-xl text-center font-bold'>hello</h3>
                    <hr />
                    <p className='text-sm overflow-y-scroll'>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, officiis deleniti</p>
                </div>
            </section>
        </main>
    )
}

export default Note