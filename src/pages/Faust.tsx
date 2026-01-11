import { Link } from 'react-router-dom'
import { BackToTop } from '../components'

interface EmotionBarProps {
  label: string
  labelEn: string
  percent: number
}

function EmotionBar({ label, labelEn, percent }: EmotionBarProps) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-serif-jp text-gray-300">{label} — {labelEn}</span>
        <span className="font-cormorant text-faust-gold-300">{percent}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="faust-emotion-bar h-full bg-gradient-to-r from-crimson-500 to-faust-gold-300 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

interface CharacterCardProps {
  initial: string
  name: string
  nameJa: string
  description: string
  borderColor: string
}

function CharacterCard({ initial, name, nameJa, description, borderColor }: CharacterCardProps) {
  return (
    <div className="bg-gradient-to-b from-crimson-900/30 to-crimson-900/10 border border-crimson-500/20 p-8 rounded-sm faust-card-glow transition-all duration-500 hover:-translate-y-2">
      <div className={`w-16 h-16 border-2 ${borderColor} rounded-full flex items-center justify-center mb-6`}>
        <span className="font-cinzel text-2xl text-faust-gold-300">{initial}</span>
      </div>
      <h4 className="font-cinzel text-xl text-faust-gold-300 mb-3">{name}</h4>
      <h5 className="font-serif-jp text-lg text-gray-300 mb-4">{nameJa}</h5>
      <p className="font-serif-jp text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function Faust() {
  const emotions = [
    { label: '畏怖', labelEn: 'Awe', percent: 95 },
    { label: '知的興奮', labelEn: 'Intellectual Thrill', percent: 90 },
    { label: '悲哀', labelEn: 'Sorrow', percent: 85 },
    { label: '戦慄', labelEn: 'Shiver', percent: 80 },
    { label: '希望', labelEn: 'Hope', percent: 70 },
  ]

  const characters = [
    {
      initial: 'F',
      name: 'Faust',
      nameJa: 'ファウスト博士',
      description: '全ての学問を極めながらも満たされない老学者。真理を求め、悪魔との契約に身を委ねる。人間の無限の欲望と向上心の象徴。',
      borderColor: 'border-faust-gold-300/50',
    },
    {
      initial: 'M',
      name: 'Mephistopheles',
      nameJa: 'メフィストフェレス',
      description: '「常に悪を欲して、常に善をなす力の一部」。皮肉と知性に満ちた悪魔。ファウストの導き手であり、試練を与える者。',
      borderColor: 'border-crimson-500/50',
    },
    {
      initial: 'G',
      name: 'Gretchen',
      nameJa: 'グレートヒェン',
      description: '純粋で信仰深い少女。ファウストへの愛に身を焦がし、悲劇的な運命を辿る。救済と犠牲の象徴として、物語に深い陰影を与える。',
      borderColor: 'border-gray-400/50',
    },
  ]

  return (
    <div className="min-h-screen text-gray-100 font-serif-jp" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%)' }}>
      <div className="faust-grain" />

      {/* Hero Section */}
      <header className="faust-hero-bg min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
        <div className="absolute inset-0 faust-pentagram-bg opacity-30" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-faust-gold-300/10 rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-crimson-500/10 rounded-full animate-float" style={{ animationDelay: '-3s' }} />

        <div className="relative z-10 text-center">
          <p className="font-cormorant text-faust-gold-300 text-lg tracking-[0.3em] uppercase mb-4 animate-fade-in opacity-0">
            Johann Wolfgang von Goethe
          </p>

          <h1 className="font-cinzel text-6xl md:text-8xl lg:text-9xl font-bold text-faust-gold-300 faust-text-shadow-glow mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            FAUST
          </h1>

          <h2 className="font-serif-jp text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            ファウスト — 魂の遍歴
          </h2>

          <div className="max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <blockquote className="font-cormorant italic text-xl md:text-2xl text-gray-400 border-l-2 border-faust-gold-300/50 pl-6">
              "人間の努力する限り、迷うものだ"<br />
              <span className="text-sm text-faust-gold-300/70 not-italic">— 主より</span>
            </blockquote>
          </div>

          <div className="mt-16 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <a href="#review" className="inline-flex items-center gap-2 text-faust-gold-300 hover:text-faust-gold-400 transition-colors group">
              <span className="font-cormorant text-lg tracking-wider">感想を読む</span>
              <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-faust-gold-300/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-faust-gold-300/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="text-faust-gold-300 hover:text-faust-gold-400 text-sm transition-colors font-cormorant tracking-wider">
          ← Libraryへ戻る
        </Link>
      </div>

      {/* Synopsis Section */}
      <section id="review" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="faust-section-divider mb-16" />

          <h3 className="font-cinzel text-3xl md:text-4xl text-faust-gold-300 text-center mb-12">
            SYNOPSIS
          </h3>

          <div className="bg-gradient-to-b from-crimson-900/20 to-transparent p-8 md:p-12 border border-crimson-500/20 rounded-sm">
            <p className="font-serif-jp text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              老学者ファウストは、あらゆる学問を極めながらも真理に到達できず、絶望の淵に立っていた。そこに現れた悪魔メフィストフェレスとの契約。「瞬間よ止まれ、お前は美しい」と言った時、魂は悪魔のものとなる——。
            </p>
            <p className="font-serif-jp text-lg md:text-xl leading-relaxed text-gray-300">
              知識への渇望、禁断の恋、権力への誘惑。人間の欲望と救済を描いた、ゲーテ畢生の大作。執筆に60年以上を費やした、世界文学の金字塔である。
            </p>
          </div>
        </div>
      </section>

      {/* Emotional Journey Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-crimson-900/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-cinzel text-3xl md:text-4xl text-faust-gold-300 text-center mb-4">
            EMOTIONAL JOURNEY
          </h3>
          <p className="text-center text-gray-500 mb-16 font-cormorant text-lg">作品から受けた感情の軌跡</p>

          <div className="grid gap-6">
            {emotions.map((emotion) => (
              <EmotionBar key={emotion.labelEn} {...emotion} />
            ))}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-cinzel text-3xl md:text-4xl text-faust-gold-300 text-center mb-4">
            CHARACTERS
          </h3>
          <p className="text-center text-gray-500 mb-16 font-cormorant text-lg">魂の劇を彩る者たち</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <CharacterCard key={character.name} {...character} />
            ))}
          </div>
        </div>
      </section>

      {/* Reflections Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-crimson-900/5 to-transparent">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-cinzel text-3xl md:text-4xl text-faust-gold-300 text-center mb-4">
            REFLECTIONS
          </h3>
          <p className="text-center text-gray-500 mb-16 font-cormorant text-lg">読後の思索</p>

          <article className="space-y-8">
            <div className="border-l-2 border-faust-gold-300/30 pl-8">
              <h4 className="font-serif-jp text-xl text-gray-200 mb-4">知の限界と魂の飢え</h4>
              <p className="font-serif-jp text-gray-400 leading-loose">
                ファウストの冒頭で描かれる老学者の絶望は、現代を生きる我々にも深く響く。あらゆる学問を修めながらも「何も知らない」と嘆くファウスト。情報過多の時代に生きながら、本質的な充足を得られない現代人の姿がそこに重なる。
              </p>
            </div>

            <div className="border-l-2 border-crimson-500/30 pl-8">
              <h4 className="font-serif-jp text-xl text-gray-200 mb-4">メフィストの魅力</h4>
              <p className="font-serif-jp text-gray-400 leading-loose">
                悪魔メフィストフェレスは、単なる誘惑者ではない。彼の皮肉に満ちた言葉は、しばしば真理を突いている。「常に悪を欲して、常に善をなす」という自己規定は、善悪の単純な二項対立を超えた、深遠な世界観を示唆する。彼との対話は、哲学書を読むような知的興奮を与えてくれる。
              </p>
            </div>

            <div className="border-l-2 border-faust-gold-300/30 pl-8">
              <h4 className="font-serif-jp text-xl text-gray-200 mb-4">グレートヒェン悲劇</h4>
              <p className="font-serif-jp text-gray-400 leading-loose">
                第一部の頂点であるグレートヒェン悲劇は、胸を締め付けられるような痛みを伴う。純粋な愛が破滅へと転じる過程、牢獄での狂気に満ちた独白。しかし彼女の魂が「救われた」という天からの声は、闘いの果てに訪れる赦しの光である。
              </p>
            </div>

            <div className="border-l-2 border-crimson-500/30 pl-8">
              <h4 className="font-serif-jp text-xl text-gray-200 mb-4">第二部の壮大さ</h4>
              <p className="font-serif-jp text-gray-400 leading-loose">
                第二部は、第一部の個人的な悲劇から、人類史的・宇宙的なスケールへと拡張される。古代ギリシャへの遡行、ヘレネとの邂逅、国家建設への参画。ゲーテは人間精神のあらゆる可能性を探求し、最終的にファウストを「絶えず努力する者」として救済へと導く。
              </p>
            </div>

            {/* Quote block */}
            <blockquote className="my-12 py-8 px-8 bg-gradient-to-r from-crimson-900/20 via-crimson-900/30 to-crimson-900/20 border-y border-faust-gold-300/20">
              <p className="font-cormorant text-2xl md:text-3xl text-gray-300 italic text-center leading-relaxed">
                "止まれ、お前は美しい！"
              </p>
              <p className="font-serif-jp text-sm text-faust-gold-300/70 text-center mt-4">
                Verweile doch! du bist so schön!
              </p>
            </blockquote>

            <div className="border-l-2 border-faust-gold-300/30 pl-8">
              <h4 className="font-serif-jp text-xl text-gray-200 mb-4">結び — 救済の意味</h4>
              <p className="font-serif-jp text-gray-400 leading-loose">
                「絶えず努力して止まない者を、我々は救うことができる」。この天使の言葉は、ファウストの、そして人間存在そのものの意味を凝縮している。完全な善でも完全な悪でもなく、迷いながらも前進し続けること。その過程そのものに、人間の尊厳がある。60年以上をかけてゲーテが紡いだこの物語は、人類への壮大な贈り物である。
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-cinzel text-3xl md:text-4xl text-faust-gold-300 text-center mb-16">
            VERDICT
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="font-cinzel text-5xl text-faust-gold-300 mb-2">★★★★★</div>
              <p className="font-serif-jp text-gray-400">総合評価</p>
            </div>
            <div className="p-6">
              <div className="font-cinzel text-3xl text-faust-gold-300 mb-2">必読</div>
              <p className="font-serif-jp text-gray-400">推薦度</p>
            </div>
            <div className="p-6">
              <div className="font-cinzel text-3xl text-faust-gold-300 mb-2">∞</div>
              <p className="font-serif-jp text-gray-400">再読価値</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="font-serif-jp text-gray-500 text-sm">
              ※ 森鷗外訳、相良守峯訳、手塚富雄訳など複数の訳で読み比べることを推奨
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-crimson-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="faust-section-divider mb-8" />
          <p className="font-cormorant text-xl text-gray-500 italic mb-4">
            "Das Unbeschreibliche, hier ist's getan"
          </p>
          <p className="font-serif-jp text-sm text-gray-600">
            名状しがたきもの、ここに成就せり
          </p>
          <Link
            to="/"
            className="inline-block mt-8 px-6 py-2 border border-faust-gold-300/50 text-faust-gold-300 hover:bg-faust-gold-300/10 transition-colors text-sm tracking-wider"
          >
            Library に戻る
          </Link>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}
