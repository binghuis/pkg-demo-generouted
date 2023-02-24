import { Link } from "react-router-dom";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ margin: 24 }}>
      <header style={{ display: "flex", gap: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/new">New</Link>
        <Link to="/posts">Posts</Link>
      </header>

      <main>{children}</main>
    </section>
  );
}
