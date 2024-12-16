import Link from 'next/link'
import { authUserSession } from '@/libs/auth-libs'
import React from 'react'

const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className='flex justify-between gap-2'>
            {
                user ? <Link href="/users/dashboard" className='py-1'>Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-secondary text-color-primary rounded-xl py-1 px-10">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton