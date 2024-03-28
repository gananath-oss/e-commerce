import { useEffect } from "react";
import AppRouter from "./Routers/AppRouter";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import getDataDocument from "./Utils/dataFetch/getDataDocument";
import {
  addUser,
  removeUser,
  userSelector,
} from "./Store/ReduxSlice/userSlice";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector(userSelector);

  useEffect(() => {
    const userCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        getDataDocument("users", user.uid, (setData) => {
          dispatch(addUser(setData));
        });
      } else {
        // User is signed out
        console.log("No User");
        dispatch(removeUser());
      }
    });
    return userCheck;
  }, []);

  return <AppRouter />;
}

export default App;
