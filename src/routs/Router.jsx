import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../components/home/Home";
import Friend from "../components/friend/Friend";
import Stats from "../components/Stats/Stats";
import Timeline from "../components/timeline/Timeline";
import ErrorPage from "../components/errorPage/ErrorPage";
import AllFriends from "../components/home/AllFriends";
import FriendDetails from "../components/page/FriendDetails";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayouts,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/friend",
        Component:Friend
      },
      {
      path:"all-friends",
      Component: AllFriends
      },

      {
      path:"/stats",
      Component:Stats
      },
      
      {
        path:"/timeline",
        Component:Timeline
      },
      {
        path:"/friendDetails/:Id",
        Component:FriendDetails,
        loader:() => fetch("/friendsData.json"),
      }
    ],
    errorElement:<ErrorPage />
  },
]);

