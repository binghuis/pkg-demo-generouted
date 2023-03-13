import { useMatches } from 'react-router-dom'

const  Index = () =>  {
  const match = useMatches()?.find((match) => match.pathname === '/posts')
  const data = match?.data

  
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
export default  Index
Index.displayName = "文章id";
