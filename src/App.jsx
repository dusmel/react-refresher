import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderModal from './components/RenderModal'
import TestErrorProtected from './components/Test'
import { SomeContext } from './helpers/someContext'
import RenderContextData from './components/RenderContextData'
import UseReducer from './components/Hooks/useReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* React refresher */}

      <TestErrorProtected shouldThrowError  />

      <RenderModal />

      <SomeContext.Provider value={[count, setCount]}>
        <RenderContextData />
      </SomeContext.Provider>

      {/* - Hooks */}

      <UseReducer />
    </>
  )
}

export default App
