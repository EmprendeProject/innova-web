import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Entradas from './pages/Entradas'
import Stands from './pages/Stands'
import Stands2 from './pages/Stands2'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/stands" element={<Stands />} />
        <Route path="/stands2" element={<Stands2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
