import { Link, useMatches } from "react-router-dom";
import { Module } from "@/routes/regular";
import { lazy, Suspense, useEffect, useId, useState } from "react";

const Breadcrumb: React.FunctionComponent = () => {
  const matches = useMatches();
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);
console.log(matches);

  const loadBreadcrumbs = async () => {
    const breadcrumbPromises = matches.map(async (match, index) => {
      const handle = (await match.handle) as Module;
      if (handle && handle.Crumb) {
        const Crumb = handle.Crumb;
        const element =
          typeof Crumb === "string" ? Crumb : <Crumb params={match.params} />;
        const breadcrumb =
          index < matches.length - 1 ? (
            <Link to={match.pathname}>{element}</Link>
          ) : (
            <span>{element}</span>
          );
        return { default: () => breadcrumb };
      }
    });
    const loadedBreadcrumbs = await Promise.all(breadcrumbPromises);
    const filteredBreadcrumbs = loadedBreadcrumbs
      .filter(Boolean)
      .map((breadcrumb) => {
        return lazy(() => Promise.resolve(breadcrumb as any));
      });
    setBreadcrumbs(filteredBreadcrumbs);
  };

  useEffect(() => {
    loadBreadcrumbs();
  }, [matches]);

  return (
    <span>
      {breadcrumbs.length > 0 && (
        <span>
          <Link to={"/"}>首页</Link>/
        </span>
      )}
      {breadcrumbs?.map((Breadcrumb, i) => {
        return (
          <span key={i}>
            <Suspense fallback={null} children={<Breadcrumb />} />
            {i < breadcrumbs.length - 1 && <span>/</span>}
          </span>
        );
      })}
    </span>
  );
};

export default Breadcrumb;
