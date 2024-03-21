import { useState } from "react";
import { MainContainer } from "../../Layout/MainContainer";
import { Button } from "@mui/material";
import userRegister from "../../Utils/auth/register";
import userLogin from "../../Utils/auth/login";
import { amber } from "@mui/material/colors";

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
  const loginHandle = (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    console.log(email, password);
    userLogin(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <input type="email" name="email" placeholder="Enetr your email" />
        <input
          type="password"
          name="password"
          placeholder="Enetr your passwprd"
        />
        <Button type="sibmit">Login</Button>
      </form>
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
    const name = `${e.target[0].value} ${e.target[1].value}`;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const cPassword = e.target[4].value;
    const phoneNumber = e.target[5].value;
    const address = e.target[6].value;
    const profileImage = e.target[7].value;

    if (password === cPassword) {
      userRegister(email, password, name, phoneNumber, address, profileImage);
    }
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
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Profile Image" />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
