import { useState } from "react";
import { MainContainer } from "../../Layout/MainContainer";
import { Button } from "@mui/material";

const Login = () => {
  const [select, setSelect] = useState("login");
  return (
    <MainContainer>
      {select === "login" ? (
        <LoginComponent />
      ) : select === "register" ? (
        <RegisterComponent />
      ) : null}
      {/* change login or selector */}
      <div className=" mt-5">
        {select === "login" ? (
          <p>
            {" "}
            Don't have an account?{" "}
            <span
              className=" cursor-pointer"
              onClick={() => setSelect("register")}
            >
              Sign Up
            </span>
          </p>
        ) : select === "register" ? (
          <p>
            Already have an account{" "}
            <span
              className=" cursor-pointer"
              onClick={() => setSelect("login")}
            >
              Sign In
            </span>
          </p>
        ) : null}
      </div>
    </MainContainer>
  );
};

export default Login;

/**
 *
 *
 *
 *
 */

const LoginComponent = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

/**
 *
 *
 *
 *
 */

const RegisterComponent = () => {
  const userRegisterHandle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>User Register</h1>
      <form onSubmit={userRegisterHandle}>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirmed Password" />
        <input type="text" placeholder="Phone Number" />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
