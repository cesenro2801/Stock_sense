import { useState } from 'react'
import './App.css'
import {} from "./index";
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuthContextProvider>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </AuthContextProvider>
    </>
  )
}

export default App
