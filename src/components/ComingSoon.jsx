import React from 'react'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[60vh]'>
            <h2 className='text-5xl text-indigo-500 mb-6'>Coming Soon</h2>
            <p>This challenge will be updated soon</p>
            <Link to="/" className='bg-indigo-400 text-slate-100 px-6 py-2 rounded-full mt-2'>Explore Others</Link>
        </div>
    )
}

export default ComingSoon
