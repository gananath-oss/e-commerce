import { useEffect, forwardRef, useRef, useState } from "react";
import { Button } from "@mui/material";
import userRegister from "../../Utils/auth/register";
import userLogin from "../../Utils/auth/login";
import { useNavigate } from "react-router-dom";
import emailValidate from "../../Utils/validate/emailValidate";
import { join } from "xpress/lib/string";
import passwordValidate from "../../Utils/validate/passwordValidate";

const Login = () => {
  const [select, setSelect] = useState("login");
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
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
    </div>
  );
};

export default Login;

/**
 *
 */

const LoginComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const navigate = useNavigate();
  const [authErrMsg, setAuthErrMsg] = useState("");

  const loginHandle = (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    console.log(email, password);
    if (email.length > 0 && password.length > 0) {
      userLogin(email, password, navigate, setAuthErrMsg);
      console.log(authErrMsg);
    }
  };

  return (
    <div className=" w-[90%] p-5 shadow-lg flex flex-col items-center justify-center">
      <h1 className=" text-3xl font-bold mb-7">Login</h1>
      {authErrMsg && (
        <h3 className=" flex w-full md:w-[500px] bg-red-500 py-3 rounded-md mb-3 text-white text-md font-bold justify-center">
          {authErrMsg}
        </h3>
      )}
      <form
        onSubmit={loginHandle}
        className=" w-full flex flex-col md:w-[500px]"
      >
        <LoginInputBox
          inputType="email"
          name="email"
          placeholder="Enter your email"
          ref={inputRef}
        />
        <LoginInputBox
          inputType="password"
          name="password"
          placeholder="Enetr your passwprd"
        />
        <Button variant="contained" size="large" type="sibmit">
          Login
        </Button>
      </form>
    </div>
  );
};

/**
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
    <div className=" w-[90%] p-5 shadow-lg flex flex-col items-center justify-center">
      <h1 className=" text-3xl font-bold mb-7">User Register</h1>
      <form
        onSubmit={userRegisterHandle}
        className=" w-full flex flex-col md:w-[500px]"
      >
        <div className=" flex gap-2">
          <LoginInputBox
            inputType="text"
            name="firstName"
            placeholder="First Name"
          />
          <LoginInputBox
            inputType="lastName"
            name="text"
            placeholder="Last Name"
          />
        </div>
        <LoginInputBox
          inputType="email"
          name="email"
          placeholder="Email Address"
        />
        <LoginInputBox
          inputType="password"
          name="password"
          placeholder="Password"
        />
        <LoginInputBox
          inputType="password"
          name="confirmedPassword"
          placeholder="Confirmed Password"
        />
        <LoginInputBox
          inputType="text"
          name="phoneNumber"
          placeholder="Phone Number"
        />
        <LoginInputBox inputType="text" name="text" placeholder="Address" />
        <LoginInputBox
          inputType="text"
          name="profileImage"
          placeholder="Profile Image"
        />
        <Button variant="contained" size="large" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

/**
 *
 */

const LoginInputBox = forwardRef(({ inputType, name, placeholder }, ref) => {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState([]);
  return (
    <div
      className={` w-full relative border ${
        error ? "border-red-600" : "border-primary-color"
      } rounded-[5px] p-3 mb-5`}
    >
      <label
        className={` absolute top-[-12px] left-2 text-xs bg-white p-1 ${
          error ? "text-red-500" : "text-primary-color"
        }`}
      >
        {placeholder.toUpperCase()}
      </label>
      <input
        ref={ref}
        className={` w-full border-none focus:outline-none ${
          error && "placeholder:text-red-300"
        }`}
        onBlur={(e) =>
          inputType === "email"
            ? emailValidate(e.target.value, setError, setErrMsg)
            : inputType === "password"
            ? passwordValidate(e.target.value, setError, setErrMsg)
            : () => {}
        }
        type={inputType}
        name={name}
        placeholder={placeholder}
      />
      {error && <p className=" text-red-500 text-xs">{errMsg?.join(", ")}</p>}
    </div>
  );
});
