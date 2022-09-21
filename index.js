const menu_btn = document.querySelector('.menu')
const menu_items = document.querySelector('.menu-link')
const mobile_nav_btn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
const close_btn = document.querySelector('.close-btn')


menu_btn.onclick = function () {
  menu_items.classList.toggle('activ')
}

/*mobile_nav_btn.onclick = function () {
  nav.classList.add('active_nav')
}
console.log(mobile_nav_btn, nav)*/

mobile_nav_btn.addEventListener('click', () =>{
  nav.style.left = '0'
})

close_btn.addEventListener('click', () =>{
    nav.style.left = '-100%'
})

