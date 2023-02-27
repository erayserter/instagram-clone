import React from "react";
import { Outlet, redirect } from "react-router-dom";

const PrivateRoutes = ({
  isAllowed,
  redirectPath,
}: {
  isAllowed: boolean;
  redirectPath: string;
}) => {
  if (!isAllowed) return redirect(redirectPath);

  return <Outlet />;
};

export default PrivateRoutes;
