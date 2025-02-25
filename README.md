# React Twitter

- ReactとFirebaseを利用したリアルタイムTwitterプロジェクトです
- Hosting URL: [https://react-twitter-app-da482.web.app](https://react-twitter-app-da482.web.app/)


# プロジェクトのセットの説明

## 主な機能

- 状態管理とリアルタイムデータ更新の理解
- リアルタイム更新とプッシュ通知
- フォロー機能
- タイムラインとフィルタリング機能

## 状態管理

- Recoil, React Context API
- 認証管理
- 多言語対応機能


## API

- Firebase Storageを利用した画像アップロード
- Firebase Authenticationを利用したユーザー認証
- Firestoreを利用したリアルタイムデータ同期・保存・管理（onSnapshotを使用）

## 使用技術

- React
- Firebase（ログイン、セキュリティ、通信）
- SCSS
- Recoil
- Vercel

## その他の学習内容

- フォルダ構成
- CRAを利用したプロジェクト設定
- React Hooks（useEffect, useState, useContext, useCallback）
- React Router（react-router-dom）によるルーティング
- Recoilを利用したグローバル状態管理
- SCSSを使用したスタイリング

# 実装機能

1. ホームタイムライン
- Firestoreのリアルタイムデータを表示
- Reactコンポーネントを利用したツイート表示

2. ツイート作成・編集ページ
- 画像アップロードのCRUD
- テキストのCRUD

3. SNSログイン・会員登録機能
- 基本的なログイン・会員登録機能
- OAuthを利用したSNSログイン・会員登録

4. ユーザープロフィールページ
- マイページのようなプロフィールページを作成
- いいねした投稿の一覧表示
- プロフィール画像の変更

5. ハッシュタグ作成＆検索ページ
- 投稿作成時にハッシュタグを生成・編集
- ハッシュタグのみを検索できるタブを実装

6. Recoilを利用したグローバル状態管理
- 多言語対応機能を実装


## その他の機能

1. 多言語（日本語・英語）
2. いいね
3. コメント
4. フォロー・フォロワー
5. レスポンシブWebデザイン
