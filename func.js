const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navMenu = document.getElementsByClassName('menu')[0]

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active')
})