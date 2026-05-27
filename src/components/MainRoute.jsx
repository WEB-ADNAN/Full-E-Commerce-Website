import { Outlet } from "react-router";
import Footer from "./footer";
import Navbar from "./Navbar";

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