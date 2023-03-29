import React from 'react';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import HotelPage from "./routes/HotelPage";
import AuthPage from "./routes/AuthPage";
import checkAuth from "./functions/checkAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HotelPage/>,
    loader: () => {
      const isAuth = checkAuth();
      if (!isAuth) {
        return redirect("auth");
      }
      return null;
    }
  },
  {
    path: "auth",
    element: <AuthPage/>,
    loader: () => {
      const isAuth = checkAuth();
      if (isAuth) {
        return redirect("/");
      }
      return null;
    }
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;