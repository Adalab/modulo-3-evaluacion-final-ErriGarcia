const CharacterCard = ({eachCharacter}) => {

    {/* Ternary operator eachCharacter.image !== null ? eachCharacter.image : https://via.placeholder.com/210x295/ffffff/666666/?text={eachCharacter.name}  */ }
    return (
        <dl>
            <img 
            src={eachCharacter.image !== "" ? eachCharacter.image : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${eachCharacter.name}`} 
            alt={`character: ${eachCharacter.name}`}
            />
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