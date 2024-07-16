import { useRoutes } from "react-router-dom";
import { Velotimer } from "./Velotimer";
import { Table } from "./Table";

export const Router = () =>
  useRoutes([
    {
      path: "/velo",
      Component: Velotimer,
    },
    {
      path: `/table`,
      Component: Table,
    },
    {
      path: "*",
      Component: null,
    },
  ]);
