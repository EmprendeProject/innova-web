import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Entradas from './pages/Entradas'
import Stands from './pages/Stands'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/stands" element={<Stands />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
