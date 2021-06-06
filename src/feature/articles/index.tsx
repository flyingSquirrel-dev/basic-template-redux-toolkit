import { useFetchAPI } from '../../app/hook/fetch'
import { ArticleDataProps } from './types'
import { FETCHED } from '../../app/constant'

const Articles = () => {
  const { status, data } = useFetchAPI({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
  })

  return (
    <section>
      <div>API Fetch Status: {status}</div>
      <ul>
        {status === FETCHED &&
          data.map((list: ArticleDataProps) => {
            const { id, body } = list

            return <li key={`article-${id}`}>{body}</li>
          })}
      </ul>
    </section>
  )
}

export default Articles
