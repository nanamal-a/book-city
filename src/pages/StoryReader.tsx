import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { StoryData, Section } from '../data/storyTypes'

interface StoryReaderProps {
  storyData: StoryData
}

// Parse dialogue content with **人物** markers
function parseDialogueContent(content: string) {
  const parts: { type: 'speaker' | 'text' | 'stage-direction'; content: string }[] = []
  const lines = content.split('\n')

  for (const line of lines) {
    const speakerMatch = line.match(/^\*\*([^*]+)\*\*$/)
    if (speakerMatch) {
      parts.push({ type: 'speaker', content: speakerMatch[1] })
    } else if (line.startsWith('登場人物：') || line.startsWith('場所：')) {
      parts.push({ type: 'stage-direction', content: line })
    } else if (line.trim()) {
      parts.push({ type: 'text', content: line })
    }
  }

  return parts
}

// Collapsible Section component
function CollapsibleSection({
  section,
  activeChapter,
  onChapterClick,
  defaultOpen = false
}: {
  section: Section
  activeChapter: string
  onChapterClick: (id: string) => void
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const hasActiveChapter = section.chapters.some(c => c.id === activeChapter)

  // Auto-open if active chapter is in this section
  useEffect(() => {
    if (hasActiveChapter && !isOpen) {
      setIsOpen(true)
    }
  }, [hasActiveChapter])

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
          hasActiveChapter
            ? 'bg-gold/10 text-gold'
            : 'bg-ink/5 text-ink/80 hover:bg-ink/10'
        }`}
      >
        <span>{section.title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul className="mt-1 ml-2 space-y-0.5">
          {section.chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                onClick={() => onChapterClick(chapter.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                  activeChapter === chapter.id
                    ? 'bg-gold/20 text-gold font-medium'
                    : 'hover:bg-ink/5 text-ink/60'
                }`}
              >
                {chapter.title.replace(section.title + ' ', '')}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function StoryReader({ storyData }: StoryReaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showExitModal, setShowExitModal] = useState(false)
  const [activeChapter, setActiveChapter] = useState<string>(storyData.chapters[0]?.id || '')
  const chapterRefs = useRef<Record<string, HTMLElement | null>>({})
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (const chapter of storyData.chapters) {
        const element = chapterRefs.current[chapter.id]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveChapter(chapter.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [storyData.chapters])

  const scrollToChapter = (chapterId: string) => {
    const element = chapterRefs.current[chapterId]
    if (element) {
      const offset = 100
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
    setIsSidebarOpen(false)
  }

  const handleExit = () => {
    setShowExitModal(true)
    setIsSidebarOpen(false)
  }

  const confirmExit = () => {
    navigate(storyData.backPath)
  }

  // Render content based on type
  const renderContent = (content: string) => {
    if (storyData.isDialogue) {
      const parts = parseDialogueContent(content)
      return (
        <div className="space-y-4">
          {parts.map((part, index) => {
            if (part.type === 'speaker') {
              return (
                <div key={index} className="mt-8 mb-4">
                  <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold font-medium rounded-full text-sm">
                    {part.content}
                  </span>
                </div>
              )
            } else if (part.type === 'stage-direction') {
              return (
                <p key={index} className="text-ink/50 text-sm italic pl-4 border-l-2 border-ink/20">
                  {part.content}
                </p>
              )
            } else {
              return (
                <p key={index} className="text-ink/80 leading-loose pl-4">
                  {part.content}
                </p>
              )
            }
          })}
        </div>
      )
    }

    // Regular content
    return (
      <div className="prose prose-lg max-w-none">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-ink/80 leading-loose text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper text-ink font-serif-jp">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-paper/95 backdrop-blur border-b border-ink/10 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-mincho text-lg truncate">{storyData.bookTitle}</h1>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-ink/5 rounded-lg transition-colors"
            aria-label="目次を開く"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-paper shadow-2xl z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-ink/10 flex items-center justify-between">
            <h2 className="font-mincho text-xl">目次</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-ink/5 rounded-lg transition-colors"
              aria-label="閉じる"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            {storyData.sections && storyData.sections.length > 0 ? (
              // Render collapsible sections
              <div className="space-y-1">
                {storyData.sections.map((section, index) => (
                  <CollapsibleSection
                    key={section.id}
                    section={section}
                    activeChapter={activeChapter}
                    onChapterClick={scrollToChapter}
                    defaultOpen={index === 0}
                  />
                ))}
              </div>
            ) : (
              // Flat list
              <ul className="space-y-1">
                {storyData.chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <button
                      onClick={() => scrollToChapter(chapter.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                        activeChapter === chapter.id
                          ? 'bg-gold/20 text-gold font-medium'
                          : 'hover:bg-ink/5 text-ink/70'
                      }`}
                    >
                      {chapter.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </nav>

          <div className="p-4 border-t border-ink/10">
            <button
              onClick={handleExit}
              className="w-full px-4 py-3 border border-ink/20 rounded-lg text-ink/70 hover:bg-ink/5 transition-colors text-sm"
            >
              感想ページに戻る
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {storyData.chapters.map((chapter) => (
            <section
              key={chapter.id}
              id={chapter.id}
              ref={(el) => { chapterRefs.current[chapter.id] = el }}
              className="mb-16"
            >
              <h2 className="font-mincho text-2xl md:text-3xl mb-8 pb-4 border-b border-ink/20">
                {chapter.title}
              </h2>
              {renderContent(chapter.content)}
            </section>
          ))}
        </div>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gold text-white rounded-full shadow-lg hover:bg-amber-600 transition-colors flex items-center justify-center z-30"
        aria-label="ページトップへ"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowExitModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-11/12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <h3 className="font-mincho text-xl text-ink mb-2">
                感想ページへ戻ります
              </h3>
              <p className="text-ink/60 text-sm mb-6">よろしいですか？</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowExitModal(false)}
                  className="flex-1 px-6 py-3 border border-ink/20 text-ink rounded-full font-medium hover:bg-ink/5 transition-colors"
                >
                  キャンセル
                </button>
                <button
                  onClick={confirmExit}
                  className="flex-1 px-6 py-3 bg-gold text-white rounded-full font-medium hover:bg-amber-600 transition-colors"
                >
                  戻る
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
