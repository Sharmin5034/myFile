import { Outlet, useLocation } from "react-router-dom"
import Footer from "../pages/Shared/Footer"
import NavBar from "../pages/Shared/NavBer/NavBer"

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')|| location.pathname.includes('signUp')
    return (
        <div>
        {noHeaderFooter || <NavBar />}
            <Outlet />
           {noHeaderFooter || <Footer />}
        </div>
    )
}
export default Main