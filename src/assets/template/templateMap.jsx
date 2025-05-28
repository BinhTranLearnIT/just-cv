import { London, Paris, Toronto } from "../constants/constants";
import React, { lazy, forwardRef } from "react";

const LazyTemplate01 = lazy(() => import("./Template01/Template01"));
const LazyTemplate02 = lazy(() => import("./Template02/Template02"));
const LazyTemplate03 = lazy(() => import("./Template03/Template03"));
export const Templates = {
  [Toronto]: LazyTemplate01,
  [Paris]: LazyTemplate02,
  [London]: LazyTemplate03,
};
