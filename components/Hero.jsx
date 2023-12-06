import React from 'react'
import Btnout from './Btnout'

const Hero = () => {
    return (
        <div className='flex flex-col gap-3 items-center py-4 bg-bgshade'>
            <div className='w-36 h-36 rounded-full bg-bg'></div>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold mb-3'>I'm Monish Soni</h2>
                <p className='text-whtext text-md mb-0.5'>Frontend developer from Mumbai,India</p>
                <p className='text-sectext text-md' >Currently working on tradelog</p>
                <div className='flex justify-center gap-3 mt-5'>
                    <Btnout btntext="Hire Me" />
                    <Btnout btntext="Copy Email" />

                </div>
            </div>
        </div>
    )
}

export default Hero