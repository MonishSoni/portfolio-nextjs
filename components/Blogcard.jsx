import React from 'react';
import Link from "next/link"
import Image from "next/image"
import {
    Images
} from "../public/images/index"
const Blogcard = ({ image, title, date, tag }) => {
    return (
        <Link href="/blog/1">
            <div className='bg-bg border-2 shadow border-bgshade p-4 w-[300px] md:w-[335px] rounded'>
                <div>
                    <Image src={image} width={360} height={240} alt='Blog Thumbnail' />
                </div>
                <div>
                    <span className='block mt-6 mb-4 text-xs bg-[#edeff6] rounded-sm font-bold w-max text-blue py-1 px-2.5' >{tag}</span>
                    <p className='text-lg font-semibold leading-6 md:leading-7 md:text-2xl text-white' >{title}</p>
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex justify-between items-center gap-2'>
                            <Image src={Images.profile} width={36} height={36} alt='Blog Thumbnail' />
                            <p className='text-xs text-white md:text-sm font-medium'>Monish Soni</p>
                        </div>
                        <p className='text-xs md:text-sm text-white'>{date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Blogcard