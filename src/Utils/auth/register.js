import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import setDataDocument from "../dataFetch/setDataDocument";

const userRegister = (
  email,
  password,
  name,
  phoneNumber,
  address,
  profileImage
) => {
  const userDataSet = {
    name,
    email,
    phoneNumber,
    address,
    profileImage: profileImage || "",
    role: "user",
  };
  console.log(userDataSet);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      setDataDocument("users", user.uid, userDataSet);
    })
    .catch((error) => {
      //   const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export default userRegister;
