import { useState, useEffect } from 'react'
import callToApi from '../services/api'
import '../styles/App.scss'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    callToApi().then((cleanData) => {
      setData(cleanData)
    })
  }, [])

  return (
    <div className="App">
    
    </div>
  )
}

export default App;
