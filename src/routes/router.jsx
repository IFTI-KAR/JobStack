import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Companies from '../pages/Companies';
import CompanyDetails from "../pages/CompanyDetails";
import Login from "../pages/Login";
import Regiter from "../pages/Regiter";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Pages from "../pages/pages";
import ContactUs from "../pages/contactUs";
import Loading from "../pages/Loading";
import MyProfile from "../pages/MyProfile";
import EditProfile from "../pages/EditProfile";
import ForgotPass from "../pages/ForgotPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Companies></Companies>
      },
    ]
  },
  {
    path: "/company/:id",
    element: <PrivateRoute><CompanyDetails /></PrivateRoute>,
    loader: async () => {
      const res = await fetch("/company-jobs.json");  // Corrected to absolute path
      if (!res.ok) {
        throw new Response("Failed to load company jobs JSON", { status: res.status });
      }
      const data = await res.json();
      return data;
    },
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <ErrorPage />  // Optional: handle loader errors gracefully
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Regiter></Regiter>
      },
    ]
  },
  {
    path: "/jobs",
    element: <h1>jobs here</h1>
  },
  {
    path: "/pages",
    element: <Pages></Pages>
  },
  {
    path: "/contact",
    element: <ContactUs></ContactUs>
  },
  {
    path: "/myprofile",
    element: <MyProfile></MyProfile>
  },
  {
    path: "/editprofile",
    element: <EditProfile></EditProfile>
  },
  {
    path: "/forgotpass",
    element: <ForgotPass></ForgotPass>
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
