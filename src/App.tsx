import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components'
import { Library, Maihime, ComingSoon } from './pages'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/maihime" element={<Maihime />} />
        <Route path="/:bookId" element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
