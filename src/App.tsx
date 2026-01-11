import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components'
import { Library, Maihime, ComingSoon, NingenShikkaku, Faust, DivinaCommedia } from './pages'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/maihime" element={<Maihime />} />
        <Route path="/ningen" element={<NingenShikkaku />} />
        <Route path="/faust" element={<Faust />} />
        <Route path="/divina" element={<DivinaCommedia />} />
        <Route path="/:bookId" element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
