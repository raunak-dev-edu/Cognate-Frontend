import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Signup from './Pages/Signup'
import HomePage from "./Pages/HomePage"
import Patients from "./Pages/Patients"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
