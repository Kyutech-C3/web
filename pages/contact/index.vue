<template>
  <div class="contact">
    <div class="contact-title">
      お問い合わせ
    </div>
    <div class="contact-form">
      <div class="contact-form-text">
        お名前
      </div>
      <div class="contact-form-input">
        <input id="name" type="text"/>
      </div>
      <div class="contact-form-text">
        メールアドレス
      </div>
      <div class="contact-form-input">
        <input id="email" type="email"/>
      </div>
      <div class="contact-form-text">
        お問い合わせ内容
      </div>
      <div class="contact-form-input">
        <input id="message" type="text"/>
      </div>
      <div class="contact-form-post">
        <button>送信</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact {
  background: $white;
  font-family: 'Inter', '游ゴシック';
  justify-content: center;
}

.contact-title {
  font-size: $font-size-other-title;
  color: $base-font-color;
}
.contact-form {
  width: 65%;
  text-align: center;
  margin: 0 auto;
}

.contact-form-text {
  width: 100%;
  font-size: $font-size-other-contents-title;
  color: $base-font-color;
  text-align: left;
}

.contact-form-input {
  width: 100%;
  text-align: center;
}

.contact-form-input input {
  width: 100%;
  background: #eeeeee;
  border: none;
  border-radius: 8px;
  font-size: $font-size-other-contents-title;
  color: $base-font-color;
}

.contact-form-post {
  text-align: center;
}
.contact-form-post button{
  font-size: $font-size-other-contents-title;
  color: $base-font-color;
  background: transparent;
  border: solid 2px $gray;
  border-radius: 8px;
  cursor: pointer;
}
</style>
