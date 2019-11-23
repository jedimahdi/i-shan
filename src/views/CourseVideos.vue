<template>
  <section class="course-videos">
    <div class="course-accordion">
      <Accordion id="accordion-example-2" :content="example"></Accordion>
    </div>
    <div class="course-video">
      <video muted="muted" controls id="videoPlayer">
        <source src="http://localhost:3000/video" type="video/mp4" />
      </video>

      <Box>
        <div class="description-top">
          <h5>رشته انیمیت ۳ بعدی</h5>
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
          <p>
            انیمیشن (به انگلیسی: Animation) نمایشِ تُند و پیوستهٔ تصاویری از
            اثرِ هنریِ دوبعدی، یا موقعیت‌های مدل‌های واقعی، برای ایجاد توهم حرکت
            است.[ب] حرکت روان تصاویرِ پویا در پویانمایی‌ها، ناشی از یک خطای دید
            است که به دلیل پدیدهٔ ماندگاری تصاویر پدید می‌آید.
          </p>

          <p>
            پویانمایی می‌تواند در قالب هر دو رسانهٔ آنالوگ مانند فیلم متحرک،
            نوار ویدئو یا در رسانه‌های دیجیتال؛ پویانمایی فِلش، ویدئوی دیجیتال
            ضبط شده یا "GIF" پویا باشد. برای نمایشِ پویانمایی می‌توان از یک
            دوربین، رایانه یا یک پروژکتور با فن‌آوری‌های نو استفاده کرد.
            رایج‌ترین روش برای نمایش پویانمایی، سینما یا ویدئو است. یک
            پویانمایی، به دو روشِ سنتی و روش دیجیتال ایجاد می‌شود. اِستاپ‌موشن
            شیوه‌ای از پویانمایی است که در آن با جابجایی یا تغیرِ مکان، شکل یا
            حالتِ اشیاء به صورت دو یا سه بعدی با استفاده از برشِ لبه‌های کاغذ،
            رنگ‌آمیزیِ فیلم‌های شفاف یا عروسک؛ و ثبت هر لحظه از قاب به شکل یک
            تصویر، و نمایشِ پیوسته تصاویر جایگزین شده، با تصاویر قبلی و معمولاً
            با ۲۴، ۲۵، ۳۰ یا ۶۰ قاب در ثانیه، یک اثر پویانمایی ایجاد می‌شود.
          </p>
        </div>
      </Box>
    </div>
  </section>
</template>

<script>
import Accordion from "../components/Accordion/Accordion";
import Box from "../components/Box/Box";

const exampleData = [
  {
    id: 1,
    active: false,
    title: "مدلینگ اجسام سخت",
    details: `
      <ul>
      <li><a href="#">مدلینگ اجسام سخت</a></li>
      <li><a href="#">مدلینگ اجسام سخت</a></li>
      <li><a href="#">مدلینگ اجسام سخت</a></li>
</ul>
    `
  },
  {
    id: 2,
    active: true,
    title: "مدلینگ اجسام سخت",
    details: `
      <ul>
      <li><a href="#">مدلینگ اجسام سخت</a></li>
      <li class="active"><a href="#">مدلینگ اجسام سخت</a></li>
      <li><a href="#">مدلینگ اجسام سخت</a></li>
</ul>
    `
  },
  {
    id: 3,
    active: false,
    title: "مدلینگ اجسام سخت",
    details: `
      <ul>
      <li><a href="#">مدلینگ اجسام سخت</a></li>
      <li><a href="#">مدلینگ اجسام سخت</a></li>
      <li><a href="#">مدلینگ اجسام سخت</a></li>
</ul>
    `
  }
];

export default {
  name: "CourseVideos",
  components: {
    Accordion,
    Box
  },
  data: function() {
    return {
      example: exampleData
    };
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
  padding-right: 350px;
  padding-bottom: 0;
}
#videoPlayer {
  width: 950px;
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
