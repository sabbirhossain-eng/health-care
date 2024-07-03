import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorElements from "../pages/ErrorElements/ErrorElements";
import Appointment from "../pages/Appointment/Appointment";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorElements />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path:"/appointment",
            element: <Appointment/>
          },
        ]
    },
  ]);