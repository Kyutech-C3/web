# web

公式サイトのリニューアル版

# 役割分担
* Header：ふぃる先輩
![フロー1 - Google Chrome 9_19_2021 2_20_13 AM (2)](https://user-images.githubusercontent.com/65708479/133897178-74b9ceb9-452e-495b-aff2-b594e68e5d49.png)
* Footer：もおん(担当：ふぃる先輩)  
![フロー1 - Google Chrome 2021_09_06 22_49_23 (2)](https://user-images.githubusercontent.com/65708479/132235192-371ce95f-e4ff-4b40-9d66-a11f147e5cbb.png)
* トップページ(pages/index.vue)：シモ
    components/
    * TopTop.vue：ko_suke(担当：ふぃる先輩)
    * ![フロー1 - Google Chrome 2021_09_06 22_48_52 (2)](https://user-images.githubusercontent.com/65708479/132235269-f2a5018a-9a65-4b82-b750-2bc11cafbcd8.png)
    * TopAboutC3.vue：Kizuku(担当：鳩)
    * ![フロー1 - Google Chrome 2021_09_06 22_48_58 (2)](https://user-images.githubusercontent.com/65708479/132235320-764faf29-e38c-42ee-bfb2-25c2a0258c90.png)
    * TopAboutCommunity.vue：まつり(担当：シモ)
    * ![フロー1 - Google Chrome 2021_09_06 22_49_07 (2)](https://user-images.githubusercontent.com/65708479/132235334-e68e5503-8836-4bdb-a0ab-f48047816881.png)
    * TopCommunityLink.vue：オンコン(担当：シモ)
    * ![フロー1 - Google Chrome 2021_09_06 22_49_12 (2)](https://user-images.githubusercontent.com/65708479/132235359-92d1ccb0-e9f9-444a-b08e-6997dd8f6b71.png)
    * TopBlog.vue：Kouichi_T(担当：鳩)
    * ![フロー1 - Google Chrome 2021_09_06 22_49_20 (2)](https://user-images.githubusercontent.com/65708479/132235398-2bbd68bd-ba6d-4686-89bc-90c06dc260f5.png)
* C3について(pages/about/index.vue)  ：鳩屋敷
    components/
    * 必要に応じて作成
* お知らせ一覧(pages/news/index.vue)  ：まつり
    components/
    * 必要に応じて作成
* お知らせ詳細(pages/news/\_id.vue) ：ko_suke
    components/
    * 必要に応じて作成
* 各コミュニティーページ(pages/community/\_id.vue) ：Kizuku
    components/
    *　必要に応じて作成
* ブログ一覧(pages/blog/index.vue)  ：シモ
    components/
    * 必要に応じて作成
* ブログ詳細(pages/blog/_id.vue)      
    components/
    * シモ
* お問い合わせ(pages/contact/index.vue)  
    components/
    * ko_suke

# デザイン

## デザイン
以下のリンクで色やサイズ等の情報が確認できる。<br>　
[XD](https://xd.adobe.com/view/2ea8e9f6-2a78-4dc5-9ae5-4f44e2894818-7bfb/)

# CSS
## SCSSで値を変数化
今回共通化したいスタイルの値をSCSSの変数定義の機能を用いて変数化します。変数定義場所は
```
~/assets/stylesheets/variables.scss
```
## **SCSSの使用に当たって**
初めての人が何人かいるので、いきなりSCSSはきついと思います。なので、今回の開発は慣れていない人にそれぞれ、慣れている人がサポート役で対応する形で行っていこうと思います。それぞれのすべきことを下に書いておきます。

**慣れている人**：
* SCSSで各値の変数定義
* コードチェック
* 完成したら他の上回生にもコードチェックをお願いする。

**慣れていない人**：
* 役割部分のコーディング
* 質問があるときや分からい時は担当の人に聞くか、シモに聞くか、他の分かる人に聞く。
* 完成したら担当の人にコードをチェックしてもらう。

## SCSSの変数利用
例）定義されたフォントサイズの利用

```
font-size: $font-size-top-title;
```
例）定義された色の利用
```
color: $base-font-color;
```

# コンポーネント

## コンポーネントファイル
コンポーネントファイルはコンポーネントディレクトリ直下に作成

## コンポーネント命名規則
ページ名 + コンポーネント名
例）トップページのトップコンポーネント
```
TopTop.vue
```

例）ブログ一覧ページのカード一覧コンポーネント
```
BlogListCardList.vue
```
例）ブログ一覧ページのカードコンポーネント
```
BlogListCard.vue
```

## コンポーネント制作注意点
* widthは100%

# 開発の流れ

### 0. 初めに
1. それぞれのデバイスにこのリポジトリをクローンする。
```
$ git clone <URL>
```
2. プロジェクトファイル直下で各モジュールをインストールする。
```
$ npm install
```
### 1. コードを書く
1. GitHubで自分の行う作業をissueに書く。

2. 1.で立てたissue番号でdevelopブランチからブランチを切る。例）issue番号が#15の場合：ブランチ名は`issue15`

3. 2.で切ったブランチにチェックアウトし、担当コンポーネントのファイルで作業を行う。

### 2. コードを書いたら（完成してなくてもよい。キリがよかったら）
1. 変更をステージする。
```
$ git add <ステージするファイル名>
```
複数ある場合はファイル名の間に空白を入れる。
```
$ git add <ファイル名>　<ファイル名>
```

2. ステージした変更をコミットする。
```
$ git commit -m "[変更の種類] <変更内容>"
```

3. コミットした変更をプッシュする
```
$ git push origin <ブランチ名>
```

### 3. コードが完成したら（担当部分が完成）
1. 2.コードを書いたらを行う。
2. ブラウザーで[webリポジトリ](https://github.com/Kyutech-C3/web)にアクセスし、プルリクエストを出す。
3. プルリクエストがマージされたら作業終了


# Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
