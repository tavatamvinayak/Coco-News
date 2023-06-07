import MainPage from '@/components/MainPage'
import Link from 'next/link';


async function getData() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`);

  if (!res.ok) {

    throw new Error('Failed to fetch data');
  }

  return res.json();
}







async function Home() {
  const data = await getData();
  // console.log(data)
  const articles = data.articles

  return (
    <>
      <main>
        <h1 className='text-center'> Home</h1>
        <div className='px-20'>
          <h1>Categoty</h1> 
          
          <Link href={`/search/category/business`}        className='px-2 border border-2 border-yellow-400 m-2' >business</Link>   
          <Link href={`/search/category/technology`}      className='px-2 border border-2 border-yellow-400 m-2' >technology</Link>  
          <Link href={`/search/category/sports` }         className='px-2 border border-2 border-yellow-400 m-2' >sports</Link>  
          <Link href={`/search/category/science`}         className='px-2 border border-2 border-yellow-400 m-2' >science</Link> 
          <Link href={`/search/category/entertainment`}   className='px-2 border border-2 border-yellow-400 m-2' >entertainment</Link>  
          <Link href={`/search/category/general`}         className='px-2 border border-2 border-yellow-400 m-2' >general</Link>  
          <Link href={`/search/category/health`}          className='px-2 border border-2 border-yellow-400 m-2' >health</Link>  
        </div>
        < MainPage articles={articles} />
      </main>
    </>
  )
}

export default Home;