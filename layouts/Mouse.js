"use client";
import { tomtechUtility } from "@/utility";
import { Fragment, useEffect } from "react";
const Mouse = () => {
  useEffect(() => {
    tomtechUtility.customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Mouse;
