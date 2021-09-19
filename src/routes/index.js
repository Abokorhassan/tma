import React from "react";

const Home = React.lazy(() => import("../pages/home"));
const Bobs = React.lazy(() => import("../pages/bobs"));
const Features = React.lazy(() => import("../pages/features"));
const GetAccount = React.lazy(() => import("../pages/getAccount"));
const Post = React.lazy(() => import("../pages/post"));
const Projects = React.lazy(() => import("../pages/projects"));

const routes = [
  { path: "/", component: Home, access: "both" },

  { path: "/bobs", component: Bobs, access: "both" },

  { path: "/features", component: Features, access: "both" },

  { path: "/getAccount", component: GetAccount, access: "both" },

  { path: "/post", component: Post, access: "authorized" },

  { path: "/projects", component: Projects, access: "authorized" },

  //Error Page
  // { component: ErrorPage, isWithoutLayout: true, exact: false },
];

export default routes;
