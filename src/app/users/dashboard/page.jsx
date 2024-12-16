import React from 'react'
import { authUserSession } from '@/libs/auth-libs'
import Image from 'next/image'
import Link from 'next/link'

const page = async () => {
    const user = await authUserSession()
    return (
        <div className='text-color-primary flex flex-col justify-center items-center mt-5'>
            <h5 className='text-2xl font-bold mb-3'>Welcome, {user?.name}</h5>
            <Image src={user?.image} alt="profile image" width={250} height={250} />
            <div className='py-8 flex flex-wrap gap-4'>
                <Link href="/users/dashboard/favorite" className='bg-color-secondary text-color-primary font-bold px-4 py-3 rounded-lg'>My Favorite</Link>
                <Link href="/users/dashboard/comment" className='bg-color-secondary text-color-primary font-bold px-4 py-3 rounded-lg'>My Comment</Link>
            </div>
        </div>
    )
}

export default page