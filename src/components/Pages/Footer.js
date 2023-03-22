import '../../styles/components/Pages/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer-text'>Made with ♥ by <Link to='https://github.com/ErriGarcia' className='footer-text-link'>ErriGarcia</Link></p>
        </footer>
    )
}

export default Footer