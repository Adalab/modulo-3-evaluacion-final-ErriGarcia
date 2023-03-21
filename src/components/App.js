import { useState, useEffect } from 'react'
import callToApi from '../services/api'
import '../styles/App.scss'
import CharacterList from './List/CharacterList'
import Filters from './Filters/Filters'
import { Route, Routes, useLocation, matchPath } from 'react-router'
import CharacterDetail from './CharacterDetail'



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


  // filtered characters by name
  const filteredCharacters = characters
    .filter(eachCharacter => {
      return eachCharacter.name.toLowerCase().includes(nameFilter.toLowerCase())
    })


  // function to set name searched by user
  const handleInputName = (value) => {
    setNameFilter(value)
  }


  // function to set house searched by user
  const handleSelectHouse = (value) => {
    setHouseFilter(value)
  }

  // useLocation
  const { pathname } = useLocation()
  console.log(pathname, 'pathname')

  const routeData = matchPath('/character/:characterId', pathname)

  console.log(routeData, 'routeData')
  const characterId = routeData !== null ? routeData.params.characterId : ''
  const foundCharacter = characters.find(eachCharacter => {
    return eachCharacter.id === parseInt(characterId)
  })

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' 
            element={
              <>
                <Filters
                handleInputName={handleInputName}
                nameFilter={nameFilter}
                handleSelectHouse={handleSelectHouse}
                houseFilter={houseFilter}>
                </Filters>
                <CharacterList 
                filteredCharacters={filteredCharacters}>
                </CharacterList>
              </>
            }>
          </Route>
          <Route path='/character/:characterId' 
            element={
            <CharacterDetail 
              foundCharacter={foundCharacter}>
            </CharacterDetail>}>
            </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App;
