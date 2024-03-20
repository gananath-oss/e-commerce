import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import db, { auth } from "../../Firebase/firebase";
import { addUser } from "../../Store/ReduxSlice/userSlice";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const userCheck = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(user);
          // ...
        } else {
          console.log("User checked run : ", user);
          // User is signed out
          // ...
        }
      });
    };

    userCheck();

    return () => userCheck();
  }, []);

  const loginSubmit = () => {
    const email = usernameRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
      });

    // const q = query(collection(db, "users"), where("usernameRef", "==", "admin"));

    // getDocs(q)
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.id, " => ", doc.data());
    //       const userData = doc.data();
    //       dispatch(addUser(userData));
    //       navigate("/admin");
    //     });
    //   })
    //   .catch((error) => {
    //     console.log("Error getting documents: ", error);
    //   });
  };

  const logout = () => {};

  return (
    <div>
      <h1>Loging</h1>
      <br />
      <input ref={usernameRef} type="email" placeholder="e-mail" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <Button onClick={loginSubmit}>Login</Button>
      <br />
      <Button
        onClick={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              alert("User sign out");
            })
            .catch((error) => {
              // An error happened.
              alert(error.message);
            });
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Login;
