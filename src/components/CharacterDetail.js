const CharacterDetail = ({foundCharacter}) => {
    return (
        <>
            <p>{foundCharacter.name}</p>
            <img src={foundCharacter.image} alt="harry potter"></img>
        </>
    )
}

export default CharacterDetail