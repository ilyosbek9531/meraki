import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import Main from "pages/Main/Main";
import Services from "pages/Services/Services";
import Project from "pages/Projects/Projects";
import Blogs from "pages/Blogs/Blogs";
import Contact from "pages/Contact/Contact";

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
      path: "/projects",
      element: <Project />,
    },
    {
      path: "/blog",
      element: <Blogs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
