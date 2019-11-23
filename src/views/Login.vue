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
            <input class="input-style-1" type="text" placeholder="نام کاربری" />
          </div>
          <div class="input-control">
            <input class="input-style-1" type="text" placeholder="رمز عبور" />
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
  max-width: 520px;
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

.login-button {
  display: block;
  border-radius: 10px;
  background-color: #43b649ff;
  border: 0;
  color: #fff;
  padding: 5px 40px;
}

a.forget-password {
  color: #ee7338ff;
  text-decoration: none;
}
</style>
