import { Navigate, useRoutes } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { AuthLayout } from "components/Layouts";
import Login from "pages/Login";

const PublicRouter = () => {
  const publicRoutes = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <div>home</div>,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: ROUTES.ROOT,
          element: <Login />,
        },
      ],
    },
    { path: "*", element: <Navigate to={ROUTES.ROOT} replace /> },
  ]);

  return publicRoutes;
};

export default PublicRouter;
