import ErrorMessage from './ErrorMessage'
import CharacterCard from './CharacterCard'

const CharacterList = ({filteredCharacters, nameFilter}) => {
    console.log(filteredCharacters, 'filteredCharacters')

    if(filteredCharacters.length === 0) {
        return <ErrorMessage nameFilter={nameFilter}></ErrorMessage>
    }

    const listCharacters = filteredCharacters.map
    (eachCharacter => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}></CharacterCard>
    })
    return (
        <section>
            <ul>
                {listCharacters}
            </ul>
        </section>
    )
}

export default CharacterList