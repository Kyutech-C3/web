<template>
  <div class="contact">
    <div class="contact-title">
      お問い合わせ
    </div>
    <div class="contact-form-wrap">
      <div class="contact-form">
        <div class="contact-form-text">お名前</div>
        <div class="contact-form-input">
          <input id="name" type="text"/>
        </div>
      </div>
      <div class="contact-form">
        <div class="contact-form-text">メールアドレス</div>
        <div class="contact-form-input">
          <input id="email" type="email"/>
        </div>
      </div>
      <div class="contact-form">
        <div class="contact-form-text">お問い合わせ内容</div>
        <div class="contact-form-input">
          <textarea id="message"/>
        </div>
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
*:focus {
  outline: none;
}
.contact {
  max-width: 1920px;
  background: $white;
  font-family: 'Inter', '游ゴシック';
  justify-content: center;
  padding-top: 100px;
}
.contact-title {
  font-size: $font-size-other-title;
  color: $base-font-color;
  margin: 0 0 min(3vw, 50px) min(5vw, 100px);
}
.contact-form-wrap {
  width: min(70vw, 1200px);
  text-align: center;
  margin: 30px auto;
}
.contact-form {
  margin: min(5vw, 30px) 0;
}
.contact-form-text {
  margin: 0 0 0 10px;
  width: 100%;
  font-size: $font-size-other-contents-title;
  color: $base-font-color;
  text-align: left;
}
.contact-form-input {
  width: 100%;
  text-align: center;
}
.contact-form-input input,
.contact-form-input textarea {
  width: 95%;
  background: #eeeeee;
  border: solid 1px #eeeeee;
  border-radius: 8px;
  font-size: $font-size-other-contents-title;
  color: $base-font-color;
  padding: 10px;
}
.contact-form-input input:focus,
.contact-form-input textarea:focus {
  border: solid 1px $gray;
}
.contact-form-input textarea {
  resize: none;
  height: min(30vw, 300px);
}
.contact-form-input textarea::-webkit-scrollbar {
  display: none;
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
  padding: 5px min(5vw, 50px);
}
.contact-form-post button:hover {
  color: $white;
  background: $gray;
  transition: 0.3s ease;
}
</style>
