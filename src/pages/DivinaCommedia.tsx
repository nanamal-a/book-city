import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BackToTop } from '../components'
import { divinaCommediaStoryData } from '../data/divinaCommediaStory'

export function DivinaCommedia() {
  // Get preview from first chapter (first 400 characters)
  const previewText = divinaCommediaStoryData.chapters[0]?.content.slice(0, 400) + '...'
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-parchment text-ink font-serif-jp">
      {/* Texture Overlay */}
      <div className="fixed inset-0 divina-texture-overlay pointer-events-none z-50" />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-ink/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-inferno-ember via-purgatorio-violet to-paradiso-gold"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-inferno-dark to-purgatorio-dawn" />
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, black 70%)' }} />

        {/* Floating Stars */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-1 h-1 bg-paradiso-gold rounded-full animate-float opacity-60" />
          <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-paradiso-celestial rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute top-40 left-1/2 w-1 h-1 bg-white rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-paradiso-gold rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-60 left-1/3 w-1.5 h-1.5 bg-paradiso-celestial rounded-full animate-float opacity-30" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-cormorant text-purgatorio-rose tracking-[0.3em] uppercase text-sm mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Divina Commedia
          </p>
          <h1 className="font-cormorant text-6xl md:text-8xl text-paradiso-celestial mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
            神曲への旅路
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-paradiso-gold to-transparent mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }} />
          <p className="font-cormorant text-xl md:text-2xl text-purgatorio-mist italic mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            "Nel mezzo del cammin di nostra vita"<br />
            <span className="text-base not-italic opacity-70">— 我らの人生の道半ばにして</span>
          </p>
          <a
            href="#introduction"
            className="inline-block border border-paradiso-gold/50 text-paradiso-gold px-8 py-3 font-cormorant tracking-wider hover:bg-paradiso-gold/10 transition-all duration-500 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            旅を始める
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purgatorio-rose/60 animate-float">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="text-ink/60 hover:text-ink text-sm transition-colors font-cormorant tracking-wider">
          ← Libraryへ戻る
        </Link>
      </div>

      {/* Introduction */}
      <section id="introduction" className="py-24 px-6 bg-parchment relative">
        <div className="max-w-3xl mx-auto">
          <p className="text-center font-cormorant text-ink/60 tracking-[0.2em] uppercase text-sm mb-6">序章</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-12 text-ink">神曲との出会い</h2>

          <div className="prose prose-lg max-w-none text-ink/80 leading-relaxed">
            <p className="divina-drop-cap text-lg mb-6">
              ダンテ・アリギエーリの『神曲』は、西洋文学の最高傑作の一つとして700年以上にわたり読み継がれてきた。地獄、煉獄、天国という三界を巡る壮大な叙事詩は、中世の宇宙観と人間の魂の遍歴を描き出す。
            </p>
            <p className="text-lg mb-6">
              1300年の聖金曜日、人生の道半ばで暗い森に迷い込んだダンテは、古代ローマの詩人ウェルギリウスの導きを得て、死後の世界への旅を始める。この旅は単なる冒険譚ではなく、人間の罪と救済、愛と知恵、そして神への帰還を描く精神的巡礼である。
            </p>
            <p className="text-lg">
              私がこの作品に惹かれるのは、その圧倒的な構想力と詩的美しさだけではない。700年前の詩人の言葉が、現代を生きる私たちの心にも深く響くという、文学の永遠性を体現しているからだ。
            </p>
          </div>
        </div>
      </section>

      {/* Three Canticas Navigation */}
      <section className="py-16 px-6 bg-ink">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0">
            {/* Inferno */}
            <a href="#inferno" className="group relative overflow-hidden divina-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-inferno-dark to-inferno-flame p-8 flex flex-col justify-between border-r border-white/10">
                <div>
                  <p className="font-cormorant text-inferno-ember/80 tracking-[0.3em] uppercase text-xs">Canto I - XXXIV</p>
                  <h3 className="font-cormorant text-4xl text-inferno-ember mt-4 group-hover:text-white transition-colors duration-500">地獄篇</h3>
                  <p className="font-cormorant italic text-white/50 mt-2">Inferno</p>
                </div>
                <div className="text-white/60 text-sm leading-relaxed">
                  <p>"ここを過ぐる者は一切の希望を捨てよ"</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-inferno-ember transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </a>

            {/* Purgatorio */}
            <a href="#purgatorio" className="group relative overflow-hidden divina-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-purgatorio-dawn to-purgatorio-violet p-8 flex flex-col justify-between border-r border-white/10">
                <div>
                  <p className="font-cormorant text-purgatorio-rose/80 tracking-[0.3em] uppercase text-xs">Canto I - XXXIII</p>
                  <h3 className="font-cormorant text-4xl text-purgatorio-rose mt-4 group-hover:text-white transition-colors duration-500">煉獄篇</h3>
                  <p className="font-cormorant italic text-white/50 mt-2">Purgatorio</p>
                </div>
                <div className="text-white/60 text-sm leading-relaxed">
                  <p>"より良き水域に帆を上げんとして"</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-purgatorio-rose transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </a>

            {/* Paradiso */}
            <a href="#paradiso" className="group relative overflow-hidden divina-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-paradiso-azure to-paradiso-gold/30 p-8 flex flex-col justify-between">
                <div>
                  <p className="font-cormorant text-paradiso-gold/80 tracking-[0.3em] uppercase text-xs">Canto I - XXXIII</p>
                  <h3 className="font-cormorant text-4xl text-paradiso-gold mt-4 group-hover:text-paradiso-celestial transition-colors duration-500 animate-glow">天国篇</h3>
                  <p className="font-cormorant italic text-white/50 mt-2">Paradiso</p>
                </div>
                <div className="text-white/60 text-sm leading-relaxed">
                  <p>"太陽とその他の星々を動かす愛"</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-paradiso-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Inferno Section */}
      <section id="inferno" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-inferno-dark via-inferno-ash to-inferno-dark" />
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at bottom, #8b2500 0%, transparent 60%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-cormorant text-inferno-ember/60 tracking-[0.3em] uppercase text-sm mb-4">第一部</p>
            <h2 className="font-cormorant text-5xl md:text-6xl text-inferno-ember mb-4">地獄篇</h2>
            <p className="font-cormorant text-2xl italic text-white/50">Inferno</p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-inferno-ember to-transparent mx-auto mt-8" />
          </div>

          <div className="bg-inferno-dark/80 backdrop-blur border border-inferno-flame/20 p-8 md:p-12 mb-12">
            <blockquote className="font-cormorant text-xl md:text-2xl text-inferno-ember/90 italic text-center leading-relaxed mb-6">
              "Lasciate ogne speranza, voi ch'intrate"
            </blockquote>
            <p className="text-center text-white/50 font-cormorant">— 地獄門の銘文</p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h3 className="font-cormorant text-2xl text-inferno-ember mb-6 divina-ornament text-center">感想</h3>

            <p className="text-white/80 leading-relaxed mb-6">
              地獄篇を読み進めるにつれ、ダンテの想像力の凄まじさに圧倒される。九層からなる逆円錐形の地獄は、罪の重さに応じて構造化され、それぞれの層で罪人たちは永遠の罰を受けている。
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              特に印象深いのは、第五歌に登場するパオロとフランチェスカの物語だ。不義の愛によって地獄に落ちた二人は、永遠に暴風の中を漂い続ける。フランチェスカが語る「その日、私たちはもう読み進めなかった」という一節は、文学史上最も美しく哀しい恋愛描写の一つだろう。
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              地獄の最下層で氷漬けにされたルチフェロ（サタン）の姿は、悪の究極の姿を示している。神への反逆という最大の罪は、灼熱ではなく永遠の凍結によって罰せられる。愛の欠如、すなわち冷たさこそが最も深い罪なのだ。
            </p>

            <div className="bg-inferno-flame/10 border-l-2 border-inferno-ember p-6 my-8">
              <p className="text-white/70 italic">
                「地獄篇は単なる恐怖の描写ではない。それは人間の罪の本質と、その必然的帰結についての深い洞察である。」
              </p>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent" />
      </section>

      {/* Purgatorio Section */}
      <section id="purgatorio" className="relative py-24 px-6 overflow-hidden bg-parchment">
        <div className="absolute inset-0 bg-gradient-to-b from-parchment via-purgatorio-mist/30 to-parchment" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-cormorant text-purgatorio-violet/60 tracking-[0.3em] uppercase text-sm mb-4">第二部</p>
            <h2 className="font-cormorant text-5xl md:text-6xl text-purgatorio-dawn mb-4">煉獄篇</h2>
            <p className="font-cormorant text-2xl italic text-purgatorio-violet/50">Purgatorio</p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-purgatorio-violet to-transparent mx-auto mt-8" />
          </div>

          <div className="bg-white/60 backdrop-blur border border-purgatorio-violet/20 p-8 md:p-12 mb-12 shadow-lg">
            <blockquote className="font-cormorant text-xl md:text-2xl text-purgatorio-dawn italic text-center leading-relaxed mb-6">
              "Per correr miglior acque alza le vele"
            </blockquote>
            <p className="text-center text-purgatorio-violet/70 font-cormorant">— 煉獄篇 第一歌</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="font-cormorant text-2xl text-purgatorio-dawn mb-6 divina-ornament text-center">感想</h3>

            <p className="text-ink/80 leading-relaxed mb-6">
              地獄の暗黒から抜け出し、煉獄山の麓に立つダンテ。ここで初めて星空を仰ぎ見るシーンは、文学史上最も美しい場面転換の一つだ。煉獄篇は希望の物語である。
            </p>

            <p className="text-ink/80 leading-relaxed mb-6">
              七つの大罪（高慢、嫉妬、憤怒、怠惰、貪欲、暴食、色欲）を浄化しながら山を登る魂たちの姿は、人間の成長と贖罪の可能性を示している。地獄が永遠の罰の場であるのに対し、煉獄は変容の場なのだ。
            </p>

            <p className="text-ink/80 leading-relaxed mb-6">
              煉獄篇の頂点は、地上楽園でのベアトリーチェとの再会である。ウェルギリウスが静かに姿を消し、初恋の人にして霊的導師であるベアトリーチェが現れる。彼女の厳しい叱責と、それに続くダンテの痛悔は、真の精神的再生のための必要条件を示している。
            </p>

            <div className="bg-purgatorio-violet/10 border-l-2 border-purgatorio-violet p-6 my-8">
              <p className="text-ink/70 italic">
                「煉獄篇は三部作の中で最も人間的な部分だ。ここには絶望もなく、完璧な至福もない。ただ努力と希望と、ゆっくりとした変容がある。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paradiso Section */}
      <section id="paradiso" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-paradiso-azure via-paradiso-azure to-ink" />
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at top, #c9a227 0%, transparent 50%)' }} />

        {/* Golden particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/5 w-2 h-2 bg-paradiso-gold rounded-full animate-glow opacity-60" />
          <div className="absolute top-20 right-1/4 w-1.5 h-1.5 bg-paradiso-celestial rounded-full animate-float opacity-50" />
          <div className="absolute top-40 left-1/2 w-2 h-2 bg-paradiso-gold rounded-full animate-glow opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-cormorant text-paradiso-gold/60 tracking-[0.3em] uppercase text-sm mb-4">第三部</p>
            <h2 className="font-cormorant text-5xl md:text-6xl text-paradiso-gold animate-glow mb-4">天国篇</h2>
            <p className="font-cormorant text-2xl italic text-paradiso-celestial/50">Paradiso</p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-paradiso-gold to-transparent mx-auto mt-8" />
          </div>

          <div className="bg-paradiso-azure/50 backdrop-blur border border-paradiso-gold/30 p-8 md:p-12 mb-12">
            <blockquote className="font-cormorant text-xl md:text-2xl text-paradiso-gold italic text-center leading-relaxed mb-6">
              "L'amor che move il sole e l'altre stelle"
            </blockquote>
            <p className="text-center text-paradiso-celestial/70 font-cormorant">— 天国篇 第三十三歌（最終行）</p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h3 className="font-cormorant text-2xl text-paradiso-gold mb-6 divina-ornament text-center">感想</h3>

            <p className="text-white/80 leading-relaxed mb-6">
              天国篇は、言語の限界に挑む試みである。ダンテ自身が繰り返し述べるように、神の栄光を人間の言葉で表現することは本質的に不可能だ。それでも彼は詩によってその不可能に挑み続ける。
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              月天から至高天まで、九つの天球を上昇するダンテとベアトリーチェ。各天球で出会う聖者たちとの対話は、中世神学と哲学の精髄を凝縮している。しかし天国篇の真の主題は知識ではなく、愛である。
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              最終歌で、ダンテはついに神の本質を直視する。三位一体の神秘、そしてその中心に人間の姿を見出す瞬間は、キリスト教神秘主義の究極の表現だ。そして詩は「太陽とその他の星々を動かす愛」という一行で幕を閉じる。
            </p>

            <div className="bg-paradiso-gold/10 border-l-2 border-paradiso-gold p-6 my-8">
              <p className="text-white/70 italic">
                「神曲の最後の言葉が『愛』であることは偶然ではない。地獄の門から始まった旅は、愛の認識と愛への帰還で終わる。これこそが人間の魂の究極の目的なのだ。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 px-6 bg-parchment relative">
        <div className="max-w-3xl mx-auto">
          <p className="text-center font-cormorant text-ink/60 tracking-[0.2em] uppercase text-sm mb-6">終章</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-12 text-ink">現代に生きる神曲</h2>

          <div className="prose prose-lg max-w-none text-ink/80 leading-relaxed">
            <p className="text-lg mb-6">
              700年を経た今日、『神曲』を読むことにどのような意味があるのだろうか。中世の宇宙観も、トマス・アクィナスの神学も、現代の私たちには遠い存在に感じられるかもしれない。
            </p>
            <p className="text-lg mb-6">
              しかし、人生の道半ばで迷い、暗い森をさまよう経験は、現代人にとっても普遍的なものだ。自分の罪と向き合い、それを浄化し、より高い境地を目指すという精神的遍歴は、時代を超えて人間の本質的な営みである。
            </p>
            <p className="text-lg mb-6">
              『神曲』は、人間の魂が辿りうる最も深い谷底から最も高い頂までを描き切った、人類の精神的遺産である。それは中世の作品でありながら、今なお私たちに語りかけ、私たちを導き、私たちを変容させる力を持っている。
            </p>

            <div className="text-center mt-12 pt-8 border-t border-ink/10">
              <p className="font-cormorant text-xl italic text-ink/60">
                「星々を再び見ることができた」<br />
                <span className="text-base not-italic">— 地獄篇 最終行</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Translation Preview */}
      <section className="py-24 px-6 bg-parchment relative">
        <div className="max-w-3xl mx-auto">
          <p className="text-center font-cormorant text-ink/60 tracking-[0.2em] uppercase text-sm mb-6">現代語訳</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-12 text-ink">H.F.ケアリー英訳より</h2>

          <div className="bg-white/80 backdrop-blur border border-ink/10 p-8 md:p-12 shadow-lg">
            <h3 className="font-cormorant text-xl text-ink mb-6">
              {divinaCommediaStoryData.chapters[0]?.title}
            </h3>
            <div className="text-ink/80 leading-loose text-lg mb-8">
              <p>{previewText}</p>
            </div>

            <div className="text-center pt-6 border-t border-ink/10">
              <Link
                to="/divina-commedia/story"
                className="inline-block px-8 py-3 border border-ink text-ink font-cormorant tracking-wider hover:bg-ink hover:text-parchment transition-colors"
              >
                全文を読む
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-ink text-white/60">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cormorant text-2xl text-paradiso-gold mb-4">神曲への旅路</p>
          <p className="font-cormorant italic text-white/40 mb-8">La Divina Commedia</p>

          <div className="flex justify-center gap-8 mb-8 text-sm">
            <a href="#inferno" className="hover:text-inferno-ember transition-colors">地獄篇</a>
            <span className="text-white/20">|</span>
            <a href="#purgatorio" className="hover:text-purgatorio-rose transition-colors">煉獄篇</a>
            <span className="text-white/20">|</span>
            <a href="#paradiso" className="hover:text-paradiso-gold transition-colors">天国篇</a>
          </div>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8" />

          <p className="text-xs text-white/30 mb-8">
            Dante Alighieri (1265-1321) — "L'amor che move il sole e l'altre stelle"
          </p>

          <div className="text-xs text-white/30 mb-8 max-w-2xl mx-auto leading-relaxed">
            <p className="mb-2">
              英訳テキスト: H.F. Cary訳 "The Vision of Hell, Purgatory, and Paradise"
            </p>
            <p>
              This eBook is for the use of anyone anywhere at no cost and with almost no restrictions whatsoever.
              You may copy it, give it away or re-use it under the terms of the{' '}
              <a
                href="https://www.gutenberg.org/license"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paradiso-gold/70 hover:text-paradiso-gold underline"
              >
                Project Gutenberg License
              </a>.
            </p>
          </div>

          <Link
            to="/"
            className="inline-block px-6 py-2 border border-paradiso-gold/50 text-paradiso-gold hover:bg-paradiso-gold/10 transition-colors text-sm tracking-wider"
          >
            Library に戻る
          </Link>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}
