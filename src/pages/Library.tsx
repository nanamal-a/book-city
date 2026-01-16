import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookItem, Modal } from '../components'
import { books, type Book } from '../data/books'
import { hasBookmark } from '../utils/bookmark'

type SortType = 'number' | 'title' | 'year'
type SortOrder = 'asc' | 'desc'

export function Library() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortType, setSortType] = useState<SortType>('number')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const navigate = useNavigate()

  const filteredAndSortedBooks = useMemo(() => {
    let result = [...books]

    // Filter by search query (prefix match only)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter((book) => {
        // タイトル: 漢字/ひらがな/ローマ字の先頭一致
        const titleMatch =
          book.title.toLowerCase().startsWith(query) ||
          book.reading.title.hiragana.startsWith(query) ||
          book.reading.title.romaji.startsWith(query)

        // 著者: 漢字/ひらがな/ローマ字の先頭一致
        const authorMatch =
          book.author.toLowerCase().startsWith(query) ||
          book.reading.author.hiragana.startsWith(query) ||
          book.reading.author.romaji.startsWith(query)

        // サブタイトル: 漢字/ひらがな/ローマ字の先頭一致
        const subtitleMatch = book.subtitle
          ? book.subtitle.toLowerCase().startsWith(query) ||
            (book.reading.subtitle?.hiragana.startsWith(query) ?? false) ||
            (book.reading.subtitle?.romaji.startsWith(query) ?? false)
          : false

        return titleMatch || authorMatch || subtitleMatch
      })
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0
      if (sortType === 'number') {
        comparison = parseInt(a.number) - parseInt(b.number)
      } else if (sortType === 'year') {
        comparison = parseInt(a.year) - parseInt(b.year)
      } else {
        comparison = a.title.localeCompare(b.title, 'ja')
      }
      return sortOrder === 'asc' ? comparison : -comparison
    })

    return result
  }, [searchQuery, sortType, sortOrder])

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <div className="bg-stone-950 text-amber-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="hero-image absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-transparent to-stone-950/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-amber-200/50 text-sm tracking-[0.3em] uppercase mb-4">
            Book Reviews
          </p>
          <h1 className="text-5xl md:text-7xl text-amber-100/90 tracking-wider mb-6 font-mincho">
            Library
          </h1>
          <p className="text-amber-200/60 text-sm max-w-md leading-relaxed">
            時を越えて読み継がれる古典たち。
            <br />
            百年の時を経てなお、心を揺さぶる物語。
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-amber-200/30 text-xs tracking-widest">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-amber-200/30 to-transparent" />
        </div>
      </section>

      {/* Book List */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        {/* Search and Sort Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-200/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="タイトル・著者名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-amber-200/5 border border-amber-200/20 rounded-lg text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-200/40 transition-colors"
            />
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-3">
            <span className="text-amber-200/40 text-sm">並び替え:</span>

            {/* Mobile: Dropdown */}
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value as SortType)}
              className="sm:hidden px-4 py-2 bg-amber-200/5 border border-amber-200/20 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-200/40 transition-colors"
            >
              <option value="number" className="bg-stone-900 text-amber-100">No順</option>
              <option value="title" className="bg-stone-900 text-amber-100">タイトル順</option>
              <option value="year" className="bg-stone-900 text-amber-100">年代順</option>
            </select>

            {/* Desktop: Buttons */}
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => setSortType('number')}
                className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                  sortType === 'number'
                    ? 'bg-amber-200/20 border-amber-200/40 text-amber-100'
                    : 'bg-transparent border-amber-200/20 text-amber-200/50 hover:border-amber-200/30'
                }`}
              >
                No順
              </button>
              <button
                onClick={() => setSortType('title')}
                className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                  sortType === 'title'
                    ? 'bg-amber-200/20 border-amber-200/40 text-amber-100'
                    : 'bg-transparent border-amber-200/20 text-amber-200/50 hover:border-amber-200/30'
                }`}
              >
                タイトル順
              </button>
              <button
                onClick={() => setSortType('year')}
                className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                  sortType === 'year'
                    ? 'bg-amber-200/20 border-amber-200/40 text-amber-100'
                    : 'bg-transparent border-amber-200/20 text-amber-200/50 hover:border-amber-200/30'
                }`}
              >
                年代順
              </button>
            </div>

            <button
              onClick={toggleSortOrder}
              className="ml-auto flex items-center gap-1 px-3 py-2 text-sm text-amber-200/50 hover:text-amber-200/80 transition-colors"
              title={sortOrder === 'asc' ? '昇順' : '降順'}
            >
              <svg
                className={`w-4 h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span>{sortOrder === 'asc' ? '昇順' : '降順'}</span>
            </button>
          </div>
        </div>

        {/* Book List */}
        <div className="space-y-4">
          {filteredAndSortedBooks.length > 0 ? (
            filteredAndSortedBooks.map((book) => (
              <BookItem
                key={book.id}
                book={book}
                onClick={() => setSelectedBook(book)}
                hasBookmark={hasBookmark(book.id)}
                onBookmarkClick={() => navigate(`${book.path}/story`)}
              />
            ))
          ) : (
            <div className="text-center py-12 text-amber-200/40">
              <p>該当する本が見つかりませんでした</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-amber-200/10">
        <p className="text-amber-200/20 text-xs tracking-widest">
          — and the story continues —
        </p>
      </footer>

      {/* Book Modal */}
      <Modal isOpen={!!selectedBook} onClose={() => setSelectedBook(null)}>
        {selectedBook && (
          <div className="text-center">
            <p className="text-amber-200/40 text-xs tracking-widest mb-4">
              {selectedBook.year}
            </p>
            <h2 className="text-3xl text-amber-100 mb-2 font-mincho">
              {selectedBook.title}
            </h2>
            {selectedBook.subtitle && (
              <p className="text-amber-200/40 text-sm mb-4">
                {selectedBook.subtitle}
              </p>
            )}
            <p className="text-amber-200/60 text-sm mb-2">
              {selectedBook.author}
            </p>
            <div className="w-12 h-px bg-amber-200/20 mx-auto my-6" />
            <p className="text-amber-200/70 text-sm leading-relaxed mb-8">
              {selectedBook.description}
            </p>
            {selectedBook.implemented ? (
              <Link
                to={selectedBook.path}
                className="inline-block px-8 py-3 bg-amber-200/10 hover:bg-amber-200/20 border border-amber-200/30 text-amber-100 text-sm tracking-wider rounded-lg transition-all duration-300"
              >
                感想を読む
              </Link>
            ) : (
              <div className="inline-block px-8 py-3 bg-amber-200/5 border border-amber-200/20 text-amber-200/50 text-sm tracking-wider rounded-lg">
                Coming Soon
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}
