import React, { useState } from 'react'

const Note = () => {
    
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [task, setTask] = useState([])

    const formHandle = (e) => {
        e.preventDefault();

        const copyTask = [...task]
        copyTask.push({title, details})
        setTask(copyTask);

        setTitle("");
        setDetails("");
    }


    return (
        <main className='h-screen max-w-7xl mx-auto bg-black p-5 text-white'>

            <h3 className='font-bold text-3xl mb-3 font-mono'>Add Notes</h3>

            <form 
                className='flex flex-col gap-y-5'
                onSubmit={(details) => {
                    formHandle(details);
                }}
            >
                <input 
                    type="text"
                    required
                    placeholder='Enter Title'
                    className='ring-1 ring-white/60 font-medium outline-none rounded-md p-2 w-1/2'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <textarea
                    placeholder='Enter Details.'
                    required
                    className='ring-1 ring-white/60 h-32 font-medium rounded-md outline-none p-2 w-1/2'
                    value={details}
                    onChange={(e) => {
                        setDetails(e.target.value)
                    }}
                >
                </textarea>

                <button 
                    className='bg-gray-600 hover:bg-slate-500 text-white p-2 font-medium rounded-lg outline-none w-1/2'
                >
                    Add Note
                </button>
            </form>

            <hr className='mt-3'/>
            <h3 className='text-center font-bold text-3xl mt-1 font-mono'>Your Notes</h3>

            <section className='mt-5 flex items-center gap-5 flex-wrap'>
                {task.map(function (elem, key) {
                    return (
                        <div
                            className='bg-gray-100 text-black min-h-60 h-auto w-50 break-all overflow-hidden p-2 rounded-xl'
                            key={key}
                        >
                                <h3 className='text-center font-bold text-2xl'>{elem.title}</h3>
                                <hr />
                                <p className='text-sm'>{elem.details}</p>
                        </div>
                    )
                })}
            </section>

        </main>
    )
}

export default Note