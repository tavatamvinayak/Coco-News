import MainPage from '@/components/MainPage';
import Link from 'next/link';
import React from 'react'

//// // TOP HEADLINES

async function Search({params}) {
    console.log(params)
    const data = await getData(params.id);
    // console.log(data)
    const articles = data.articles
    // console.log(articles)
  return (
    <>
     <div className='text-center sm:py-5 sm:px-5'> <h1>everything you want  for news <Link href={`/search/everything/${params.id}`} className='text-red-500'>search</Link> </h1> </div>
     < MainPage articles={articles}  />
    </>
  )
}

async function getData(search) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${process.env.NEWS_API_KEY}`);
  
    if (!res.ok) {
     
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
}





export default Search
