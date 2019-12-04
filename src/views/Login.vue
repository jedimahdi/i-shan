<template>
  <section class="login-page">
    <div class="login">
      <div class="site-info">
        <h1>ایشن</h1>
        <small>شرکت دانش و فناوری اینده روشن</small>
        <span>i-shan.ir</span>
      </div>
      <div class="login-form">
        <form>
          <div class="input-control">
            <label for="username"><span class="lnr lnr-user"></span></label>
            <input
              class="input-style-1"
              type="text"
              id="username"
              placeholder="نام کاربری"
            />
          </div>
          <div class="input-control">
            <label for="password"><span class="lnr lnr-lock"></span></label>
            <input
              class="input-style-1"
              type="text"
              id="password"
              placeholder="رمز عبور"
            />
          </div>
          <button class="login-button">ورود</button>
          <a href="#" class="forget-password"
            >رمز عبور خود را فراموش کرده اید؟
          </a>
        </form>
      </div>
    </div>
  </section>
</template>

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
  height: 200px;
  margin: auto;
  padding: 15px;
  display: flex;
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
</style>
