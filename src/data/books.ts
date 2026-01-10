export interface Book {
  id: string
  number: string
  title: string
  subtitle?: string
  author: string
  year: string
  description: string
  path: string
  implemented: boolean
}

export const books: Book[] = [
  {
    id: 'maihime',
    number: '01',
    title: '舞姫',
    author: '森鷗外',
    year: '1890',
    description: '異国の地で出会った、切ない恋の物語',
    path: '/maihime',
    implemented: true,
  },
  {
    id: 'divina',
    number: '02',
    title: '神曲',
    subtitle: 'La Divina Commedia',
    author: 'Dante',
    year: '1320',
    description: '地獄から天国へ、魂の旅路',
    path: '/divina',
    implemented: false,
  },
  {
    id: 'faust',
    number: '03',
    title: 'Faust',
    author: 'Goethe',
    year: '1808',
    description: '知識を求め、悪魔と契約した男',
    path: '/faust',
    implemented: false,
  },
  {
    id: 'ningen',
    number: '04',
    title: '人間失格',
    author: '太宰治',
    year: '1948',
    description: '人間の弱さと、それでも生きること',
    path: '/ningen',
    implemented: false,
  },
]
