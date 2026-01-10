export interface Character {
  id: string
  name: string
  role: string
  icon: string
  iconColor: string
  angerPercent: number
  sorrowPercent: number
  description: string
  highlight?: boolean
}

export const characters: Character[] = [
  {
    id: 'toyotaro',
    name: '太田豊太郎',
    role: '主人公・語り手',
    icon: '太',
    iconColor: 'from-ink to-ink/70',
    angerPercent: 90,
    sorrowPercent: 10,
    description: '全ての元凶。自覚していながら流される弱さ。最後まで被害者面。',
  },
  {
    id: 'aizawa',
    name: '相沢謙吉',
    role: '豊太郎の友人',
    icon: '謙',
    iconColor: 'from-sorrow to-sorrow/70',
    angerPercent: 50,
    sorrowPercent: 50,
    description: '「良友」と言いながら恨む豊太郎。しかし本当の加害者は誰なのか。',
  },
  {
    id: 'amakata',
    name: '天方伯爵',
    role: '大臣',
    icon: '伯',
    iconColor: 'from-gold to-gold/70',
    angerPercent: 10,
    sorrowPercent: 90,
    description: '時代の権力者。彼もまた明治という時代の歯車に過ぎない。',
  },
  {
    id: 'boss',
    name: '官長（上司）',
    role: '某省の上官',
    icon: '官',
    iconColor: 'from-gray-600 to-gray-400',
    angerPercent: 30,
    sorrowPercent: 70,
    description: '「生きた法律」を求めた官僚制度の象徴。個人を見ない組織の冷たさ。',
  },
  {
    id: 'colleagues',
    name: '同郷の留学生',
    role: '在伯林の日本人',
    icon: '留',
    iconColor: 'from-gray-500 to-gray-300',
    angerPercent: 30,
    sorrowPercent: 70,
    description: '讒言した者たち。しかし彼らもまた異国での生存競争の中にいた。',
  },
  {
    id: 'elis',
    name: 'エリス',
    role: '舞姫・ヒロイン',
    icon: 'E',
    iconColor: 'from-pink-400 to-pink-300',
    angerPercent: 20,
    sorrowPercent: 80,
    description: '最大の被害者。純粋に愛し、信じ、そして壊された。彼女に罪はない。',
    highlight: true,
  },
  {
    id: 'child',
    name: 'エリスの子',
    role: '胎児',
    icon: '子',
    iconColor: 'from-pink-200 to-pink-100',
    angerPercent: 0,
    sorrowPercent: 100,
    description: '何も知らず、何も選べず、ただ生まれてくるだけの存在。最も哀しい。',
  },
  {
    id: 'elis-mother',
    name: 'エリスの母',
    role: '老媼',
    icon: '母',
    iconColor: 'from-amber-600 to-amber-400',
    angerPercent: 10,
    sorrowPercent: 90,
    description: '貧困の中で娘を守ろうとした。彼女なりの愛情があった。',
  },
  {
    id: 'toyotaro-mother',
    name: '豊太郎の母',
    role: '故人',
    icon: '母',
    iconColor: 'from-purple-600 to-purple-400',
    angerPercent: 20,
    sorrowPercent: 80,
    description: '息子を「生きた辞書」にしようとした。彼女もまた時代の被害者か。',
  },
  {
    id: 'toyotaro-father',
    name: '豊太郎の父',
    role: '故人',
    icon: '父',
    iconColor: 'from-slate-700 to-slate-500',
    angerPercent: 20,
    sorrowPercent: 80,
    description: '早逝した父。遺言が息子を縛る鎖となった。',
  },
]
