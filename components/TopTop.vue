<template>
  <div>
    <div class="wrap">
      <div class="left-wrap">
        <div class="top-title">
          <div class="top-title-text">Composite</div>
          <div class="top-title-text">Computer</div>
          <div class="top-title-text">Club</div>
        </div>
        <div class="top-news-nav">
          <div class="top-news-flex-wrap">
            <div class="top-news-title">
              お知らせ
            </div>
            <div class="all-news-link">
              <a href="#">一覧を見る</a>
            </div>
          </div>
          <div class="top-news">
            <a href="#">2021.9.30 オフィシャルサイト更新！！</a>
          </div>
        </div>
      </div>
      <div class="right-wrap">
        <div class="carousel-nav">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  margin: 0;
  padding: 80px/*ヘッダーの高さ*/ 0 50px 0;
  background: white;
  color: gray;
  display: flex;
  height: cal(100vh - 80px/* ヘッダーの高さ */);
  font-family: 'Inter';
}
/* タイトル */
.top-title {
  margin: 0;
  padding: min(50px, 4vw) min(40px, 3.8vw) min(120px, 6.5vw) min(100px, 5.3vw);
}
.top-title-text {
  font-size: min(120px, 8vw);
  display: inherit;
  display: flex;
}
/* お知らせ */
.top-news-nav {
  margin: 0;
  padding: min(40px, 4vw) min(40px, 3.8vw) min(20px, 2vw) min(70px, 4.5vw);
  box-shadow: 1px 1px 5px 2px lightgray;
  border-radius: 0 20px 20px 0;
}
.top-news-flex-wrap {
  display: flex;
  vertical-align: middle;
}
.top-news-title {
  margin: 0;
  padding: 0;
  width: 70%;
  font-size: min(30px, 3.5vw);
}
.all-news-link {
  font-size: min(25px, 2.5vw);
  text-align: right;
}
.all-news-link a {
  color: gray;
}
.top-news {
  margin: 0;
  padding: min(50px, 4vw) min(30px, 1.5vw);
  font-size: min(23px, 2.5vw);
}
.top-news a {
  margin: 0;
  padding: min(20px, 2vw) min(40px, 3.8vw);
  text-decoration: none;
  color: gray;
  border: solid gray;
  border-width: 0.1vw;
  border-radius: 50px;
  display: inline;
  white-space: nowrap;
}
.top-news a:hover, .all-news-link a:hover {
  opacity: 0.5;
  transition: 0.3s ease;
}
/* カルーセル */
/* 今はまだ外枠だけ */
.carousel-nav {
  margin: min(50px, 4vw) min(100px, 5.3vw) min(100px, 5.3vw) min(100px, 5.3vw);
  background: gray;
  width: min(900px, 47vw);
  height: min(700px, 37vw);
  border-radius: 25px/25px;
  box-shadow: 8px 6px 6px lightgray;
}
</style>
