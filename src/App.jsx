import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/Header.jsx'
import Main from './assets/Main'

function App() {
  const[dark, setDark] = useState(false)
  const bg = {
    backgroundColor: dark ? '#282D35' : 'white'
}
  function mode() {
    setDark(prev => !prev)
}
  return (
    <div style={bg} className="App">
      <Header mode={dark} setMode={mode}/>
      <Main mode={dark}/>
    </div>
    
  )
}

export default App
