import Image from 'next/image'
import Titulo from './components/titulo'

export default function Home() {
  return ( //JSX
    <>
      <ul className="p-4 bg-yellow-400  ">
        <li><a className="text-3xl font-bold ">Suas séries flix </a></li>
        <li><a>em alta</a></li>
        <li><a>lançamentos</a></li>
        <li><a>comédia</a></li>
        <li><a>aventura</a></li>
        <li><a>suspense</a></li>
        <li><a>drama</a></li>
        
      </ul>

    </>
  )
}