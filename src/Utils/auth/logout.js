import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const userLogout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export default userLogout;
