import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import User from "../Pages/User/User";
import UserProtected from "./UserProtected";
import { Children } from "react";

// V6 concept --------
// const router = BrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     Children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         element: <UserProtected />,
//         Children: [
//           {
//             path: "user",
//             element: <User />,
//           },
//         ]
//       }
//   ],
//   },
//   {
//     path: "/login",
//     element: <Login />
//   }
// ]);

// const AppRouter = () => {
//   return <RouterProvider router={router} />
// };

// V5 Concept----
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route element={<UserProtected />}>
            <Route path="user" element={<User />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
