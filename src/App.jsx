import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RenderModal from "./components/RenderModal";
import TestErrorProtected from "./components/Test";
import { SomeContext } from "./helpers/someContext";
import RenderContextData from "./components/RenderContextData";
import UseReducer from "./components/Hooks/useReducer";
import UseMemo from "./components/Hooks/useMemo";
import UseCallback from "./components/Hooks/useCallback";

function App() {
  const [count, setCount] = useState(0);

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
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      {/* React refresher */}

      <p>Error boundary</p>
      <TestErrorProtected shouldThrowError />
      <hr />

      <p>Modal with Create Portal</p>
      <RenderModal />
      <hr />

      <p>Context</p>
      <SomeContext.Provider value={[count, setCount]}>
        <RenderContextData />
      </SomeContext.Provider>

      <br />
      <hr />
      <strong>============== Hooks ==================</strong>
      <hr />

      <p>use Reducer</p>
      <UseReducer />
      <hr />

      <p>use Memo</p>
      <UseMemo />
      <hr />

      <p>use Callback</p>
      <UseCallback />
    </>
  );
}

export default App;
