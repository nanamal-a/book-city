import { Link } from 'react-router-dom'
import { BackToTop } from '../components'

export function NingenShikkaku() {
  return (
    <div className="bg-white text-gray-900 font-mincho">
      {/* Header */}
      <header className="min-h-screen flex flex-col justify-center items-center relative px-6 bg-ningen-bg">
        <div className="absolute top-8 right-8 vertical-text text-sm tracking-widest text-gray-600 animate-fade-in">
          太宰治 著
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-in mb-8 text-gray-900">
          人間失格
        </h1>

        <p className="text-lg md:text-xl font-gothic tracking-widest animate-fade-in text-gray-700" style={{ animationDelay: '0.2s' }}>
          読 書 感 想
        </p>

        <div className="mt-24 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <svg className="w-8 h-8 animate-bounce text-ningen-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="text-ningen-red hover:text-red-700 text-sm transition-colors font-gothic">
          ← Libraryへ戻る
        </Link>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-24 bg-white">
        {/* 印象的な一文 */}
        <section className="mb-32">
          <h2 className="text-sm font-gothic tracking-widest mb-8 text-ningen-red">
            印象的な一文
          </h2>

          <div className="pl-6 mb-10 border-l-4 border-ningen-red">
            <blockquote className="text-2xl md:text-3xl leading-relaxed mb-4 text-gray-900 hover:animate-tremble">
              「あー私は<span className="ningen-quote-highlight">人間失格した</span>のだ」
            </blockquote>
            <cite className="font-gothic text-sm text-gray-600">— 第三の手記より</cite>
          </div>

          <div className="space-y-6 text-lg leading-loose font-gothic text-gray-800">
            <p>この一文が、私の心を鷲掴みにした。</p>
            <p>
              「人間失格した」——この奇妙な言い回し。人間を「失格」するという行為を、まるで他人事のように認識している。自分自身の崩壊を、<strong className="text-black">第三者の目線で</strong>冷静に見つめる瞬間。
            </p>
            <p>そしてそれこそが、皮肉にも、彼が完全に「狂気」へと堕ちていく合図なのだ。</p>
            <p>
              自分が壊れていくことを認識できる冷静さ。<br />
              しかしその冷静さは、もはや正気のそれではない。
            </p>
          </div>

          <div className="mt-10 p-6 bg-red-50 border-l-4 border-ningen-red">
            <p className="text-xl text-center leading-relaxed text-ningen-red">
              認識の明晰さと、存在の崩壊が<br />同時に訪れる——その残酷な美しさ。
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center mb-32">
          <div className="w-3 h-3 rounded-full bg-ningen-red" />
          <div className="w-20 h-px mx-4 bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-ningen-red" />
          <div className="w-20 h-px mx-4 bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-ningen-red" />
        </div>

        {/* 好きなセリフ */}
        <section className="mb-32">
          <h2 className="text-sm font-gothic tracking-widest mb-8 text-ningen-red">
            好きなセリフ
          </h2>

          <div className="p-8 md:p-12 mb-10 text-center bg-gray-900">
            <p className="text-3xl md:text-4xl tracking-widest text-white hover:animate-tremble">
              ひやあせ　ひやあせ
            </p>
          </div>

          <div className="space-y-6 text-lg leading-loose font-gothic text-gray-800">
            <p>このセリフが好きだ。</p>
            <p>
              言葉にならない恐怖、不安、焦燥——それらが「ひやあせ」という擬態語に凝縮されている。身体感覚としての恐怖。
            </p>
            <p>
              太宰は、<strong className="text-black">抽象的な感情を肉体の言葉</strong>で表現する天才だった。
            </p>
            <p>
              「恐ろしい」と書くのではなく、「ひやあせ」と書く。読者は文字を追うだけで、背筋に冷たい汗が流れる感覚を追体験する。
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center mb-32">
          <div className="w-48 h-px bg-gray-300" />
        </div>

        {/* 信頼の天才 */}
        <section className="mb-32">
          <h2 className="text-sm font-gothic tracking-widest mb-8 text-ningen-red">
            信頼の天才
          </h2>

          <div className="space-y-6 text-lg leading-loose font-gothic text-gray-800">
            <p>ヨシ子という女性がいた。</p>
            <p>
              葉蔵に「奥さんにして下さい」とまっすぐに言えてしまうような、曇りのない心の持ち主。人を疑うことを知らない、純粋な信頼で世界と向き合う女性だった。
            </p>
            <p>
              葉蔵は彼女の中に<strong className="text-black">「信頼の天才」</strong>を見出す。
            </p>
            <p>しかし——ある夜、その純粋さは踏みにじられる。</p>
          </div>

          <div className="my-10 p-6 bg-gray-100 border border-gray-300">
            <p className="text-center font-gothic text-gray-600">
              ここでは詳細を記さない。<br />
              ただ、取り返しのつかないことが起きた。
            </p>
          </div>

          <div className="space-y-6 text-lg leading-loose font-gothic text-gray-800">
            <p>
              あの快活だった彼女が、びくびくと怯えるようになった。以前の輝きは失われ、どこか翳りを帯びた表情が張り付くようになった。
            </p>
            <p>葉蔵は彼女を責めなかった。むしろ励まそうとした。けれど——</p>
          </div>

          <div className="pl-6 my-10 border-l-4 border-ningen-red">
            <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-900">
              「無垢の信頼心は、罪なりや」
            </blockquote>
            <cite className="font-gothic text-sm block mt-4 text-gray-600">— 第三の手記より</cite>
          </div>

          <div className="space-y-6 text-lg leading-loose font-gothic text-gray-800">
            <p>
              葉蔵がどれだけ「気にするな」と言っても、もう戻らない。元気を出してくれと願っても、あの無邪気な笑顔は二度と戻ってこない。
            </p>
            <p>壊されたのだ。</p>
            <p>
              かけがえのない、純粋な何かが。<br />
              それは癒えることのない傷だった。
            </p>
          </div>

          <div className="mt-10 p-6 bg-red-50 border-l-4 border-ningen-red">
            <p className="text-xl text-center leading-relaxed text-ningen-red">
              どうしようもない——<br />
              その「どうしようもなさ」が、<br />
              この小説の底に流れる悲痛である。
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center mb-32">
          <div className="w-48 h-px bg-gray-300" />
        </div>

        {/* 総括 */}
        <section>
          <h2 className="text-sm font-gothic tracking-widest mb-12 text-center text-ningen-red">
            総 括
          </h2>

          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl leading-relaxed mb-6 text-gray-900">
              「恥の多い生涯を送って来ました」
            </p>
            <p className="font-gothic text-gray-600">
              ——この冒頭の一文から、私たちは葉蔵の深淵を覗き込む。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 bg-gray-50 border-t-4 border-ningen-red">
              <h3 className="font-bold text-xl mb-4 text-gray-900">道化の仮面</h3>
              <p className="font-gothic leading-relaxed text-gray-700">
                人間を理解できないからこそ、人間を演じ続けた葉蔵。その演技の完璧さが、彼の孤独をより深くする。
              </p>
            </div>
            <div className="p-6 bg-gray-50 border-t-4 border-ningen-red">
              <h3 className="font-bold text-xl mb-4 text-gray-900">破滅への疾走</h3>
              <p className="font-gothic leading-relaxed text-gray-700">
                酒、女、薬——彼は自らを破滅させる手段を次々と選び取る。しかしそれは逃避ではなく、ある種の「実験」だったのかもしれない。
              </p>
            </div>
          </div>

          <div className="text-center py-10 bg-gray-100 border-t-2 border-b-2 border-gray-300">
            <p className="text-xl md:text-2xl leading-loose text-gray-900">
              「神様みたいないい子でした」
            </p>
            <p className="text-sm mt-4 font-gothic text-gray-600">
              ——バーのマダムの言葉
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 text-center bg-gray-900">
        <div className="mb-6">
          <p className="text-6xl md:text-8xl font-bold select-none text-gray-700">
            廃
          </p>
        </div>
        <p className="text-sm font-gothic tracking-widest text-gray-400">
          読了後の感想記録
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors text-sm tracking-wider"
        >
          Library に戻る
        </Link>
      </footer>

      <BackToTop />
    </div>
  )
}
