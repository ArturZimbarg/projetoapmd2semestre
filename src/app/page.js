import Title from './components/titulo'
import Image from 'next/image'

export default function Home() {
  return ( //JSX
    <>
      <nav className="bg-yellow-400 p-4">
        <ul>
          <li><a href="#"><h1 className="text-3xl font-bold">Suas séries flix</h1></a></li>
        </ul>        
      </nav>

     <Title>em alta</Title>

      <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        <img className='rounded' src="https://place-hold.it/150x220/666" alt="" />
        <span className='bg-yellow-400 font-bold text-center line-clamp-1'>titulo do filme do card</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className='bg-yellow-400 py-2 w-full rounded text-center'>
          detalhes
        </a>
      </div>

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}
