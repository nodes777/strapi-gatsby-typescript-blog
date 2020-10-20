import React from 'react'
import Card from './Card'

interface ArticlesProps {
  articles: {
    edges:Article[]
  }
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  console.log(articles);

  const leftArticlesCount = Math.ceil(articles.edges.length / 5)
  const leftArticles = articles.edges.slice(0, leftArticlesCount)
  const rightArticles = articles.edges.slice(leftArticlesCount, articles.edges.length)

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map(article => {
            return <Card article={article} key={`article__${article.node.id}`} />
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map(article => {
              return <Card article={article} key={`article__${article.node.id}`} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
