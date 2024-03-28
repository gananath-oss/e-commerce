import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import User from "../Pages/User/User";
import UserProtected from "./UserProtected";
import Category from "../Pages/Category/Category";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";
import ItemPage from "../Pages/ItemPage/ItemPage";
import AdminProtected from "./AdminProtected";
import Admin from "../Pages/Admin/Admin";
import NoUrl from "../Pages/404/NoUrl";
// import { Children } from "react";

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
          <Route path="category">
            <Route index element={<Category />} />
            <Route path=":categoryID">
              <Route index element={<CategoryItems />} />
              <Route path=":itemId" element={<ItemPage />} />
            </Route>
          </Route>
          <Route element={<UserProtected />}>
            <Route path="profile" element={<User />} />
          </Route>
          <Route element={<AdminProtected />}>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoUrl />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
