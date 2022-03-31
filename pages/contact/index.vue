<template>
  <div>
    <div class="contact">
      <!-- title -->
      <div class="contact-title">お問い合わせ</div>
      <!-- form -->
      <form
        class="contact-form-wrap"
        method="post"
        novalidate="true"
        @submit.prevent
      >
        <!-- description -->
        <div class="contact-form-description">
          当サイトやC3へのお問い合わせ、ご希望などございましたら、以下のフォームよりご連絡ください。内容を確認しメールにて連絡致します。
        </div>
        <!-- name -->
        <div class="contact-form">
          <div class="contact-form-text">お名前</div>
          <div
            class="contact-form-input"
            :class="{ 'contact-form-input-error': nameError }"
          >
            <input v-model="name" type="text" />
          </div>
          <div v-if="nameError" class="contact-form-error">
            {{ nameComment }}
          </div>
        </div>
        <!-- email -->
        <div class="contact-form">
          <div class="contact-form-text">メールアドレス</div>
          <div
            class="contact-form-input"
            :class="{ 'contact-form-input-error': emailError }"
          >
            <input v-model="email" type="email" />
          </div>
          <div v-if="emailError" class="contact-form-error">
            {{ emailComment }}
          </div>
        </div>
        <!-- contact -->
        <div class="contact-form">
          <div class="contact-form-text">お問い合わせ内容</div>
          <div
            class="contact-form-input"
            :class="{ 'contact-form-input-error': messageError }"
          >
            <textarea v-model="message" />
          </div>
          <div v-if="messageError" class="contact-form-error">
            {{ messageComment }}
          </div>
        </div>
        <!-- button -->
        <div class="contact-form-submit">
          <button @click="submit">送信</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // components: { Header, Footer },
  data() {
    return {
      // value
      name: '',
      email: '',
      message: '',
      // error boolean
      nameError: false,
      emailError: false,
      messageError: false,
      // error message
      nameComment: '*お名前を入力してください',
      emailComment: '*メールアドレスを入力してください',
      messageComment: '*お問い合わせ内容を入力してください',
    }
  },
  head() {
    return {
      title: 'お問合せ | 入力フォーム',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'お問い合わせ | お問合せ情報の入力ページ',
        },
      ],
    }
  },
  methods: {
    submit() {
      this.checkForm()
      this.transition()
      this.send()
    },
    checkForm() {
      // name
      !this.name ? (this.nameError = true) : (this.nameError = false)
      // email
      if (!this.email) {
        this.emailError = true
        this.emailComment = '*メールアドレスを入力してください'
      } else if (!this.validEmail(this.email)) {
        this.emailError = true
        this.emailComment = '*メールアドレスの形式で入力してください'
      } else {
        this.emailError = false
      }
      // message
      !this.message ? (this.messageError = true) : (this.messageError = false)
    },
    validEmail(email) {
      const regex =
        /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
      return regex.test(email)
    },
    transition() {
      if (!this.nameError & !this.emailError & !this.messageError)
        this.$router.push('/contact/thanks')
    },
    send() {
      /* ここにバックエンド側への送信を行い，自動でメール送信をする処理を入れてほしい */
    },
  },
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
  padding: 100px 0 50px 0;
}
/* title */
.contact-title {
  font-size: $font-size-other-title;
  color: $base-font-color;
  margin-left: min(5vw, 100px);
  display: inline;
}

/* form */
.contact-form-wrap {
  width: min(90vw, 1000px);
  text-align: center;
  margin: 30px auto;
  padding: 50px 0;
  border-radius: 30px;
  box-shadow: 0 0 8px #00000029;
}

/* description */
.contact-form-description {
  width: 80%;
  margin: 50px auto;
  font-size: $font-size-other-contents-description * 0.8;
  text-align: left;
}

/* category */
.contact-form {
  width: 80%;
  margin: min(5vw, 30px) auto;
}
.contact-form-text {
  margin: 0 auto;
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
  font-family: 'Inter', '游ゴシック';
  font-size: $font-size-other-contents-title * 0.5;
  color: $base-font-color;
  padding: 20px 2.5%;
}
.contact-form-input input:focus,
.contact-form-input textarea:focus {
  border: solid 1px #4949ff;
}
.contact-form-input textarea {
  min-height: 4vh;
  resize: vertical;
  height: min(30vw, 300px);
}
.contact-form-input textarea::-webkit-scrollbar {
  display: none;
}
.contact-form-error {
  margin: 0 auto;
  width: 100%;
  font-size: $font-size-other-contents-description * 0.5;
  color: #ff2244;
  text-align: left;
  font-weight: bold;
}
.contact-form-input-error input,
.contact-form-input-error textarea {
  border: solid 2px #ff2244;
}
.contact-form-input-error input:focus,
.contact-form-input-error textarea:focus {
  border: solid 2px #ff2244;
}

/* button */
.contact-form-submit {
  text-align: center;
}
.contact-form-submit button {
  font-size: $font-size-other-contents-title;
  color: $base-font-color;
  background: transparent;
  border: solid 2px $gray;
  border-radius: 8px;
  cursor: pointer;
  padding: 5px min(5vw, 50px);
}
.contact-form-submit button:hover {
  color: $white;
  background: $gray;
  transition: 0.3s ease;
}
</style>
