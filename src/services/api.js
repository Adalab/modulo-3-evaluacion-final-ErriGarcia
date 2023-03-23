const callToApi = (houseFilter) => {
    const urlApi = `https://hp-api.onrender.com/api/characters/house/${houseFilter}`
    return fetch(urlApi)
        .then(response => response.json())
        .then(response => {
            const cleanData = response.map(eachCharacter => {
                return {
                    id: eachCharacter.id,
                    name: eachCharacter.name,
                    specie: eachCharacter.species,
                    gender: eachCharacter.gender,
                    house: eachCharacter.house,
                    alive: eachCharacter.alive,
                    ancestry: eachCharacter.ancestry,
                    image: eachCharacter.image,
                    actor: eachCharacter.actor,
                    dateOfBirth: eachCharacter.dateOfBirth
                }
            })
            return cleanData
        })
}

export default callToApi