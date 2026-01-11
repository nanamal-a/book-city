export interface Chapter {
  id: string
  title: string
  content: string
  section?: string // For grouping (e.g., "第一部", "地獄篇")
}

export interface Section {
  id: string
  title: string
  chapters: Chapter[]
}

export interface StoryData {
  bookId: string
  bookTitle: string
  chapters: Chapter[]
  sections?: Section[] // Optional grouped sections
  backPath: string
  isDialogue?: boolean // For dialogue-style formatting (Faust)
}
