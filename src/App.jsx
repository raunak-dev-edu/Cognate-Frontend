import { BrowserRouter } from "react-router-dom"
import HomePage from "./Components/HomePage"

function App() {
  return (
      <div className="app">
        <BrowserRouter>
          <HomePage/>
        </BrowserRouter>
      </div>
  )
}

export default App
