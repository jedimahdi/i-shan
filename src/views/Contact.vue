<template>
  <section class="contact">
    <div class="contact-form">
      <h4>با ما در تماس باشید</h4>
      <small>نظرات و پیشنهادات خود را بیان بفرمایید</small>
      <form v-on:submit.prevent="handleSubmit">
        <input type="text" v-model="title" placeholder="عنوان" />
        <textarea
          name="body"
          v-model="body"
          id="comment"
          cols="30"
          rows="10"
          placeholder="نظرات و پیشنهادات"
        ></textarea>
        <button type="submit">ارسال</button>
      </form>
    </div>
    <div class="contact-info">
      <h5>تماس با ما</h5>
      <ul>
        <li>
          <span class="lnr lnr-map-marker"></span>
          <span> ستارخان, جنب نشاط</span>
        </li>
        <li>
          <span class="lnr lnr-envelope"></span> <span>i_shan@gmail.com </span>
        </li>
        <li><span class="lnr lnr-phone"></span> <span>۰۲۱۶۶۹۲۵۷۲۴ </span></li>
        <li><span class="lnr lnr-earth"></span> <span>i-shan.com</span></li>
      </ul>
    </div>
  </section>
</template>

<script>
// import axios from "axios";
// import { API_BASE_URL } from "../../vars";
import api from "../utils/api";

export default {
  name: "Contact",
  data: function() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    handleSubmit: function() {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      };
      api
        .post(
          "mail/send",
          { title: this.title, body: this.body, to: "admin" },
          { headers }
        )
        .then(res => {
          this.title = "";
          this.body = "";
        });
    }
  }
};
</script>

<style scoped>
.contact {
  background-color: #f3f3f5ff;
  width: 600px;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(10, 10, 10, 0.2);
  padding: 50px 50px 50px 0;
  display: flex;
  justify-content: space-between;
  margin: auto;
  position: relative;
  top: 100px;
}

.contact-form {
  text-align: center;
}

.contact-form h4 {
  color: #42b547ff;
  font-size: 24px;
}

.contact-form small {
  color: #42b547ff;
  font-size: 18px;
  font-weight: 300;
}

.contact-form input {
  display: block;
  border: 0;
  border-radius: 10px;
  padding: 5px 15px;
  text-align: center;
  background-color: #e3e3e3ff;
  font-size: 16px;
  margin: 20px auto;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #c4c4c4ff;
}

.contact-form textarea {
  text-align: center;
  border: 0;
  background-color: #e3e3e3ff;
  border-radius: 10px;
  font-size: 16px;
}

.contact-form button {
  display: block;
  margin: auto;
  border: 0;
  background-color: #42b547ff;
  color: #fff;
  padding: 5px 25px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.contact-info {
  background-color: #191e2eff;
  border-radius: 20px;
  padding: 50px;
  margin-left: -30px;
}

.contact-info h5 {
  color: #fff;
  text-align: center;
  font-size: 24px;
  margin-bottom: 50px;
}

.contact-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #a5a6abff;
}
.contact-info ul li {
  display: flex;
}
.contact-info ul li span {
  font-size: 17px;
}

.contact-info ul li span.lnr {
  font-size: 24px;
  padding-bottom: 25px;
  padding-left: 15px;
}
</style>
