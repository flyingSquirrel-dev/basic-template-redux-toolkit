import { useFetchAPI } from '../../app/hook/fetch'
import { ArticleDataProps } from './types'

const Articles = () => {
  const { status, data } = useFetchAPI({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
  })

  return (
    <section>
      <div>API Fetch Status: {status}</div>
      <ul>
        {data.map((list: ArticleDataProps) => {
          const { id, body } = list

          return <li key={`article-${id}`}>{body}</li>
        })}
      </ul>
    </section>
  )
}

export default Articles
