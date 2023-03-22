import { Link, useParams } from 'react-router-dom'

const CharacterDetail = ({characters}) => {

    const { characterId } = useParams()
    const characterSelected = characters.find(eachCharacter => eachCharacter.id === characterId)
    console.log(characterSelected)
    return (
        <section>
            <Link to='/'>
                <button>Volver</button>
            </Link>
            <article>
                <img 
                src={characterSelected.image !== '' ? characterSelected.image : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${characterSelected.name}`} 
                alt={`character: ${characterSelected.name}`}>
                </img>
                <div>
                    <h2>{characterSelected.name}</h2>
                    <p>
                        Estatus: &nbsp;
                        <span>
                            {characterSelected.alive === true ? 'vivo' : 'muerto'}
                        </span>
                    </p>
                    <p>
                        Especie: &nbsp;
                        <span>
                            {characterSelected.specie}
                        </span>
                    </p>
                    <p>
                        Genero: &nbsp;
                        <span>
                            {characterSelected.gender === 'male' ? 'hombre' : 'mujer'}
                        </span>
                    </p>
                    <p>
                        Origen: &nbsp;
                        <span>
                            {characterSelected.ancestry}
                        </span>
                    </p>
                    <p>
                        Casa: &nbsp;
                        <span>
                            {characterSelected.house}
                        </span>
                    </p>
                </div>
            </article>
       </section>
    )
}

export default CharacterDetail