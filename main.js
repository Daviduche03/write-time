console.log('Hello World!');

let menu = document.querySelector('#menu')
let nav = document.querySelector('.nav')
let con = document.querySelector('.logo')

menu.onclick = function () {
  menu.classList.toggle('openmenu')
  nav.classList.toggle('active')
}
