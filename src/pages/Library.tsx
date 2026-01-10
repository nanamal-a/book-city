import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookItem, Modal } from '../components'
import { books, type Book } from '../data/books'

export function Library() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

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
        <div className="space-y-4">
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onClick={() => setSelectedBook(book)}
            />
          ))}
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
