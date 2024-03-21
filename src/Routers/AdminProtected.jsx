import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { userSelector } from "../Store/ReduxSlice/userSlice";
import { useEffect } from "react";

const AdminProtected = () => {
  const navigete = useNavigate();
  const userData = useSelector(userSelector);

  useEffect(() => {
    if (userData.name) {
      if (!(userData.name === "default")) {
        if (!(userData.role === "admin")) {
          navigete("/404");
        }
      }
    }
  }, [userData]);
  return <Outlet />;
};

export default AdminProtected;
