const CharacterCard = ({eachCharacter}) => {
    return (
        <dl>
            <img src={eachCharacter.image} alt={`character: ${eachCharacter.name}`} />
            <dt>
                {eachCharacter.name}
            </dt>
            <dd>
                {eachCharacter.specie}
            </dd>
        </dl>
    )
}

export default CharacterCard