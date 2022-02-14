const stars = document.getElementById('stars')
const moon = document.getElementById('moon')
const mountains_front = document.getElementById('mountains_front')
const mountains_behind = document.getElementById('mountains_behind')
const btn = document.getElementById('btn')
const text = document.getElementById('text')
const header = document.querySelector('header')
const sec = document.getElementById('sec')

window.addEventListener('scroll', function() {
    let value = window.scrollY
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountains_behind.style.top = value * -0.05 + 'px'
    mountains_front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 3 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
    btn.style.marginTop = value * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
})

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function createItems(item) {
    div = document.createElement("div")
    div.appendChild(item)
    return div
}

const data = get("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
const dataJ = JSON.parse(data)
console.log(dataJ)

dataJ.forEach(element => {
    let item = createItems(element)
    sec.appendChild(item)
})