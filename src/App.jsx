import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/Header.jsx'
import Main from './assets/Main'
import setRootColor from './set_bg'

function App() {
  const[dark, setDark] = useState(false)
  const bg = {
    backgroundColor: dark ? '#282D35' : 'white',
    boxShadow: dark ? '' : '0px 0px 70px 20px #19a5be'
}
  dark ? setRootColor({color: '#E5E5E5'}) : setRootColor({color: '#21222a'}) 
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
