import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "./Footer";
import Loader from "../components/Loader";
import Header from "../layout/Header"
import { useContext } from "react";
import GlobalContext from "../src/contexts/globalcontext";

function DefaultLayout() {

    const { isLoading }= useContext(GlobalContext)

    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        {isLoading && <Loader />}
    </>
}

export default DefaultLayout;