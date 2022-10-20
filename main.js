// const menuItem = document.querySelectorAll('.inicial a')

// menuItem.forEach(item => {
//   item.addEventListener('click', scroolToIdOnClick)
// })

// function scroolToIdOnClick(event) {
//   const element = event.target
//   const id = element.getAttribute('href')
//   const to = document.querySelector(id).offsetTop

//   console.log(id)
// }

window.scrollTo(0, document.getElementById('menu').offsetTop - 100)
