import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Dashboard/Header'
import prisma from '@/libs/prisma'
import { authUserSession } from '@/libs/auth-libs'

const Page = async () => {

    const user = await authUserSession()
    const favorites = await prisma.favorite.findMany({ where: { user_email: user.email } })

    return (
        <section className='mt-4 px-4 w-full'>
            <Header title={"My Favorite"} />
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {favorites.map((favorite, index) => {
                    return (
                        <Link key={index} href={`/anime/${favorite.anime_mal_id}`} className='relative'>
                            <Image src={favorite.anime_image} alt="" width={350} height={350} className='w-full' />
                            <div className='absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16'>
                                <h5 className='text-xl text-center'>{favorite.anime_title}</h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Page