
import { Outlet } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Footer from "../modules/core/components/Footer.jsx";
import Navbar from "../modules/core/system-component/Navbar.jsx";
import SliderBanner from "../modules/core/components/SliderBanner.jsx";

export function MainLayout() {
    return (
        <div className={"w-full"}>

            <Navbar />

      <div className={"mt-24"}>
        <div className={"w-full"}></div>
        <Outlet />
      </div>
      <SliderBanner />
      <ToastContainer />
      <Footer />
    </div>
  );
}
