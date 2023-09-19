import CardFilme from './components/card'
import Title from './components/titulo'

async function carregarSeries(){
  const fetch = require('node-fetch');
  const url = 'https://api.themoviedb.org/3/trending/tv/week?api_key=2650a748202f2212166a4bf4606aa160&language=pt-br';

  const resposta = await fetch(url)
  const json = await resposta.json()
  return json.results
  
  };
  


export default async function Home() {
  
  const series = await carregarSeries()

  return ( //JSX
    <>
      <nav className="bg-yellow-400 p-4">
        <ul>
          <li><a href="#"><h1 className="text-3xl font-bold">Suas series flix</h1></a></li>
        </ul>

        
      </nav>

     <Title>em alta</Title>

      { <section className='flex flex-wrap'>
        {series.map(serie => <CardFilme serie={serie} /> )}
      </section> }

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}
