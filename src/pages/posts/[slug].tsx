import { LoaderFunction, useLoaderData, useParams } from 'react-router-dom'

type Post = {
  id: string
  userId: string
  title?: string
  body?: string
}

export const Loader: LoaderFunction = async ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`).then((response) => response.json())
}

export default function Post() {
  const data = useLoaderData() as Post
  const params = useParams()
console.log(data.id,params.slug);

  return (
    <>
      <h1>Post @ {data.id}</h1>

      <code>
        Loader data
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </>
  )
}