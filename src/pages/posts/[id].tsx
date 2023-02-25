import { LoaderFunction, useLoaderData } from "react-router-dom";

type Post = {
  id: string;
  userId: string;
  title?: string;
  body?: string;
};

export const Loader: LoaderFunction = async ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(
    (response) => response.json()
  );
};
export const Catch = () => <div>页面有错误</div>;
export default function Post() {
  const data = useLoaderData() as Post;

  return (
    <div style={{ width: "100%" }}>
      <h1>动态路由：Post @ {data.id}</h1>

      <code>
        Loader data
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </div>
  );
}
