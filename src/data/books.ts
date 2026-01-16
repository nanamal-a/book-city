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
  reading: {
    title: { hiragana: string; romaji: string }
    author: { hiragana: string; romaji: string }
    subtitle?: { hiragana: string; romaji: string }
  }
}

export const books: Book[] = [
  {
    id: 'ningenShikkaku',
    number: '01',
    title: '人間失格',
    author: '太宰治',
    year: '1948',
    description: '人間の弱さと、それでも生きること',
    path: '/ningen-shikkaku',
    implemented: true,
    reading: {
      title: { hiragana: 'にんげんしっかく', romaji: 'ningenshikkaku' },
      author: { hiragana: 'だざいおさむ', romaji: 'dazaiosamu' },
    },
  },
  {
    id: 'maihime',
    number: '02',
    title: '舞姫',
    author: '森鷗外',
    year: '1890',
    description: '異国の地で出会った、切ない恋の物語',
    path: '/maihime',
    implemented: true,
    reading: {
      title: { hiragana: 'まいひめ', romaji: 'maihime' },
      author: { hiragana: 'もりおうがい', romaji: 'moriougai' },
    },
  },
  {
    id: 'divinaCommedia',
    number: '03',
    title: '神曲',
    subtitle: 'La Divina Commedia',
    author: 'Dante',
    year: '1320',
    description: '地獄から天国へ、魂の旅路',
    path: '/divina-commedia',
    implemented: true,
    reading: {
      title: { hiragana: 'しんきょく', romaji: 'shinkyoku' },
      author: { hiragana: 'だんて', romaji: 'dante' },
      subtitle: { hiragana: 'らでぃびなこめでぃあ', romaji: 'ladivinacommedia' },
    },
  },
  {
    id: 'faust',
    number: '04',
    title: 'Faust',
    author: 'Goethe',
    year: '1808',
    description: '知識を求め、悪魔と契約した男',
    path: '/faust',
    implemented: true,
    reading: {
      title: { hiragana: 'ふぁうすと', romaji: 'faust' },
      author: { hiragana: 'げーて', romaji: 'goethe' },
    },
  },
]
