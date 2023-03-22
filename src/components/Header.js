import { Link } from 'react-router-dom'
import logo from '../images/Harry_Potter_wordmark 2.png'
const Header = () => {
    return (
        <nav>
            <Link to="/">
                <img src={logo}></img>
            </Link>
        </nav>
    )
}

export default Header