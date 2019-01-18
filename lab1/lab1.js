document.addEventListener("DOMContentLoaded", () => {

  const table = document.getElementById('tableOfContents')
  const ul = document.createElement('ul')
  const anchors = document.querySelectorAll('h2')

  const button = document.createElement('button')
  const title = document.querySelector('h1')
  title.appendChild(button)

  button.addEventListener('click', (event) => {
    var toggle = document.getElementById('tableOfContents').style.visibility
    table.style.visibility == "hidden" ?
      table.style.visibility = "visible":
      table.style.visibility = "hidden"
  })

  table.appendChild(ul)
  for(a of anchors) {
    a.setAttribute("id", a.innerText)
    var aTag = document.createElement('a')
    aTag.setAttribute("href", "#" + a.innerText)
    var li = document.createElement('li')
    li.appendChild(aTag)
    aTag.innerText = a.innerText
    ul.appendChild(li)
  }
})
