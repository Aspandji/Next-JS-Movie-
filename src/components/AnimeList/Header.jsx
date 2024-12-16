import Link from 'next/link'
import React from 'react'

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <>
            <div className='flex justify-between items-center px-4 pt-4'>
                <h1 className='md:text-2xl text-xl font-semibold text-color-primary'>{title}</h1>
                {linkHref && linkTitle ?
                    <Link href={linkHref} className='md:text-xl text-sm text-color-primary underline hover:text-color-accent transition-all'>{linkTitle}</Link>
                    : null
                }
            </div>
            <div className='border border-color-primary mx-4 mb-4'></div>
        </>
    )
}

export default Header