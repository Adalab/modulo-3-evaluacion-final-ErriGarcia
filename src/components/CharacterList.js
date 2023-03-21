import CharacterCard from "./CharacterCard"

const CharacterList = ({characters}) => {
    const listCharacters = characters.map(eachCharacter => {
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