
import React from 'react'
import NewsCart from './NewsCart'

function MainPage({ articles  }) {

  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

        
              {
                articles.map((e, i) => <NewsCart title={e.title} description={e.description} urlImage={e.urlToImage} url={e.url} publishedAt={e.publishedAt} content={e.content} key={i} />)
              }
       

          </div>
        </div>
      </section>



    </>
  )
}

export default MainPage
