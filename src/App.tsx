import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Entradas from './pages/Entradas'
import Entradas2 from './pages/Entradas2'
import Stands from './pages/Stands'
import Stands2 from './pages/Stands2'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entradas" element={<Entradas2 />} />
        <Route path="/stands" element={<Stands2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
