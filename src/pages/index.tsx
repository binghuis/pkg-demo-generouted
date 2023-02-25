import { Navigate, useNavigate } from "@/routes.gen";

export const Loader = () => 'Route loader'
export const Action = () => 'Route action'
export const Catch = () => <div>Route errorrrrrr</div>

export default function Home() {
  const a = useNavigate()
  console.log(a);
  
  return <h1>基本路由：Home</h1>
}