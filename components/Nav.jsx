import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className='d-flex justify-content-end container-xxl gap-3'>
            <li>
                <NavLink className='p-2' to="/">
                    Homepage
                </NavLink>
            </li>
            <li>
                <NavLink className='p-2' to="/contact">
                    Contatti
                </NavLink>
            </li>
            <li>
                <NavLink className='p-2' to="/about">
                    About
                </NavLink>
            </li>
        </nav>
    )
}

export default Nav;