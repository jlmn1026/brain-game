import { Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { PageRoute } from "./pageRoute";
import MemorizingNumberPage from "@/pages/MemorizingNumberPage";
import MainLayout from "@/common-ui/layout/MainLayout";

const BaseLayout = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const AppRoutes = () => {
  // const auth = useAuth();

  const publicRoutes = [
    {
      path: "/",
      element: <BaseLayout />,
      children: [{ path: PageRoute.Top, element: <MemorizingNumberPage /> }],
    },
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { path: PageRoute.MemorizingNumber, element: <MemorizingNumberPage /> },
      ],
    },
  ];

  // const protectedRoutes = [
  //   {
  //     path: '/app',
  //     element: <App />,
  //     children: [
  //       { path: '/discussions/*', element: <DiscussionsRoutes /> },
  //       { path: '/users', element: <Users /> },
  //     ],
  //   },
  // ];

  const element = useRoutes([...publicRoutes]);

  return <>{element}</>;
};
