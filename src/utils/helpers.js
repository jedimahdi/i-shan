export const toPersianDigits = str => {
  const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]

  if (typeof str === "number") {
    str = str.toString()
  }
  return str.replace(/[0-9]/g, function(w) {
    return id[+w]
  })
}

const getToday = () => {
  const now = new Date().getDay() - 1

  if (now === -1) {
    return 6
  }

  return now
}

const getDiffDateFromNow = day => {
  const now = getToday()
  console.log("now : ", now)
  const LAST_DAY = 6
  const diff = day - now

  if (diff >= 0) {
    return diff
  } else {
    return LAST_DAY - now + day + 1
  }
}

const findMinArray = array => {
  let min = array[0]
  array.forEach(item => {
    if (item < min) {
      min = item
    }
  })

  return min
}

const getCourseRemainingDays = days => {
  const d = days.map(day => getDiffDateFromNow(day))
  console.log(d)
  return findMinArray(d)
}

export const normalizeCourses = courses => {
  return courses.map(course => {
    // const remaining_days =
    console.log(course)

    const keys = Object.keys(course.weeks)
    for (let i = 0; i < keys.length; i++) {
      if (course.weeks[keys[i]] === null) {
        return {
          ...course,
          remaining_percent: Math.round((i / keys.length) * 100),
          remaining_days: getCourseRemainingDays(course.days)
        }
      }
    }

    return {
      ...course,
      remaining_percent: 100,
      remaining_days: getCourseRemainingDays(course.days)
    }
  })
}
