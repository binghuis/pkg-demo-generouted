import { Link, useMatches } from "react-router-dom";
import { Module } from "@/routes/regular";
import { lazy, Suspense, useEffect, useState } from "react";

const Breadcrumb: React.FunctionComponent = () => {
  const matches = useMatches();
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);

  useEffect(() => {
    async function loadBreadcrumbs() {
      const breadcrumbPromises = matches.map(async (match) => {
        const handle = await match.handle;
        if (handle && handle.Crumb) {
          const Crumb = handle.Crumb;
          const breadcrumb = (
            <Link to={match.pathname}>
              {typeof Crumb === "string" ? (
                Crumb
              ) : (
                <Crumb params={match.params} />
              )}
            </Link>
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
    }

    loadBreadcrumbs();
  }, [matches]);

  return (
    <div>
      {breadcrumbs?.map((Breadcrumb, i) => {
        return <Suspense key={i} fallback={null} children={<Breadcrumb />} />;
      })}
    </div>
  );
};

export default Breadcrumb;
