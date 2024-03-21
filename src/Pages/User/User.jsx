import { Button } from "@mui/material";
import logoutUser from "../../Utils/auth/logout";

const User = () => {
  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll">
      User
      <Button onClick={logoutUser}>Logout</Button>
    </div>
  );
};

export default User;
