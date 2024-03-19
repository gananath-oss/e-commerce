import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../Store/ReduxSlice/userSlice";

const AdminProtected = () => {
  const admin = false;
  const user = useSelector(userSelector);
  console.log(user);
  return admin ? <Outlet /> : <Navigate to="/404" />;
};

export default AdminProtected;
