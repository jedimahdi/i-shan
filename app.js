const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let url
if (process.env.NODE_ENV === "DEV") {
  url = "http://localhost:8080/"
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

const reverseStr = str => {
  return str
    .split("")
    .reverse()
    .join("")
}

console.log(reverseStr(url))

app.on("ready", () => {
  let window = new BrowserWindow({ width: 1600, height: 800 })
  window.loadURL(url)
})
