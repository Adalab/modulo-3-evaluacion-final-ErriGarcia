import '../../styles/components/List/CharacterList.scss'
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
        <section className='section-characters'>
            <ul className='section-characters-list'>
                {listCharacters}
            </ul>
        </section>
    )
}

export default CharacterList