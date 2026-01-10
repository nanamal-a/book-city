import { Link, useParams } from 'react-router-dom'
import { books } from '../data/books'

export function ComingSoon() {
  const { bookId } = useParams<{ bookId: string }>()
  const book = books.find((b) => b.path === `/${bookId}`)

  return (
    <div className="bg-stone-950 text-amber-100 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <p className="text-amber-200/40 text-xs tracking-widest mb-4">
          {book?.year || 'Coming Soon'}
        </p>
        <h1 className="text-4xl md:text-6xl text-amber-100/90 mb-4 font-mincho">
          {book?.title || 'Coming Soon'}
        </h1>
        {book?.subtitle && (
          <p className="text-amber-200/40 text-sm mb-4">{book.subtitle}</p>
        )}
        <p className="text-amber-200/60 text-sm mb-2">{book?.author}</p>
        <div className="w-12 h-px bg-amber-200/20 mx-auto my-8" />
        <p className="text-amber-200/70 text-sm leading-relaxed mb-8 max-w-md">
          {book?.description}
        </p>
        <div className="bg-amber-200/5 border border-amber-200/20 rounded-xl px-8 py-6 mb-8">
          <p className="text-amber-200/50 text-sm">
            このページは現在準備中です
          </p>
        </div>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-amber-200/10 hover:bg-amber-200/20 border border-amber-200/30 text-amber-100 text-sm tracking-wider rounded-lg transition-all duration-300"
        >
          Libraryへ戻る
        </Link>
      </div>

      <footer className="py-12 text-center border-t border-amber-200/10">
        <p className="text-amber-200/20 text-xs tracking-widest">
          — and the story continues —
        </p>
      </footer>
    </div>
  )
}
