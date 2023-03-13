import { Link, useParams } from "@/router";
import { FC } from "react";
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
const Post: FC = () => {
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
};
export default Post;
