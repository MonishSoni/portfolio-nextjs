import React from 'react';
import Link from "next/link"

const Header = () => {
    return (
        <header className='flex w-full justify-between items-center  py-4'>
            <div>Logo</div>
            <nav className='flex justify-center items-center gap-4'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header