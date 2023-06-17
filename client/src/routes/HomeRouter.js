import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UrlList from "../pages/urlList/UrlList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/allUrl',
    element: <UrlList />
  }
]);

export default router;
