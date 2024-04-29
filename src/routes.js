import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import Main from "pages/Main/Main";

export const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
