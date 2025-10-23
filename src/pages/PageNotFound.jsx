import React from "react";
import { useTitle } from "../hooks/useTitle";

const PageNotFound = () => {
  useTitle("Page not Found | GameHub");

  return <div>404 page not found</div>;
};

export default PageNotFound;
