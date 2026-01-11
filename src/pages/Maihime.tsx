import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CharacterCard, BackToTop } from '../components'
import { characters } from '../data/characters'
import { storyFull, getStoryPreview } from '../data/story'

export function Maihime() {
  const [isExpanded, setIsExpanded] = useState(false)

  const storyContent = isExpanded ? storyFull : getStoryPreview()

  return (
    <div className="min-h-screen font-serif-jp text-ink paper-texture">
      {/* Header */}
      <header className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 to-ink/70" />
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="sakura" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#ffd700" opacity="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#sakura)" />
          </svg>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <p className="text-gold font-mincho tracking-[0.5em] text-sm mb-4 animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
                森 鷗外
              </p>
              <h1 className="font-mincho text-6xl lg:text-8xl text-paper mb-6 animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
                舞姫
              </h1>
              <p className="text-paper/70 text-lg tracking-wider animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s' }}>
                明治二十三年 ― 感想と考察
              </p>
            </div>
            <div className="vertical-text text-paper/50 font-mincho text-2xl tracking-[0.3em] h-48 animate-fadeInUp hidden lg:block opacity-0" style={{ animationDelay: '0.8s' }}>
              嗚呼、何等の悪因ぞ
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-paper to-transparent" />
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="text-gold hover:text-amber-600 text-sm transition-colors">
          ← Libraryへ戻る
        </Link>
      </div>

      {/* Impressive Quote Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-mincho text-3xl lg:text-4xl text-amber-900 font-semibold mb-4">
              印象的なセリフ
            </h2>
          </div>

          <div className="pl-6 lg:pl-8 mb-10 border-l-4 border-gold">
            <blockquote className="text-2xl lg:text-3xl leading-relaxed mb-4 font-mincho text-ink">
              「嗚呼、相沢謙吉が如き良友は世にまた得がたかるべし。
              <br />
              されど我脳裡に一点の<span className="text-anger">彼を憎むこゝろ</span>今日までも残れりけり。」
            </blockquote>
            <cite className="text-stone-600 text-sm">— 結末より</cite>
          </div>

          <div className="space-y-6 text-lg leading-loose text-stone-700">
            <p>
              この結末の一文に、豊太郎という人間のすべてが凝縮されている。
            </p>
            <p>
              相沢を「良友」と呼びながら「憎む」という矛盾。それは、自分の弱さと決断力の欠如を、最後まで他者に転嫁しようとする豊太郎の本質を露わにしている。
            </p>
          </div>

          <div className="mt-12 p-6 lg:p-8 bg-ink/5 rounded-xl border border-gold/20">
            <p className="text-xl text-center leading-relaxed text-amber-900 font-mincho">
              エリスを精神的に殺したのは相沢ではない。
              <br />
              エリスとの約束を反故にし、大臣の前で
              <br />
              「承りました」と答えた豊太郎自身である。
            </p>
          </div>
        </div>
      </section>

      {/* Commentary Section */}
      <section className="bg-ink text-paper py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mincho text-3xl lg:text-4xl mb-12 text-center">総評</h2>

            <div className="space-y-8 text-paper/80 leading-relaxed">
              <div className="bg-paper/10 rounded-xl p-6 my-8">
                <h3 className="font-mincho text-xl text-gold mb-4">怒りの90%は豊太郎へ</h3>
                <p>
                  「わが弱き心」と何度も自覚しながら、その弱さを克服しようとする努力は一切ない。母の教え、上司の命令、友の助言、大臣の誘い——すべてに流され、その結果を「恨み」として抱えて帰国する。彼は被害者ではない。加害者でありながら、被害者の仮面をかぶり続けた卑怯者である。
                </p>
              </div>

              <div className="bg-paper/10 rounded-xl p-6 my-8">
                <h3 className="font-mincho text-xl text-gold mb-4">哀しみの100%はエリスの子へ</h3>
                <p>
                  物語の中で最も声なき存在。父に捨てられ、母は発狂し、異国の地で生まれてくる運命。何の選択もできず、ただ大人たちの愚行の結果を背負わされる。この子の存在こそが、この物語の最も残酷な核心である。
                </p>
              </div>

              <p>
                『舞姫』は、明治という時代の悲劇であると同時に、普遍的な人間の弱さの物語である。豊太郎は「真の自我」に目覚めたと自負しながら、結局は社会の歯車に戻ることを選んだ。その選択自体を責めることはできないかもしれない。しかし、その代償をエリスだけに支払わせ、自分は「恨み」を抱えて生きていくという結末は、あまりにも身勝手である。
              </p>

              <p className="text-center text-gold font-mincho text-lg mt-12">
                森鷗外自身がベルリンで経験した実話がベースとされる本作。
                <br />
                鷗外は、この物語を通じて何を贖罪しようとしたのだろうか。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Character Gauge Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="font-mincho text-3xl lg:text-4xl text-amber-900 font-semibold mb-4">
            登場人物への感情
          </h2>
          <p className="text-stone-700 max-w-2xl mx-auto text-lg font-medium">
            物語を読み終えて、各登場人物に抱いた感情を数値化しました。
            <br />
            <span className="text-red-600 font-bold">怒り😡</span>と
            <span className="text-indigo-700 font-bold">哀しみ😢</span>は表裏一体のものとして。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>

      {/* Modern Translation Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="font-mincho text-3xl lg:text-4xl text-amber-900 font-semibold mb-4">
            現代語訳
          </h2>
          <p className="text-stone-700 font-medium text-lg">原文の雅文体を現代語に訳出</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 lg:p-12 border border-gold/20">
          <div className="text-ink/80 text-sm lg:text-base leading-loose">
            {storyContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-ink/10 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-3 bg-ink text-paper rounded-full font-mincho hover:bg-ink/80 transition-colors"
            >
              {isExpanded ? '折りたたむ' : '全文を表示'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper/60 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-mincho text-2xl text-paper mb-4">舞姫</p>
          <p className="text-sm">森鷗外 著 / 明治二十三年（1890年）発表</p>
          <p className="text-xs mt-4 text-paper/40">
            本サイトは個人的な感想・考察をまとめたものです。
            <br />
            原文は青空文庫にて公開されています。
          </p>
          <Link
            to="/"
            className="inline-block mt-8 px-6 py-2 border border-gold/50 text-gold hover:bg-gold/10 transition-colors text-sm tracking-wider"
          >
            Library に戻る
          </Link>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}
