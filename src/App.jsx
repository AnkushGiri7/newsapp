import { useEffect, useState } from 'react';
import "./App.css";
import "./Kard";
import Kard from './Kard';
// import Navbar from './Components/Navbar/Navbar';
// import Card from './Components/card/Card';
import { article } from './data';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <Kard/> */}
      {/* <section>
        <Navbar />
      </section> */}
      <main>
        {article.map((news) => {
          return <article key={news.url}>
            <Kard title={news.title} 
            content={news.content} 
            urlToImage={news.urlToImage} 
            url = {news.url}/>
          </article>

        })}
      </main>
    </>
  )
}

export default App
