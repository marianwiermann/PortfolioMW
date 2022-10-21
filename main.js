const menuItem = document.querySelectorAll('.inicial a')

menuItem.forEach(item => {
  item.addEventListener('click', scroolToIdOnClick)
})

function getScroolTopHref(element) {
  const id = element.getAttribute('href')
  return (to = document.querySelector(id).offsetTop)
}

function scroolToIdOnClick(event) {
  event.preventDefault()
  const to = getScroolTopHref(event.target) - 50
  scroolToPosition(to)
}

function scroolToPosition(to) {
  window.scroll({
    top: to,
    behavior: 'smooth'
  })
}
