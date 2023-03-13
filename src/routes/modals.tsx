import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import type { ActionFunction, LoaderFunction } from "react-router-dom";

import { generateModalRoutes } from "generouted/core";

type Element = () => JSX.Element;
type Module = {
  default: Element;
  Loader: LoaderFunction;
  Action: ActionFunction;
  Catch: Element;
};

const MODALS = import.meta.glob<Pick<Module, "default">>(
  "/src/pages/**/[+]*.{jsx,tsx}",
  { eager: true }
);

const modalRoutes = generateModalRoutes<Element>(MODALS);

export const Modals = () => {
  const current = useLocation().state?.modal;
  const Modal = modalRoutes[current] || Fragment;
  return <Modal />;
};
