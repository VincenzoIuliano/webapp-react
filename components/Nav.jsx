import { Navlink } from 'react-router-dom'

function Nav() {
    return 
    <nav>
        <li>
            <Navlink to="/">
                Homepage
            </Navlink>
        </li>
        <li>
            <Navlink to="/contact">
                Contatti
            </Navlink>
        </li>
        <li>
            <Navlink to="/about">
                About
            </Navlink>
        </li>
    </nav>
}

export default Nav;