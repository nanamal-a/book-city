import { useState, useEffect } from 'react'

interface BackToTopProps {
  targetRef?: React.RefObject<HTMLElement>
}

export function BackToTop({ targetRef }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const checkVisibility = () => {
      if (targetRef?.current) {
        const rect = targetRef.current.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.8)
      } else {
        setIsVisible(window.scrollY > 300)
      }
    }

    window.addEventListener('scroll', checkVisibility)
    checkVisibility()
    return () => window.removeEventListener('scroll', checkVisibility)
  }, [targetRef])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setShowModal(false)
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gold text-white rounded-full shadow-lg transition-all duration-300 hover:bg-amber-600 flex items-center justify-center z-40 ${
          isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="ページトップへ戻る"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-11/12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <h3 className="font-mincho text-xl text-ink mb-2">
                ページのTOPへ戻ります
              </h3>
              <p className="text-ink/60 text-sm mb-6">よろしいですか？</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-ink/20 text-ink rounded-full font-medium hover:bg-ink/5 transition-colors whitespace-nowrap"
                >
                  キャンセル
                </button>
                <button
                  onClick={scrollToTop}
                  className="flex-1 px-6 py-3 bg-gold text-white rounded-full font-medium hover:bg-amber-600 transition-colors whitespace-nowrap"
                >
                  戻る
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
