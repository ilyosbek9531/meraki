import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import Main from "pages/Main/Main";
import Services from "pages/Services/Services";

export const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
