import React from 'react'
import MainPage from '@/components/MainPage'
async function getData() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);

  if (!res.ok) {
   
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


async function USA() {
  const data = await getData();
  // console.log(data)
  const articles = data.articles
  return (
    <section>
       < MainPage articles={articles}  />
    </section>
  )
}

export default USA
