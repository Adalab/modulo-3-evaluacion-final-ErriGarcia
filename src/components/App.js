import { useState, useEffect } from 'react'
import callToApi from '../services/api'
import '../styles/App.scss'
import CharacterList from './List/CharacterList'
import Filters from './Filters/Filters'


function App() {
  const [characters, setCharacters] = useState([])
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    callToApi().then((cleanData) => {
      setCharacters(cleanData)
    })
  }, [])

  const filteredCharacters = characters
    .filter(eachCharacter => {
      return eachCharacter.name.toLowerCase().includes(nameFilter.toLowerCase())
    })

  const handleInputName = (value) => {
    setNameFilter(value)
  }

  return (
    <div className="App">
      <main>
        <Filters
          handleInputName={handleInputName}
          nameFilter={nameFilter}
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
