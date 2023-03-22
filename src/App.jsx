import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HotelPage from "./routes/HotelPage";
import AuthPage from "./routes/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HotelPage/>,
  },
  {
    path: "auth",
    element: <AuthPage/>,
  },
]);

const App = () => {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;