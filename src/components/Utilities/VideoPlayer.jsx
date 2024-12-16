"use client"

import React, { useState } from 'react'
import YouTube from 'react-youtube'

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className='fixed bottom-2 right-2'>
                <button className='text-color-primary float-right bg-color-secondary px-3 mb-1 rounded-xl' onClick={handleVideoPlayer}>X</button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button className='fixed bottom-5 right-5 w-36 bg-color-secondary text-color-primary text-xl rounded-lg transition-all shadow-lg' onClick={handleVideoPlayer}>Tonton Trailer</button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer