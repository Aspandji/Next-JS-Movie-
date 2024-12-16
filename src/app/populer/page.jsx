"use client"

import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import React, { useEffect, useState } from 'react'
import { getAnimeResponse } from '@/libs/api-libs'

const page = () => {

    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        // const data = await response.json()

        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu title={`TOP POPULER FILM #${page}`} />
            <AnimeList api={topAnime} />
            <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
        </>
    )
}

export default page