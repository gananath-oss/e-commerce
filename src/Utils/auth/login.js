import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const userLogin = (email, password, navigate, setAuthErrMsg) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      navigate("/");
    })
    .catch((error) => {
      const errorMessage = error.message;
      if (errorMessage) {
        setAuthErrMsg("Invalid Credential");
      }
    });
};

export default userLogin;
