import { useRef } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import PaymensModel from "../Modals/PaymensModel";

const MainLayout = () => {
  const paymentModelRef = useRef();

  return (
    <div className=" overflow-hidden w-screen  h-screen">
      <PaymensModel ref={paymentModelRef} />
      <Header paymentModelRef={paymentModelRef} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
