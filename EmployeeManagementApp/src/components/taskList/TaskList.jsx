import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className=' h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            <div className=' shrink-0 h-full w-75 bg-cyan-400 p-5 rounded-xl'>
                <div className=' text-white flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className=' text-sm'>20 feb 2024</h4>
                </div>
                <h2 className=' mt-5 text-white text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className=' text-white text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis accusantium repellat!</p>
            </div>
            <div className=' shrink-0 h-full w-75 bg-indigo-400 p-5 rounded-xl'>
                <div className=' text-white flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className=' text-sm'>20 feb 2024</h4>
                </div>
                <h2 className=' mt-5 text-white text-2xl font-semibold'>Make a React Project</h2>
                <p className=' text-white text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis accusantium repellat!</p>
            </div>
            <div className=' shrink-0 h-full w-75 bg-purple-400 p-5 rounded-xl'>
                <div className=' text-white flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className=' text-sm'>20 feb 2024</h4>
                </div>
                <h2 className=' mt-5 text-white text-2xl font-semibold'>Learn a New skill</h2>
                <p className=' text-white text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis accusantium repellat!</p>
            </div>
            <div className=' shrink-0 h-full w-75 bg-pink-400 p-5 rounded-xl'>
                <div className=' text-white flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className=' text-sm'>20 feb 2024</h4>
                </div>
                <h2 className=' mt-5 text-white text-2xl font-semibold'>Find a Customer</h2>
                <p className=' text-white text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis accusantium repellat!</p>
            </div>
            <div className=' shrink-0 h-full w-75 bg-fuchsia-500 p-5 rounded-xl'>
                <div className=' text-white flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className=' text-sm'>20 feb 2024</h4>
                </div>
                <h2 className=' mt-5 text-white text-2xl font-semibold'>Add Customer Support</h2>
                <p className=' text-white text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis accusantium repellat!</p>
            </div>
            <div className=' shrink-0 h-full w-75 bg-blue-400 p-5 rounded-xl'>
                <div className=' text-white flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className=' text-sm'>20 feb 2024</h4>
                </div>
                <h2 className=' mt-5 text-white text-2xl font-semibold'>Add Training Session</h2>
                <p className=' text-white text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis accusantium repellat!</p>
            </div>
        </div>
    )
}

export default TaskList
