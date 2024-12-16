"use client"
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

const InputSearch = () => {

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            const keyword = searchRef.current.value
            if (!keyword || keyword.trim() == "") {
                return
            } else {
                router.push(`/search/${keyword}`)
            }
        }
    }

    return (
        <div className='relative'>
            <input placeholder='Cari Film..' className='p-2 rounded w-80' ref={searchRef} onKeyDown={handleSearch} />
            <button className='absolute top-2 end-2'><MagnifyingGlass size={24} color='grey' onClick={handleSearch} /></button>
        </div>
    )
}

export default InputSearch