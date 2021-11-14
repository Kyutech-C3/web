<template>
  <div class="contact-thanks-wrap">
    <!-- title -->
    <div class="contact-thanks-title">
      Thank you!
    </div>
    <!-- message -->
    <div class="contact-thanks-message">
      このたびはC3へのお問い合わせ、誠にありがとうございます。
      <br><br>
      メールフォームにご記入いただいたメールアドレスへ、お問い合わせ内容の確認メールをお送りいたしましたので、確認お願い致します。
      <br><br>
      1週間以内を目安に、C3部員の方からメールにて連絡いたします。
      <br><br>
      なお、5分以上経過しても確認メールが受信できない場合、お手数をおかけしますが、もう一度メールアドレスを確認し、お問い合わせ頂けますようお願い致します。
    </div>
    <!-- to home -->
    <div class="to-home-button">
      <nuxt-link to="/" class="to-home">
        Homeへ戻る
      </nuxt-link>
    </div>
    <!-- sns -->
    <div class="sns-wrap">
      <div class="sns-message">C3-SNS</div>
      <ul class="snslinks">
        <li v-for="(snslink, i) in snslinks" :key="i">
          <a :href="snslink.link">
            <font-awesome-icon :icon="snslink.icon" />
            {{ snslink.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snslinks:
      [
        {
          text: 'Toybox',
          link: '/',
          icon: 'box-open',
        },
        {
          text: 'Twitter',
          link: 'https://twitter.com/c3_kyutech',
          icon: ['fab', 'twitter'],
        },
        {
          text: 'GitHub',
          link: 'https://github.com/Kyutech-C3',
          icon: ['fab', 'github'],
        },
        {
          text: 'Youtube',
          link: 'https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw',
          icon: ['fab', 'youtube'],
        },
      ],
    }
  },
}
</script>


<style lang="scss" scoped>
.contact-thanks-wrap {
  padding: 150px 0 100px 0;
  text-align: center;
  display: grid;
  font-family: 'Inter', '游ゴシック';
}
/* title */
.contact-thanks-title {
  font-size: $font-size-other-title * 0.8;
  color: $base-font-color;
  display: inline;
  margin: 50px 0;
  font-weight: 700;
}
/* message */
.contact-thanks-message {
  font-size: $font-size-other-contents-description;
  color: $base-font-color;
  width: min(85vw, 800px);
  margin: 0 auto;
  text-align: left;
}
/* to home */
.to-home-button {
  margin: 50px 0;
}
.to-home {
  font-size: $font-size-other-contents-description;
  color: $base-font-color;
  border: solid 2px $gray;
  border-radius: 8px;
  padding: 5px min(5vw, 50px);
  text-decoration: none;
  width: 100px;
}
.to-home:hover {
  color: $white;
  background: $gray;
  transition: 0.3s ease;
}
/* sns */
.sns-wrap {
  margin: 0 auto;
  padding: 30px 50px;
  box-shadow: 0 0 8px #00000029;
  width: min(65vw, 500px);
}
.sns-message {
  color: $base-font-color;
  font-size: $font-size-other-contents-description * 0.8;
  margin-bottom: 20px;
}
.snslinks {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
}
.snslinks li {
  list-style: none;
  margin: 10px;
  padding: 0;
}
.snslinks a {
  text-decoration: none;
  color: $base-font-color;
  font-size: $font-size-other-contents-description * 0.5;
  padding: 10px;
  border: solid 1px $gray;
  white-space: nowrap;
}
.snslinks a:hover {
  color: $white;
  background: $gray;
  transition: 0.3s ease;
}
</style>
