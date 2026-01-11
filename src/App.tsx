import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components'
import {
  Library,
  Maihime,
  ComingSoon,
  NingenShikkaku,
  Faust,
  DivinaCommedia,
  NingenStoryPage,
  FaustStoryPage,
  DivinaStoryPage,
  MaihimeStoryPage,
} from './pages'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/maihime" element={<Maihime />} />
        <Route path="/maihime/story" element={<MaihimeStoryPage />} />
        <Route path="/ningen-shikkaku" element={<NingenShikkaku />} />
        <Route path="/ningen-shikkaku/story" element={<NingenStoryPage />} />
        <Route path="/faust" element={<Faust />} />
        <Route path="/faust/story" element={<FaustStoryPage />} />
        <Route path="/divina-commedia" element={<DivinaCommedia />} />
        <Route path="/divina-commedia/story" element={<DivinaStoryPage />} />
        <Route path="/:bookId" element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
