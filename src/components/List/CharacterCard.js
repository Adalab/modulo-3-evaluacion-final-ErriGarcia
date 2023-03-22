import '../../styles/components/List/CharacterCard.scss'
import { Link } from 'react-router-dom'

const CharacterCard = ({eachCharacter}) => {

    return (
        <figure className='list-character'>
            <Link to={`/character/${eachCharacter.id}`} className='list-character-link'>
                <img 
                src={eachCharacter.image !== '' ? eachCharacter.image : `https://via.placeholder.com/250x320/FFFFFF/666666/?text=${eachCharacter.name}`} 
                alt={`character: ${eachCharacter.name}`} className='list-character-link-image'
                />
                <figcaption className='list-character-link-container'>
                    <dt className='list-character-link-container-name'>
                        {eachCharacter.name}
                    </dt>
                    <dd className='list-character-link-container-specie'>
                        {eachCharacter.specie}
                    </dd>
                </figcaption>
            </Link>
        </figure>
    )
}

export default CharacterCard