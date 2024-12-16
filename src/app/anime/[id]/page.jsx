import CommentBox from '@/components/AnimeList/CommentBox'
import CommentInput from '@/components/AnimeList/CommentInput'
import FavoriteButton from '@/components/AnimeList/FavoriteButton'
import VideoPlayer from '@/components/Utilities/VideoPlayer'
import { getAnimeResponse } from '@/libs/api-libs'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import Image from 'next/image'
import React from 'react'

const Page = async ({ params: { id } }) => {

    const detailAnime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const favorite = await prisma.favorite.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })

    return (
        <>
            <div className='pt-4 px-4'>
                <h3 className='text-2xl text-color-primary mb-3'>{detailAnime.data.title} - {detailAnime.data.year}</h3>
                {!favorite && user && <FavoriteButton anime_mal_id={id} user_email={user?.email} anime_image={detailAnime.data.images.webp.image_url} anime_title={detailAnime.data.title} />}
            </div>
            <div className='pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto'>
                <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
                    <h3>PERINGKAT</h3>
                    <p>{detailAnime.data.rank}</p>
                </div>
                <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
                    <h3>SKOR</h3>
                    <p>{detailAnime.data.score}</p>
                </div>
                <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
                    <h3>ANGGOTA</h3>
                    <p>{detailAnime.data.members}</p>
                </div>
                <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
                    <h3>EPISODE</h3>
                    <p>{detailAnime.data.episodes}</p>
                </div>
            </div>
            <div className='pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary'>
                <Image
                    src={detailAnime.data.images.webp.image_url}
                    alt={detailAnime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className='w-full rounded object-cover'
                />
                <p className='text-justify text-xl'>{detailAnime.data.synopsis}</p>
            </div>
            <div className="p-4">
                <h3 className='text-color-primary text-xl mb-2'>Komentar</h3>
                <CommentBox anime_mal_id={id} />

                {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={detailAnime.data.title} />}

            </div>
            <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
        </>
    )
}

export default Page