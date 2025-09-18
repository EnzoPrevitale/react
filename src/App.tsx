import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cor, setCor] = useState("white");

  return (
    <>
      <div>
      <button className={cor} onClick={() => {cor == "white" ? setCor("pink") : setCor("white")}}>Botão</button>
      </div>
    </>
  )
}

export default App
