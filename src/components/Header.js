import { Link } from 'react-router-dom'
import logo from '../images/Harry_Potter_wordmark 2.png'
import '../styles/components/Pages/Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header-nav-header'>
                <Link to='/' className='header-nav-header-link'>
                    <img src={logo} className='header-nav-header-link-image'></img>
                </Link>
            </nav>
            <h1 className='header-title'>
                Busca tu <span className='header-title-span'>personaje</span> de la serie de novelas fántasticas más famosa del mundo
            </h1>
        </header>
    )
}

export default Header