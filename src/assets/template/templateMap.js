import { Paris, Toronto } from "../constants/constants";
import React from "react";
import Template01 from "./Template01/Template01";
import Template02 from "./Template02/Template02";

export const Templates = {
  [Toronto]: React.lazy(() => import("./Template01/Template01")),
  [Paris]: React.lazy(() => import("./Template02/Template02")),
};
