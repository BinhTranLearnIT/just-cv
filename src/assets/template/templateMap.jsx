import { Paris, Toronto } from "../constants/constants";
import React, { lazy, forwardRef } from "react";

const LazyTemplate01 = lazy(() => import("./Template01/Template01"));
const LazyTemplate02 = lazy(() => import("./Template02/Template02"));

export const Templates = {
  [Toronto]: LazyTemplate01,
  [Paris]: LazyTemplate02,
};
