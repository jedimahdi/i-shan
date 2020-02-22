<template>
  <section class="login-page">
    <div class="login">
      <div class="site-info">
        <img src="../assets/logo.svg" alt="Logo" class="login__logo" />
        <h1>ایشن</h1>
        <small>شرکت دانش و فناوری اینده روشن</small>
        <span>i-shan.ir</span>
      </div>
      <div class="login-form">
        <div class="alert alert-error" v-if="hasError">
          نام کاربری یا رمز عبور اشتباه است
        </div>
        <form v-on:submit.prevent="handleSubmit">
          <div class="input-control">
            <label for="username"><span class="lnr lnr-user"></span></label>
            <input
              class="input-style-1"
              type="text"
              id="username"
              placeholder="نام کاربری"
              v-model="mphone"
              required
              autofocus
            />
          </div>
          <div class="input-control">
            <label for="password"><span class="lnr lnr-lock"></span></label>
            <input
              class="input-style-1"
              type="password"
              id="password"
              placeholder="رمز عبور"
              v-model="pass"
              required
            />
          </div>
          <button class="login-button" type="submit">ورود</button>
          <a href="#" class="forget-password"
            >رمز عبور خود را فراموش کرده اید؟
          </a>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import api from "../utils/api"

export default {
  name: "Login",
  data: function() {
    return {
      mphone: "",
      pass: "",
      hasError: false,
      error: ""
    }
  },
  methods: {
    handleSubmit: function() {
      this.hasError = false
      api
        .post("login", {
          mphone: this.mphone,
          pass: this.pass
        })
        .then(res => {
          if (res.data.status === 400) {
            this.hasError = true
          } else {
            localStorage.setItem("jwt", res.data.access_token)
            localStorage.setItem("refresh_token", res.data.refresh_token)
            localStorage.setItem("user", JSON.stringify(res.data.user_data))
            localStorage.setItem("login_time", new Date())
            this.$router.push("/")
          }
        })
        .catch(err => {
          this.error = err
        })
    }
  }
}
</script>

<style>
.login-page {
  background-color: #1b202eff;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
.login {
  width: 100%;
  max-width: 620px;
  min-height: 200px;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.login-form form {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
}

.login-form input {
  font-size: 18px;
  color: #c4cec4ff;
}

.login-form input::placeholder {
  font-family: "Segoe UI";
  font-weight: 300;
}

.login-form .lnr {
  font-size: 24px;
  margin-left: 15px;
}

.login-button {
  display: block;
  border-radius: 20px;
  background-color: #43b649ff;
  border: 0;
  color: #fff;
  padding-bottom: 6px;
  width: 150px;
  margin: 0 auto;
  font-size: 18px;
  font-family: "Segoe UI";
}

a.forget-password {
  color: #ee7338ff;
  text-decoration: none;
  text-align: center;
}

.site-info {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  text-align: center;
}
.site-info span {
  display: block;
}

.login__logo {
  width: 90px;
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>
