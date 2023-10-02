import CardFilme from '@/components/card'
import NavBar from '@/components/NavBar'
import Title from '@/components/titulo'

async function carregarSeries(){
  const url = 'https://api.themoviedb.org/3/trending/tv/week?api_key=2650a748202f2212166a4bf4606aa160&language=pt-br';
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json.results
  };
  
export default async function Home() {
  
  
  const series = await carregarSeries()

  return ( //JSX
    <>
      <NavBar/>      

     <Title>em alta</Title>

      { <section className='flex flex-wrap'>
        {series.map(serie => <CardFilme serie={serie} /> )}
      </section> }
    

     <Title>lançamentos</Title>

   
    </>  
  )
}