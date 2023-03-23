import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import '../styles/App.scss'
import callToApi from '../services/api'
import Header from './Pages/Header'
import Filters from './Filters/Filters'
import CharacterList from './List/CharacterList'
import CharacterDetail from './Pages/CharacterDetail'
import Footer from './Pages/Footer'
import Error404 from './Pages/Error404'


function App() {

  // state variables
  // * characters = all the characters received from api
  // * nameFilter = value of the input to search name characters
  // * houseFilter = value of the option selected to search by houses
  const [characters, setCharacters] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [houseFilter, setHouseFilter] = useState('Gryffindor')
  const [genderFilter, setGenderFilter] = useState('all')


  useEffect(() => {
    callToApi(houseFilter).then((cleanData) => {
      setCharacters(cleanData)
    })
  }, [houseFilter])


  // filtered characters by name and gender
  let filteredCharacters = characters
    .filter(eachCharacter => {
      return eachCharacter.name.toLowerCase().includes(nameFilter.toLowerCase())
    })
    // .sort((a, b) => a.name.localeCompare(b.name))
    .filter(eachCharacter => {
      return genderFilter === 'all' ? true : eachCharacter.gender === genderFilter
    })


  // function to set name searched by user
  const handleInputName = (value) => {
    setNameFilter(value)
  }


  // function to set house searched by user
  const handleSelectHouse = (value) => {
    setHouseFilter(value)
  }

  // function to set gender search by user
  const handleInputGender = (value) => {
    setGenderFilter(value)
  }

  // function to reset form
  const handleReset = () => {
    setNameFilter('')
    setHouseFilter('Gryffindor')
    setGenderFilter('all')
  }


  return (
    <div className='App'>
      <main className='App-main'>
        <Routes>
          <Route 
            path='/' 
            element={
              <>
                <Header></Header>

                <Filters
                  handleInputName={handleInputName}
                  nameFilter={nameFilter}
                  handleSelectHouse={handleSelectHouse}
                  houseFilter={houseFilter}
                  handleInputGender={handleInputGender}
                  genderFilter={genderFilter}
                  handleReset={handleReset}>
                </Filters>

                <CharacterList 
                  filteredCharacters={filteredCharacters}
                  nameFilter={nameFilter}>
                </CharacterList>
              </>
            }>
          </Route>
          <Route 
              path='/character/:characterId'
              element={
                <CharacterDetail characters={characters}>
                </CharacterDetail>
              }>
          </Route>
          <Route 
            path='*' 
            element={<Error404></Error404>}>
          </Route>
        </Routes>
        
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
