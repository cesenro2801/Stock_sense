import { useState } from 'react'
import './App.css'
import { MyRoutes } from "./index";
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </>
  )
}

export default App
