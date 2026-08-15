import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Entradas from './pages/Entradas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entradas" element={<Entradas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
