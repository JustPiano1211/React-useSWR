import { Outlet } from "react-router-dom";
import { MainLayout } from "../layouts";
import Home from "../pages/home";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";

export const routes = [
  {
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <MainLayout>
            <Home />
          </MainLayout>
        ),
      },
      {
        path: "page1",
        element: (
          <MainLayout>
            <Page1 />
          </MainLayout>
        ),
      },
      {
        path: "page2",
        element: (
          <MainLayout>
            <Page2 />
          </MainLayout>
        ),
      },
    ],
  },
];
