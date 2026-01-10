# Library - Book Reviews

古典文学の読書感想サイト。時を越えて読み継がれる名作たちへの感想を綴ります。

## 収録作品

| 作品 | 著者 | ステータス |
|------|------|----------|
| 舞姫 | 森鷗外 | 実装済み |
| 神曲 | ダンテ | Coming Soon |
| Faust | ゲーテ | Coming Soon |
| 人間失格 | 太宰治 | Coming Soon |

## 技術スタック

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Cloudflare Pages

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## デプロイ

```bash
npx wrangler pages deploy dist
```

## プロジェクト構成

```
book-city/
├── src/
│   ├── main.tsx              # エントリーポイント
│   ├── App.tsx               # ルーティング
│   ├── index.css             # Tailwind + カスタムスタイル
│   ├── components/           # 共通コンポーネント
│   │   ├── BookItem.tsx      # 本リストアイテム
│   │   ├── CharacterCard.tsx # キャラカード（感情ゲージ付き）
│   │   ├── GaugeBar.tsx      # ゲージバー
│   │   ├── Modal.tsx         # 汎用モーダル
│   │   ├── BackToTop.tsx     # トップへ戻るボタン
│   │   └── ScrollToTop.tsx   # ページ遷移時スクロールリセット
│   ├── pages/                # ページコンポーネント
│   │   ├── Library.tsx       # トップページ（本一覧）
│   │   ├── Maihime.tsx       # 舞姫感想ページ
│   │   └── ComingSoon.tsx    # 未実装ページ
│   └── data/                 # データファイル
│       ├── books.ts          # 本データ
│       ├── characters.ts     # キャラクターデータ
│       └── story.ts          # 現代語訳テキスト
├── public/
│   ├── favicon.webp          # ファビコン
│   └── images/               # 画像ファイル
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── wrangler.jsonc            # Cloudflare Pages設定
```

## 使用フォント

Google Fontsから読み込み：
- Shippori Mincho（しっぽり明朝）
- Noto Serif JP

## カスタムカラー

| 名前 | HEX | 用途 |
|------|-----|------|
| ink | #1a1a2e | メインテキスト |
| paper | #f5f0e8 | 背景色 |
| anger | #c41e3a | 怒りゲージ |
| sorrow | #1e3a5f | 哀しみゲージ |
| gold | #b8860b | アクセント |
