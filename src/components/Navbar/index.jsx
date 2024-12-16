import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'
import UserActionButton from './UserActionButton'

const Navbar = () => {
    return (
        <header className='bg-color-accent'>
            <div className='flex justify-between items-center p-4'>
                <Link href="/" className='text-cyan-50 font-bold text-2xl'>FILMKU</Link>
                <InputSearch />
                <UserActionButton />
            </div>
        </header>
    )
}

export default Navbar