import type { Book } from '../data/books'

interface BookItemProps {
  book: Book
  onClick: () => void
  hasBookmark?: boolean
  onBookmarkClick?: () => void
}

export function BookItem({ book, onClick, hasBookmark, onBookmarkClick }: BookItemProps) {
  const { number, title, subtitle, author, year } = book

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onBookmarkClick?.()
  }

  return (
    <button
      onClick={onClick}
      className="group w-full text-left p-6 border border-amber-200/10 rounded-lg hover:border-amber-200/30 hover:bg-amber-200/5 transition-all duration-300 block"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-amber-200/30 text-sm">{number}</span>
            <h2 className="text-xl text-amber-100/90 group-hover:text-amber-100 transition-colors">
              {title}
            </h2>
            {subtitle && (
              <span className="text-amber-200/30 text-xs hidden sm:inline">
                {subtitle}
              </span>
            )}
          </div>
          <p className="text-amber-200/50 text-sm pl-8">
            {author} · {year}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {hasBookmark && (
            <span
              onClick={handleBookmarkClick}
              className="p-1.5 rounded-lg hover:bg-amber-200/10 transition-colors cursor-pointer"
              title="続きを読む"
            >
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </span>
          )}
          <svg
            className="w-5 h-5 text-amber-200/20 group-hover:text-amber-200/50 group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </button>
  )
}
