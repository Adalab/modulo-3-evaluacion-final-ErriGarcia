import { useState, useEffect } from 'react'
import callToApi from '../services/api'
import '../styles/App.scss'
import CharacterList from './List/CharacterList'
import Filters from './Filters/Filters'


function App() {

  // state variables
  // * characters = all the characters received from api
  // * nameFilter = value of the input to search name characters
  // * houseFilter = value of the option selected to search by houses
  const [characters, setCharacters] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [houseFilter, setHouseFilter] = useState('Gryffindor')


  // useEffect
  useEffect(() => {
    callToApi(houseFilter).then((cleanData) => {
      setCharacters(cleanData)
    })
  }, [houseFilter])


  const filteredCharacters = characters
    .filter(eachCharacter => {
      return eachCharacter.name.toLowerCase().includes(nameFilter.toLowerCase())
    })

  const handleInputName = (value) => {
    setNameFilter(value)
  }

  const handleSelectHouse = (value) => {
    setHouseFilter(value)
  }

  return (
    <div className="App">
      <main>
        <Filters
          handleInputName={handleInputName}
          nameFilter={nameFilter}
          handleSelectHouse={handleSelectHouse}
          houseFilter={houseFilter}
        >
        </Filters>
        <CharacterList 
          filteredCharacters={filteredCharacters}
        >
        </CharacterList>
      </main>
    </div>
  )
}

export default App;
