import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { element } from "prop-types";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { AccesUser } from "./pages/dashboard/acces-users";
import { TableView } from "./pages/dashboard/View";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes_auth = {
  title: "auth pages",
  layout: "auth",
  pages: [
    {
      icon: <ServerStackIcon {...icon} />,
      name: "sign in",
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      icon: <RectangleStackIcon {...icon} />,
      name: "sign up",
      path: "/sign-up",
      element: <SignUp />,
    },

    {
      icon: <RectangleStackIcon {...icon} />,
      name: "forgo",
      path: "/forgot-password",
      element : <ForgotPassword/>,


      
    },
    {
      icon : <RectangleStackIcon {...icon} />,
      name : "reset",
      path : "/reset-password",
      element : <ResetPassword/>,
    },
  ],
}

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "accesUser",
        path: "/acces-user",
        element: <AccesUser />,
      },
      //Tablas 
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Vistas",
        path: "/view",
        element: <TableView  />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },

    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },

    {
        icon: <RectangleStackIcon {...icon} />,
        name: "forgot password",
        path: "/forgot-password",
        element : <ForgotPassword/>,


        
      },
      {
        icon : <RectangleStackIcon {...icon} />,
        name : "reset password",
        path : "/reset-password",
        element : <ResetPassword/>,
      }, 
    ],
  },
];

export default routes;
