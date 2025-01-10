import { Link } from "react-router-dom";

function Footer () {
    return <>
        <footer className="bg-secondary py-5">
            <div className="container">
                <Link to="/">Torna alla Home</Link>
            </div>
        </footer>
    </>
}

export default Footer;