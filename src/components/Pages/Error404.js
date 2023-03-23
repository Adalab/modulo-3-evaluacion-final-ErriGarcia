import '../../styles/components/Pages/Error404.scss'
import error from '../../images/images/error-message.png'
import { Link } from 'react-router-dom'

const Error404 = () => {
    
    return (
        <section className='section-error-404'>
            <img className='section-error-404-image' src={error} alt="error-harry-potter" />
            <h1 className='section-error-404-title'>
                ¡Vaya... He perdido la varita mágica!
            </h1>
            <p className='section-error-404-text'>
                Error 404: Lo sentimos, no hemos podido encontrar la página que buscas
            </p>
            <p className='section-error-404-paragraph'>Volver a la página inicial:</p>
            <Link className='section-error-404-link' to='/'>Inicio</Link>
        </section>
    )
}

export default Error404