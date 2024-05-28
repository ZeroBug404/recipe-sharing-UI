import { Navigate, useLocation } from "react-router-dom";

import { getFromLocalStorage } from "../helpers/utils/saveData";
import toast from "react-hot-toast";

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const token = getFromLocalStorage("accessToken");

  if (!token) {
    toast.error("You need to login first");
    return <Navigate to="/" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoutes;
