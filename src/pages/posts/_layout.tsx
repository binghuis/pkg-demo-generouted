import { Link, Outlet } from "react-router-dom";

export const Loader = () => {
  return Promise.resolve({
    source: "from `src/pages/posts.tsx` layout data loader",
  });
};

export const Crumb = (props: any) => {
  const { params } = props;
  return <div>PostId{params.id}</div>;
};

export default function PostsLayout() {
  return (
    <>
      <h1>Posts Layout - pages/posts/_layout.tsx</h1>

      <ul style={{ display: "flex", gap: 24, listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/posts">Posts Index</Link>
        </li>
        <li>
          <Link to="/posts/1">Post 1</Link>
        </li>
        <li>
          <Link to="/posts/2">Post 2</Link>
        </li>
        <li>
          <Link to="/posts/3">Post 3</Link>
        </li>
      </ul>

      <div style={{ margin: "48px 0", width: "100%" }}>
        <Outlet />
      </div>
    </>
  );
}
