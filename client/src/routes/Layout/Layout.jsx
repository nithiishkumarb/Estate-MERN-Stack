import Navbar from "../../components/Navbar/Navbar";
import Home from "../../routes/Home/Home";
import "./Layout.scss"
const Layout = () => {
    return (
        <div className='layout'>
            <div className='navbar'>
                <Navbar/>
            </div>
            <div className='content'>
                <Home/>
            </div>
        </div>
    )
}

export default Layout