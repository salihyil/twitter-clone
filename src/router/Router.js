import { useSelector } from "react-redux";

import { selectUserToken } from "store/auth";

import PrivateRouter from "./PrivateRouter.js";
import PublicRouter from "./PublicRouter";

const Router = () => {
  const userToken = useSelector(selectUserToken);

  return userToken ? <PrivateRouter /> : <PublicRouter />;
};

export default Router;
