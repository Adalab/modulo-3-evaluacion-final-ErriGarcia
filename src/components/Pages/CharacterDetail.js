import { Link, useParams } from 'react-router-dom'
import '../../styles/components/Pages/CharacterDetail.scss'
import Error404 from './Error404'
import Loading from './Loading'
import alive from '../../images/icons/alive.svg'
import dead from '../../images/icons/dead.svg'
import male from '../../images/icons/male.svg'
import female from '../../images/icons/female.svg'
import arrowback from '../../images/icons/arrow-back.svg'
import gryffindor from '../../images/images/gryffindor.png'
import ravenclaw from '../../images/images/ravenclaw.png'
import slytherin from '../../images/images/slytherin.png'
import hufflepuff from '../../images/images/hufflepuff.png'


const CharacterDetail = ({characters}) => {
    const { characterId } = useParams()
    const characterSelected = characters.find(eachCharacter => eachCharacter.id === characterId)

    if(characters.length === 0) {
        return <Loading></Loading>
    }

    if(!characterSelected) {
     return <Error404></Error404>
    }

    const characterSelectedHouseImage = () => {
        if (characterSelected.house === 'Gryffindor') {
            return gryffindor
        }
        if (characterSelected.house === 'Ravenclaw') {
            return ravenclaw
        }
        if (characterSelected.house === 'Slytherin') {
            return slytherin
        }
        if (characterSelected.house === 'Hufflepuff') {
            return hufflepuff
        }
    }

    return (
        <section className='section-character-detail'>
            <Link to='/' className='section-character-detail-link'>
                <img className='section-character-detail-link-image' src={arrowback} alt='arrow-back'></img>
            </Link>
            <article className='section-character-detail-character'>
                <img 
                src={characterSelected.image !== '' ? characterSelected.image : `https://via.placeholder.com/250x320/FFFFFF/666666/?text=${characterSelected.name}`} 
                alt={`character: ${characterSelected.name}`}
                className='section-character-detail-character-image'>
                </img>
                <div className='section-character-detail-character-container'>
                    <h2 className='section-character-detail-character-container-name'>{characterSelected.name}</h2>
                    <p className='section-character-detail-character-container-descritpion'>
                        Estatus: &nbsp;
                        <span className='section-character-detail-character-container-descritpion-span'>
                            {characterSelected.alive === true ? <img src={alive} alt='alive' className='section-character-detail-character-container-descritpion-span-alive'></img> : <img src={dead} alt='dead' className='section-character-detail-character-container-descritpion-span-dead'></img>}
                        </span>
                    </p>
                    <p className='section-character-detail-character-container-descritpion'>
                        Especie: &nbsp;
                        <span className='section-character-detail-character-container-descritpion-span'>
                            {characterSelected.specie}
                        </span>
                    </p>
                    <p className='section-character-detail-character-container-descritpion'>
                        Genero: &nbsp;
                        <span className='section-character-detail-character-container-descritpion-span'>
                            {characterSelected.gender === 'male' ? <img src={male} alt='male icon'></img> : <img src={female} alt='female icon'></img>}
                        </span>
                    </p>
                    <p className='section-character-detail-character-container-descritpion'>
                        Origen: &nbsp;
                        <span className='section-character-detail-character-container-descritpion-span'>
                            {characterSelected.ancestry}
                        </span>
                    </p>
                    <p className='section-character-detail-character-container-descritpion'>
                        Casa: &nbsp;
                        <Link to='https://harrypotter.fandom.com/wiki/Hogwarts_Houses' target='_blank'>
                            <img className='section-character-detail-character-container-descritpion-image' src={characterSelectedHouseImage()} alt={`${characterSelected.name} house`}>
                        </img>
                        </Link>
                    </p>
                    <p className='section-character-detail-character-container-descritpion'>
                        Actor: &nbsp;
                        <span className='section-character-detail-character-container-descritpion-span'>
                            {characterSelected.actor}
                        </span>
                    </p>
                </div>
            </article>
        </section>
    )
}

export default CharacterDetail