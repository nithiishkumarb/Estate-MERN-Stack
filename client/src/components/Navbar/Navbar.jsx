import "./navbar.scss"
import estate_logo from "../../assets/estate_logo.png"
const Navbar = () => {
  return (
    <nav>
        <div className="left">
        <a href="/" className="logo">
          <img src={estate_logo} alt="logo" style={{width:"75px",height:"75px"}}></img>
          <span>Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        left</div>
        <div className="right">
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
    </nav>
  )
}

export default Navbar