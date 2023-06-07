import MainPage from '@/components/MainPage';
import Link from 'next/link';
import React from 'react'

// // EVERYTHING NEWS

async function Search({params}) {
    console.log(params)
    const data = await getData(params.id);
    // console.log(data)
    const articles = data.articles
    // console.log(articles)
  return (
    <>
     <div className='text-center py-5 px-5'> <h1>you want top-headline news for  <Link href={`/search/top-headlines/${params.id}`} className='text-red-500' >search</Link> </h1> </div>
     < MainPage articles={articles}  />
    </>
  )
}

async function getData(search) {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}`);
  
    if (!res.ok) {
     
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
}





export default Search
