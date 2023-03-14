import { Link, useModals } from "@/router";
import { Modals } from "@/routes/modals";

export const Crumb = "关于ID";

const About: React.FunctionComponent = () => {
  return (
    <div>
      <h1>基本路由：About ID</h1>
    </div>
  );
};

export default About;
About.displayName = "About";
