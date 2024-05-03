import {
    createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import HomePage from "../HomePage/HomePage";
import UserLogin from "../Register/UserLogin";
import UserSignup from "../Register/UserSignup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children:[{
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/login",
        element:<UserLogin/>
      },
      {
        path:"/signup",
        element:<UserSignup/>
      }
    ]
    },
  ]);



export default router;