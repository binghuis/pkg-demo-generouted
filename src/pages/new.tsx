<<<<<<< HEAD
export default function New() {
  console.log('new');
  
  return <h1>New</h1>;
}
=======
export const Crumb = "news";

const New: React.FunctionComponent = () => {
  return <h1>基本路由：New</h1>;
};

export default New;
New.displayName = "New";
>>>>>>> plugin
