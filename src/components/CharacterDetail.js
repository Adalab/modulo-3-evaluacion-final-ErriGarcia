import { useParams } from 'react-router-dom'

const CharacterDetail = ({characters}) => {

    const { characterId } = useParams()
    const characterSelected = characters.find(eachCharacter => eachCharacter.id === characterId)
    return (
        <>
            <h2>{characterSelected.name}</h2>
        </>
    )
}

export default CharacterDetail