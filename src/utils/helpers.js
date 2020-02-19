export const toPersianDigits = str => {
  const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]

  if (typeof str === "number") {
    str = str.toString()
  }
  return str.replace(/[0-9]/g, function(w) {
    return id[+w]
  })
}
export const normalizeCourses = courses => {
  return courses.map(course => {
    const keys = Object.keys(course.weeks)
    for (let i = 0; i < keys.length; i++) {
      if (course.weeks[keys[i]] === null) {
        return {
          ...course,
          remaining_percent: ((keys.length - i) / keys.length) * 100,
          remaining_days: 2
        }
      }
    }

    return {
      ...course,
      remaining_percent: Math.floor(Math.random() * 100),
      remaining_days: Math.floor(Math.random() * 20)
    }
  })
}
