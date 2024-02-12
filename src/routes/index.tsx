/* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./pathConstants";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const RandomGamePage = React.lazy(() => import("../pages/RandomGamePage"));
const GamesListPage = React.lazy(() => import("../pages/GamesListPage"));

const routes = [
  { path: PathConstants.HOME, element: <HomePage /> },
  { path: PathConstants.RANDOM, element: <RandomGamePage /> },
  { path: PathConstants.LIST, element: <GamesListPage /> },
]

export default routes;
