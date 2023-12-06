import React from 'react'

const Btnout = ({ btntext }) => {
    return (
        <div className='bg-purple px-3 py-1 rounded shadow-lg cursor-pointer hover:bg-bgshade transition-all duration-300 ease-in-out'>
            <p className='text-sm'>{btntext}</p>
        </div>
    )
}

export default Btnout