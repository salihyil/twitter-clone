import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-full w-full inline-flex">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
