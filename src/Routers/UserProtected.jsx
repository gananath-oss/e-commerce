import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../Store/ReduxSlice/userSlice";

const UserProtected = () => {
  const userData = useSelector(userSelector);
  console.log("profile : ", userData);
  return userData.name ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtected;
