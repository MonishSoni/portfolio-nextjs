import React from 'react';
import Link from "next/link"
import Btnout from './Btnout';

const Header = () => {
    return (
        <header className='flex w-full justify-between items-center py-4'>
            <div>Logo</div>
            <nav className='hidden md:flex justify-center items-center gap-4'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            
            <Btnout btntext="Hire Me"/>
        </header>
    )
}

export default Header