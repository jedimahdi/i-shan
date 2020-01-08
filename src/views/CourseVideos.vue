<template>
  <section class="course-videos">
    <LoadingSpinner asOverlay="true" v-if="isLoading" />
    <div v-if="!isLoading">
      <div class="course-accordion">
        <Accordion
          id="accordion-example-2"
          :content="weeks"
          :initActive="activeDay"
          @changeActive="onChangeActive"
        ></Accordion>
      </div>
      <div class="course-video">
        <video
          v-if="activeDay !== null"
          muted="muted"
          controls
          :src="'http://136.243.32.172' + activeDay.vid"
          id="videoPlayer"
        >
          <!-- <source  /> -->
        </video>

        <Box>
          <div class="description-top">
            <h5>{{ activeDay.title }}</h5>
            <div class="description-link">
              <a href="#"
                >دانلود فایل تمرین <span class="lnr lnr-download"></span
              ></a>
              <a href="#">
                ارسال فایل تمرین <span class="lnr lnr-upload"></span
              ></a>
            </div>
          </div>
          <div class="description-text">
            <p>{{ activeDay.desc }}</p>
          </div>
        </Box>
      </div>
    </div>
  </section>
</template>

<script>
import Accordion from "../components/Accordion/Accordion";
import Box from "../components/Box/Box";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
// import Hls from 'hls.js';
// import crypto from "crypto-js";
// import axios from "axios";

// const exampleData = [
//   {
//     id: 1,
//     active: false,
//     title: "مدلینگ اجسام سخت",
//     details: `
//       <ul>
//       <li><a href="#">مدلینگ اجسام سخت</a></li>
//       <li><a href="#">مدلینگ اجسام سخت</a></li>
//       <li><a href="#">مدلینگ اجسام سخت</a></li>
// </ul>
//     `
//   },
//   {
//     id: 2,
//     active: true,
//     title: "مدلینگ اجسام سخت",
//     details: `
//       <ul>
//       <li><a href="#">مدلینگ اجسام سخت</a></li>
//       <li class="active"><a href="#">مدلینگ اجسام سخت</a></li>
//       <li><a href="#">مدلینگ اجسام سخت</a></li>
// </ul>
//     `
//   },
//   {
//     id: 3,
//     active: false,
//     title: "مدلینگ اجسام سخت",
//     details: `
//       <ul>
//       <li><a href="#">مدلینگ اجسام سخت</a></li>
//       <li><a href="#">مدلینگ اجسام سخت</a></li>
//       <li><a href="#">مدلینگ اجسام سخت</a></li>
// </ul>
//     `
//   }
// ];

export default {
  name: "CourseVideos",
  components: {
    Accordion,
    Box,
    LoadingSpinner
  },
  data: function() {
    return {
      weeks: [],
      course: {},
      activeDay: null,
      isLoading: true
    };
  },
  mounted() {
    const course = this.$store.state.courses.find(
      course => course.title === this.$route.params.course_title
    );

    this.course = course;

    let i = 0;

    const course_weeks = course.weeks;
    let weeks = [];
    for (let week in course.weeks) {
      // if (course_weeks[week]) {
      i += 1;
      //   let details = "<ul>";
      //   for (let day in course_weeks[week]) {
      //     details += `<li><a href="#">${course_weeks[week][day].title}</a></li>`;
      //   }
      //   details += "</ul>";

      weeks.push({
        title: "هفته " + i,
        details: course_weeks[week],
        active: i === 1,
        id: i
      });
      // }
    }
    // const weeks = course.weeks.map(week => {

    //   console.log(week);
    // });

    this.weeks = weeks;
    this.activeDay = weeks[0].details[1];

    this.isLoading = false;
    // console.log(course);

    // const video = document.getElementById("videoPlayer");
    // console.log(video);
    // const hls = new Hls({
    //   enableSoftwareAES: true,
    // });
    // console.log(Buffer.from(iv), Buffer.from(key, "hex"));
    // const decipher = crypto.createDecipheriv(
    //   "aes-256-cbc",
    //   Buffer.from(key, "hex"),
    //   Buffer.from(iv)
    // );
    // axios.get("http://localhost:3000/video").then(() => {
    //   var encrypted = crypto.AES.encrypt("Message", "ishan");
    //   var bytes = crypto.AES.decrypt(encrypted, "ishan");
    //   console.log(bytes.words.toString(crypto.enc.Utf8));
    //   // console.log(JSON.parse(bytes.toString()))
    //   const d = bytes.toString(crypto.enc.Utf8);
    //   console.log(d);
    //   // const decrpy_data = JSON.parse('[' + bytes.words.toString(crypto.enc.Utf8) + ']');
    //   // console.log(decrpy_data)
    //   // console.log(data)
    //   // decipher.setAutoPadding(true);
    //   // let decrypt = decipher.update(data, "base64", "utf8");
    //   // decrypt += decipher.final();
    //   // console.log(decrypt)
    // });
  },
  methods: {
    onChangeActive(id) {
      const course_weeks = this.course.weeks;
      for (let week in course_weeks) {
        for (let day in course_weeks[week]) {
          if (course_weeks[week][day].vid == id) {
            this.activeDay = course_weeks[week][day];
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.course-videos {
  display: flex;
}
.course-accordion {
  width: 300px;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100px;
  box-shadow: -2px 2px 6px rgba(10, 10, 10, 0.2);
  box-sizing: border-box;
  border-right: 4px solid #eb6d33ff;
}

.course-video {
  padding: 40px;
  padding-right: 330px;
  padding-bottom: 0;
}
#videoPlayer {
  width: 100%;
  margin-bottom: 40px;
}

.description-top {
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #f37035ff;
  padding-bottom: 10px;
}

.description-top h5 {
  font-size: 19px;
  color: #f37035ff;
  padding-bottom: 5px;
}

.description-link a {
  font-size: 17px;
  text-decoration: none;
  color: #8f9199ff;
  margin-left: 20px;
}

.description-link a span.lnr {
  font-size: 24px;
  padding-right: 10px;
  position: relative;
  top: 5px;
  color: #191e2eff;
}
.description-text {
  height: 210px;
  overflow-y: auto;
}
</style>
