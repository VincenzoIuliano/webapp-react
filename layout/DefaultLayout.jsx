import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "./Footer";
import Header from "./Header";

function DefaultLayout() {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}

export default DefaultLayout;