import CardFilme from './components/card'
import Title from './components/titulo'

export default function Home() {
  const filmes = [
    {
      titulo: "One Piece: A série",
      nota: 8.1,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/y0VSmak9mSobl9QTKCvR7w4w6Ui.jpg"
    },
    {
      titulo: "Ruptura",
      nota: 8.4,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/d09X5AzxBq4GkHL6j8pmkDPySfA.jpg"
    },
    {
      titulo: "Bel-Air",
      nota: 7.9,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/g3APu2SlXMEATmWZF4KI46D1nog.jpg"
    },
    {
      titulo: "Avatar: A lenda de Aang",
      nota: 8.7,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8RFAXPLs3qg5YVYbv5ME46syBKy.jpg"
    },
    {
      titulo: "Peaky Blinders: Sangue, Apostas e Navalhas",
      nota: 8.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg"
    },
    {
      titulo: "Malcom",
      nota: 8.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rdxW4Lszm6qYB3qd2cexB8U8laW.jpg"
    },
    {
      titulo: "Ted Lasso",
      nota: 8.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg"
    },
    {
      titulo: "It's Always Sunny in Philadelphia",
      nota: 8.3,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sJFo8BoDfn01qenoJzM9n7cWw6e.jpg"
    }
  ]

  return ( //JSX
    <>
      <nav className="bg-slate-900 p-4">
        <ul>
          <li><a href="#"><h1 className="text-yellow-400 text-3xl font-bold"> Suas séries flix</h1></a></li>
        </ul>
        
      </nav>

     <Title>em alta</Title>

      <section className='flex flex-wrap'>
        {filmes.map(filme => <CardFilme filme={filme} /> )}
      </section>

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}
