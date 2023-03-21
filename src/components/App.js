import { useState, useEffect } from 'react'
import callToApi from '../services/api'
import '../styles/App.scss'
import CharacterList from './CharacterList'
import Filters from './Filters'


function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    callToApi().then((cleanData) => {
      setCharacters(cleanData)
    })
  }, [])

  return (
    <div className="App">
      <Filters></Filters>
      <CharacterList characters={characters}></CharacterList>
    </div>
  )
}

export default App;
