// Generouted, changes to this file will be overriden
/* eslint-disable react/no-children-prop */

import { Fragment, lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { components, hooks, utils } from "@generouted/react-router/client";

import app from "./pages/_app";
import noMatch from "./pages/404";

const Auth = lazy(() => import("./pages/(auth)/_layout"));
const Posts = lazy(() => import("./pages/posts/_layout"));
const About = lazy(() => import("./pages/about"));
const Index = lazy(() => import("./pages/index"));
const IndexError = lazy(() =>
  import("./pages/index").then((m) => ({ default: m.Catch }))
);
const New = lazy(() => import("./pages/new"));
const Authlogin = lazy(() => import("./pages/(auth)/login"));
const Authregister = lazy(() => import("./pages/(auth)/register"));
const Postsiddeep = lazy(() => import("./pages/posts/[id].deep"));
const Postsid = lazy(() => import("./pages/posts/[id]"));
const PostsidError = lazy(() =>
  import("./pages/posts/[id]").then((m) => ({ default: m.Catch }))
);
const Postsindex = lazy(() => import("./pages/posts/index"));
const Poststesthmr = lazy(() => import("./pages/posts/test-hmr"));
const PoststesthmrError = lazy(() =>
  import("./pages/posts/test-hmr").then((m) => ({ default: m.Catch }))
);
const Splatall = lazy(() => import("./pages/splat/[...all]"));
const Postsidpid = lazy(() => import("./pages/posts/[id]/-[pid]"));
const App = app || Outlet;
const NoMatch = noMatch || Fragment;

const config = [
  {
    path: "splat",
    id: "splat",
    children: [
      {
        id: "splatall",
        path: "*",
        element: <Suspense fallback={null} children={<Splatall />} />,
      },
    ],
  },
  {
    path: "posts",
    id: "posts",
    children: [
      {
        id: "poststesthmr",
        path: "test-hmr",
        element: <Suspense fallback={null} children={<Poststesthmr />} />,
        loader: (args: any) =>
          import("./pages/posts/test-hmr").then((m) =>
            m.Loader.apply(m.Loader, [args] as any)
          ),
        errorElement: (
          <Suspense fallback={null} children={<PoststesthmrError />} />
        ),
      },
      {
        id: "postsindex",
        index: true,
        element: <Suspense fallback={null} children={<Postsindex />} />,
      },
      {
        id: "postsiddeep",
        path: ":id/deep",
        element: <Suspense fallback={null} children={<Postsiddeep />} />,
      },
      {
        id: "postsid",
        path: ":id",
        element: <Suspense fallback={null} children={<Postsid />} />,
        loader: (args: any) =>
          import("./pages/posts/[id]").then((m) =>
            m.Loader.apply(m.Loader, [args] as any)
          ),
        errorElement: <Suspense fallback={null} children={<PostsidError />} />,
        children: [
          {
            id: "postsidpid",
            path: ":pid?",
            element: <Suspense fallback={null} children={<Postsidpid />} />,
          },
        ],
      },
    ],
    element: <Suspense fallback={null} children={<Posts />} />,
    loader: (args: any) =>
      import("./pages/posts/_layout").then((m) =>
        m.Loader.apply(m.Loader, [args] as any)
      ),
  },
  {
    id: "auth",
    children: [
      {
        id: "authregister",
        path: "register",
        element: <Suspense fallback={null} children={<Authregister />} />,
      },
      {
        id: "authlogin",
        path: "login",
        element: <Suspense fallback={null} children={<Authlogin />} />,
      },
    ],
    element: <Suspense fallback={null} children={<Auth />} />,
  },
  {
    id: "about",
    path: "about",
    element: <Suspense fallback={null} children={<About />} />,
  },
  {
    id: "index",
    path: "/",
    element: <Suspense fallback={null} children={<Index />} />,
    loader: (args: any) =>
      import("./pages/index").then((m) =>
        m.Loader.apply(m.Loader, [args] as any)
      ),
    action: (args: any) =>
      import("./pages/index").then((m) =>
        m.Action.apply(m.Action, [args] as any)
      ),
    errorElement: <Suspense fallback={null} children={<IndexError />} />,
  },
  {
    id: "new",
    path: "new",
    element: <Suspense fallback={null} children={<New />} />,
  },
];

type Path =
  | `/`
  | `/about`
  | `/login`
  | `/new`
  | `/posts`
  | `/posts/:id`
  | `/posts/:id/:pid?`
  | `/posts/:id/deep`
  | `/posts/test-hmr`
  | `/register`
  | `/splat/${string}`;

type Params = {
  "/posts/:id/deep": { id: string };
  "/posts/:id": { id: string };
  "/posts/:id/:pid?": { id: string; pid?: string };
};

export const routes = [
  {
    element: <App />,
    children: [...config, { path: "*", element: <NoMatch /> }],
  },
];
export const Routes = () => (
  <RouterProvider router={createBrowserRouter(routes)} />
);
export const { Link, Navigate } = components<Path, Params>();
export const { useNavigate, useParams } = hooks<Path, Params>();
export const { rediect } = utils<Path, Params>();
