"use client"

import React, { useState } from 'react'

const FavoriteButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {

    const [isCreated, setIsCreated] = useState(false)

    const handleFavorite = async (e) => {
        e.preventDefault()
        const data = { anime_mal_id, user_email, anime_image, anime_title }
        const response = await fetch("/api/v1/favorite", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const favorite = await response.json()
        if (favorite.isCreated) {
            setIsCreated(true)
        }
    }

    return (
        <>
            {isCreated ? <p className='text-color-primary'>Berhasil di tambakan ke My Favorite</p> :
                <button onClick={handleFavorite} className='px-2 py-1 bg-color-accent'>Add To Favorite</button>
            }
        </>
    )
}

export default FavoriteButton