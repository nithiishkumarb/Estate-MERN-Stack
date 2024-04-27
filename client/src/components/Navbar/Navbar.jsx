import {useState} from "react"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import menu from "../../assets/menu.png"
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src={logo} alt="logo"></img>
            <span>Estate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          <a href="/">Sign in</a>
          <a href="/" className="register">Sign up</a>
          <div className="menuIcon" onClick={()=>setOpen(!open)}>
            <img src={menu} alt="menu" style={{width:"32px",height:"32px"}}></img>
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar