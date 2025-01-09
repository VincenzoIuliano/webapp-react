import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <li>
                <NavLink to="/">
                    Homepage
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact">
                    Contatti
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    About
                </NavLink>
            </li>
        </nav>
    )
}

export default Nav;