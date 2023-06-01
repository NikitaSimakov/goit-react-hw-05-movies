import { NavLink } from "react-router-dom";
import css from './header.module.css'
const Header = () => {
    return (
    <div className={css.header_wrapper}>
    <nav className={css.nav}>
        <NavLink className={css.header_home} to="/">Home</NavLink>
        <NavLink className={css.header_movies} to="/movies">Movies</NavLink>
     </nav>
     </div>
    )
}

export default Header;