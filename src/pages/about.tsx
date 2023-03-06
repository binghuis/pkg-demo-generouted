import { useModals } from "@/router";
import { Modals } from "generouted/react-router";

export default function About() {
  const modals = useModals();

  return (
    <div>
      <button onClick={() => modals.open("/modal")}>Open modal</button>
      <button onClick={() => modals.open("/modal", { at: "/login" })}>
        Global modal at /about
      </button>
      <Modals></Modals>
      <h1>基本路由：About</h1>
    </div>
  );
}
