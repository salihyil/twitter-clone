import { Navigate, useRoutes } from "react-router-dom";

import { Layout } from "components/Layouts";

import { ROUTES } from "constants/routes";

const PrivateRouter = () => {
  const privateRoutes = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: ROUTES.ROOT,
          element: <div>PrivateRouter</div>,
        },
      ],
    },
    { path: "*", element: <Navigate to={ROUTES.ROOT} replace /> },
  ]);

  return privateRoutes;
};

export default PrivateRouter;
