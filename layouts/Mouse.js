"use client";
import { daltechutility } from "@/utility";
import { Fragment, useEffect } from "react";
const Mouse = () => {
  useEffect(() => {
    daltechutility.customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Mouse;
