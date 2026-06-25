import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainRoute(){
    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default MainRoute