export interface Bookmark {
  chapterId: string
  scrollY: number
}

export type Bookmarks = Record<string, Bookmark>

const BOOKMARKS_KEY = 'bookmarks'

export function getBookmarks(): Bookmarks {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '{}')
  } catch {
    return {}
  }
}

export function getBookmark(bookId: string): Bookmark | null {
  const bookmarks = getBookmarks()
  return bookmarks[bookId] || null
}

export function saveBookmark(bookId: string, bookmark: Bookmark): void {
  const bookmarks = getBookmarks()
  bookmarks[bookId] = bookmark
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
}

export function hasBookmark(bookId: string): boolean {
  const bookmark = getBookmark(bookId)
  return bookmark !== null && bookmark.scrollY > 100
}

export function deleteBookmark(bookId: string): void {
  const bookmarks = getBookmarks()
  delete bookmarks[bookId]
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
}
