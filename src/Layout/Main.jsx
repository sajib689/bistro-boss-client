import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login')
    const noHeaderFooter2 = location.pathname.includes( '/signup')
    return (
        <div>
            { noHeaderFooter || noHeaderFooter2 || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || noHeaderFooter2 || <Footer></Footer> }
        </div>
    );
};

export default Main;