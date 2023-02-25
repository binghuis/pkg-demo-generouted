import { useMatches } from 'react-router-dom'

export default function Index() {
  const match = useMatches()?.find((match) => match.pathname === '/posts')
  const data = match?.data
console.log(2222,useMatches());

  return (
    <>
      <h1>嵌套路由：Posts</h1>

      <code>
        Loader data
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </>
  )
}