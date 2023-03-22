import '../../styles/components/Pages/CharacterDetail.scss'
import { Link, useParams } from 'react-router-dom'
import alive from '../../images/alive.svg'
import dead from '../../images/dead.svg'
import male from '../../images/male.svg'
import female from '../../images/female.svg'
import arrowback from '../../images/arrow-back.svg'



const CharacterDetail = ({characters}) => {

    const { characterId } = useParams()
    const characterSelected = characters.find(eachCharacter => eachCharacter.id === characterId)
    console.log(characterSelected)

    if(characterSelected !== undefined) {
        return (
            <section className='section-character-detail'>
                <Link to='/' className='section-character-detail-link'>
                    <img className='section-character-detail-link-button' src={arrowback}></img>
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
                                {characterSelected.alive === true ? <img src={alive} className='section-character-detail-character-container-descritpion-span-alive'></img> : <img src={dead} className='section-character-detail-character-container-descritpion-span-dead'></img>}
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
                                {characterSelected.gender === 'male' ? <img src={male}></img> : <img src={female}></img>}
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
                            <span className='section-character-detail-character-container-descritpion-span'>
                                {characterSelected.house}
                            </span>
                        </p>
                    </div>
                </article>
           </section>
        )
    }
}

export default CharacterDetail