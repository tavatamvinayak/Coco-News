import MainPage from '@/components/MainPage';
import Link from 'next/link';
import React from 'react'

// // CATEGORY NEWS

async function Search({ params }) {
  console.log(params)
  const data = await getData(params.id);
  console.log(data)
  const articles = data.sources
  console.log(articles)
  return (
    <>
      <div className='text-center py-5 px-5'> <h1>you want top-headline news for  <Link href={`/search/top-headlines/${params.id}`} className='text-red-500' >search</Link> </h1> </div>

      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">


              {
                articles.map((e, i) => {
                  return (
                    <>
                      <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={i}>
                        {/* <div className="rounded-lg h-64 overflow-hidden">

                          <img alt="content" className="object-contain object-center h-full w-full" src={e.urlImage} />
                        </div> */}
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5"> {e.name} </h2>
                        <p className="text-base leading-relaxed mt-2"> {e.description} </p>
                        <p className="text-yellow-300">{e.category}</p>
                      
                        <Link href={e.url} target='_blank' className="text-indigo-500 inline-flex items-center mt-3">Learn More
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </>
                  )
                })
              }


            </div>
          </div>
        </section>
      </>


    </>
  )
}

async function getData(search) {
  const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?&category=${search}&apiKey=${process.env.NEWS_API_KEY}`);

  if (!res.ok) {

    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export default Search
