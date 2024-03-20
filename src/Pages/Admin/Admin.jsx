import { useDispatch } from "react-redux";
import { MainContainer } from "../../Layout/MainContainer";
import { Button } from "@mui/material";
import { removeUser } from "../../Store/ReduxSlice/userSlice";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeUser());
    navigate("/admin");
  };

  return (
    <MainContainer>
      <p>Admin</p>
      <br />
      <Button onClick={logout}>Log out</Button>
    </MainContainer>
  );
};

export default Admin;
