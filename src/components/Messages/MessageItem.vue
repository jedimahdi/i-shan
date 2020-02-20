<template>
  <tr :class="check ? 'checked' : ''">
    <td>
      <!-- <p-check class="p-svg p-curve " color="success">
        <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
          <path
            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
            style="stroke: white;fill:white"
          ></path>
        </svg>
      </p-check> -->

      <!-- <p-check name="check" v-model="check">Check</p-check> -->
      <p-check class="p-default" color="primary" v-model="check"></p-check>
    </td>
    <td>{{ message.title }}</td>
    <td>{{ normalizeText(message.body) }}</td>
    <td>{{ formatDate(message.date) }}</td>
  </tr>
</template>

<script>
import moment from "jalali-moment"
import { toPersianDigits } from "../../utils/helpers"

export default {
  name: "MessageItem",
  props: ["message"],
  data: function() {
    return {
      check: false
    }
  },
  methods: {
    toggle(event) {
      this.$parent.$children.forEach(item => {
        if (item.$el.id === event.currentTarget.id) {
          item.message.active = !item.message.active
        } else {
          item.message.active = false
        }
      })
    },
    normalizeText(text) {
      if (text) {
        return text.substring(0, 58) + " ..."
      }
      return text
    },
    formatDate(date) {
      moment.locale("fa", { useGregorianParser: true })

      return toPersianDigits(moment(date).format("jYYYY/jMM/jDD"))
    },
    toggleCheck() {
      this.check = !this.check
    }
  },
  computed: {}
}
</script>

<style>
/* .checked {
} */
/* .message-item {
  border-bottom: 1px solid #0c0f30ff;
  padding-bottom: 30px;
  padding-top: 20px;
  padding: 20px 20px 30px 20px;
  cursor: pointer;
}

.message-item:hover {
  background-color: #ccc;
}
.message-item:last-child {
  border: 0;
}

.message-item.active {
  background-color: #e3e3e3ff;
  border: 1px solid #0c0f30ff;
  border-bottom: 2px solid #0c0f30ff;
}

.message-item h5 {
  font-size: 17px;
  color: #8f9199ff;
} */
</style>
