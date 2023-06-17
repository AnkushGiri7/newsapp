import "./App.css";
import "./Kard";
import Kard from './Kard';
import { article } from './data';
function App() {
  return (
    <>
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
