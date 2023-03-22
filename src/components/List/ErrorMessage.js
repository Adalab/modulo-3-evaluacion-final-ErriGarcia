import { Link } from 'react-router-dom'
import '../../styles/components/List/ErrorMessage.scss'

const ErrorMessage = ({nameFilter}) => {
    return (
        <p className='error-message'>No hay ningún personaje que coincida con la palabra <span className='error-message-value'>{nameFilter}</span>. Por favor, intentalo otra vez.</p>
    )
}

export default ErrorMessage