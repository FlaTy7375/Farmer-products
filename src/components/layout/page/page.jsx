import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function Page() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Page;
