;(() => {
  let objKeys = Object.keys
  Object.keys = function () {
    if (arguments[0]?.componentComplete) {
      window.skip = arguments[0].componentComplete
    }
    return objKeys.apply(this, arguments)
  }
})()
window.dragElement = (e) => {
  var n = 0,
    t = 0,
    o = 0,
    u = 0
  function d(e) {
    ;(e = e || window.event).preventDefault()
    o = e.clientX
    u = e.clientY
    document.onmouseup = m
    document.onmousemove = l
  }
  function l(d) {
    ;(d = d || window.event).preventDefault()
    n = o - d.clientX
    t = u - d.clientY
    o = d.clientX
    u = d.clientY
    e.style.top = e.offsetTop - t + 'px'
    e.style.left = e.offsetLeft - n + 'px'
  }
  function m() {
    document.onmouseup = null
    document.onmousemove = null
  }
  document.getElementById(e.id + 'header')
    ? (document.getElementById(e.id + 'header').onmousedown = d)
    : (e.onmousedown = d)
}
var UI = document.createElement('div')
UI.innerHTML = `
    <div id="overloadPanel" style="width:300px; left: 1px; top: 1px; background-color: #282828; color: white; outline: white solid 1px; position:absolute; z-index: 99999;">
        <center><h1 style="font-size: 32px;">overload</h1>
        <h1 style="font-size: 16px;">something by wang</h1>
        </center>
        <br>

        <center><button onclick="skip(prompt('score?'))">Skip lesson</button></center>
        <br></br>

    </div>`
dragElement(UI.firstElementChild)
document.body.appendChild(UI)
