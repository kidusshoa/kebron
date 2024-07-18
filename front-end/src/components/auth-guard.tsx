import { useToken } from "../lib/configs/store";
import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AuthGuard = (props: PropsWithChildren) => {
  const { children } = props;
  const location = useLocation();
  const token = useToken((state) => state.token);

  if (!token) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
