# 舞姫 感想サイト - 本番用ファイル

## ファイル構成

```
maihime-production/
├── index.html          # メインHTML（CDN削除済み）
├── input.css           # Tailwind CSS入力ファイル
├── tailwind.config.js  # Tailwind設定ファイル
├── output.css          # ビルド後に生成される（要ビルド）
└── README.md           # このファイル
```

## セットアップ & ビルド方法

### 1. 依存関係のインストール

```bash
npm install
```

### 2. CSSのビルド（本番用）

```bash
npm run build
```

### 3. 開発時（ウォッチモード）

```bash
npm run dev
```

## 使用フォント

Google Fontsから以下のフォントを読み込んでいます：
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
