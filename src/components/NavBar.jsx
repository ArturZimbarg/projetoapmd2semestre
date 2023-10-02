"use client"

import { useRouter } from 'next/navigation'
import { serverLogout } from '@/actions/user'

export default function NavBar(){
    const { push } = useRouter()
    
    function handleLogout(){
        serverLogout()
        push("/login")
    }

    return(
        <nav className="text-yellow-400 p-4">
            <ul>
                <li><a href="#"><h1 className="text-3xl font-bold">Suas series flix</h1></a></li>
            </ul>
            <ul>
                <li><a href="#">favoritos</a></li>
            </ul>
            <ul>
                <li><a href="#">séries</a></li>
            </ul>

            <button onClick={handleLogout}>logout</button>
        
      </nav>
    )
}