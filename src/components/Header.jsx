import React from 'react'

const Header = () => {
    return (
        <div className="bg-indigo-500">

        <div className='flex items-center h-16  container justify-between'>
            <h1 className='font-bold text-slate-100 font-sans'>By @Martin</h1>
            <div>
                <button className='bg-slate-100 rounded-full px-4 py-1 text-indigo-500 font-bold shadow-lg hover:bg-slate-200 hover:text-indigo-600'>Hire Me</button>
            </div>
        </div>
        </div>
    )
}

export default Header
