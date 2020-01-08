<template> <div></div></template>
<script>
import api from "../utils/api";

export default {
  mounted() {
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("refresh_token")}`
    };
    api.post("logout/refresh", {}, { headers }).then(() => {});

    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    };
    api.post("logout/access", {}, { headers }).then(() => {});

    // api.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${localStorage.getItem("refresh_token")}`;
    // api.post("logout/refresh").then(res => {
    //   console.log(res);
    // });

    localStorage.removeItem("jwt");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    this.$router.push("/login");
  }
};
</script>
