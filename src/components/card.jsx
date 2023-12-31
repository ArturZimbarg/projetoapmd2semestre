"use client"

import { HeartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function CardFilme({serie}){
    const [favorito, setFavorito] = useState(true)

    const url_imagem = `https://image.tmdb.org/t/p/w200/${serie.poster_path}`

    return (
        <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
            { favorito ? 
                <HeartIcon onClick={() => setFavorito(false)} className="h-6 w-6 text-purple-100 cursor-pointer " />
            :
                <HeartIcon onClick={() => setFavorito(true)}  className="h-6 w-6 text-rose-600 cursor-pointer" />
            }
            <img className='rounded' src={url_imagem} alt="" />
            <span className='text-purple-100 font-bold text-center line-clamp-1'>
                {serie.name}
            </span>
            <div>
                <span className='text-purple-100'>{serie.vote_average}</span>
            </div>
            <a href="#" className='bg-purple-100 py-2 w-full rounded text-center'>
                detalhes
            </a>
        </div>
    )
}