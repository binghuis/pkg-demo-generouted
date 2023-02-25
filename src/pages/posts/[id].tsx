import { useMatch } from 'react-router-dom'
import { useParams } from '@/routes.gen'

export default function Id() {
  // const { params } = useMatch('/posts/$id')
  const { id } = useParams('/posts/:id')
  const match = useMatch('/posts/:id')
console.log(match);

  return <h1>动态路由：Id {id}</h1>
}