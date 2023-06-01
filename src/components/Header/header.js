import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <div className="header">
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
     </nav>
     </div>
    )
}

export default Header;