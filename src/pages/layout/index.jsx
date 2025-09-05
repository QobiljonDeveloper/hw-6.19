import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* content area ekranni to‘ldirish uchun flex-grow */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
