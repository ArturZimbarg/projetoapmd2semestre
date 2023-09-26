
//hook

import { useState } from "react";

export default function useFavorito(){
    const [favorito, setFavorito] = useState(false)

    function favoritar(serie){
        setFavorito(true)
        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjUwYTc0ODIwMmYyMjEyMTY2YTRiZjQ2MDZhYTE2MCIsInN1YiI6IjY1MGEyNjc0Y2FkYjZiMDBmZTQzZGM4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPboqMxVMlN9U9c7DGrhzaf0uNhoVdo7FLExSq9Q1c0'
            },
            body: JSON.stringify({media_type: 'serie', media_id: serie.id, watchlist: true})
        };
        
        fetch('https://api.themoviedb.org/3/account/20465322/watchlist', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    function desfavoritar(serie){
        setFavorito(false)
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjUwYTc0ODIwMmYyMjEyMTY2YTRiZjQ2MDZhYTE2MCIsInN1YiI6IjY1MGEyNjc0Y2FkYjZiMDBmZTQzZGM4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPboqMxVMlN9U9c7DGrhzaf0uNhoVdo7FLExSq9Q1c0'
            },
            body: JSON.stringify({media_type: 'serie', media_id: serie.id, watchlist: false})
        };
        
        fetch('https://api.themoviedb.org/3/account/20465322/watchlist', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return { favoritar, desfavoritar, favorito }

}
