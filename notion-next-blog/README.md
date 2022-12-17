# Notion APIを使う

[Notion API](https://developers.notion.com/)

1.
[https://developers.notion.com/docs/getting-started](https://developers.notion.com/docs/getting-started)

2.
[https://www.notion.com/my-integrations](https://www.notion.com/my-integrations)

2.1
<img src="https://kenjimorita.jp/wp-content/uploads/2022/07/スクリーンショット-2022-07-30-23.17.58.png">

- 名前は notion next blog
- コンテンツを読み取るにチェックボタン(表示するだけなので)
- 「ユーザー情報なし」にチェック

<img src="https://kenjimorita.jp/wp-content/uploads/2022/07/スクリーンショット-2022-07-30-23.21.33.png">


- 送信

3.

<img src="https://kenjimorita.jp/wp-content/uploads/2022/07/スクリーンショット-2022-07-30-23.21.33.png" />

シークレットトークンが発行される
- env.localに

```
NOTION_KEY=secret__xxxx
```
貼り付ける

4.
notionにページをつける
/database
フルページ
データベース名を`Articles`などにする

share -> inviteのinputをクリック。integrationに今作ったものが出てくるのでクリック
そこのリンクをコピーする


5 `NOTION_DATABASE_ID`

https://www.notion.so/2a6246eaaeee3c5457f97d3b008d6c3d274?v=44ed0e6e8fb546c29f364dc43fa05dca

もしこれだったらドメインと?以降はいらない

`2a6246eaaeee3c5457f97d3b008d6c3d274`


6.
一度サーバーを止めて
`yarn dev`

データベースに
propertyを設定

```
name (Title)

tags (Multi-select)

slug (Text)

published (Date)

author (Text)

isPublic (Checkbox)

created (Created Time)
```

7.
JavaScript client: https://github.com/makenotion/notion-sdk-js

8.

 `yarn add -D @notionhq/client@1.0.4`

9. call client SDK

- query
 https://developers.notion.com/reference/post-database-query

 