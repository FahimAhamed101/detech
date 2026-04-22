"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import { daltechutility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children, header, footer, single }) => {
  useEffect(() => {
    daltechutility.scrollAnimation();
  }, []);

  return (
    <Fragment>
      <ImageView />
      <EmbedPopup />
      <Header header={header} single={single} />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default Layout;
