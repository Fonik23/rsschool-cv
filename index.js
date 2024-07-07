const aboutMenu = document.querySelector('.navigation__item_about');
const langMenu = document.querySelector('.navigation__item_lang');
const expMenu = document.querySelector('.navigation__item_exp');
const educMenu = document.querySelector('.navigation__item_educ');
const skillsMenu = document.querySelector('.navigation__item_skills');


const aboutBlock = document.querySelector('.about-me')
const langBlock = document.querySelector('.languages')
const expBlock = document.querySelector('.exp__inner')
const educBlock = document.querySelector('.education__inner')
const skillsBlock = document.querySelector('.my-skills__inner')


aboutMenu.addEventListener("mouseover", () => {
  aboutBlock.classList.add('hover')
})
aboutMenu.addEventListener("mouseout", () => {
  aboutBlock.classList.remove('hover')
})

langMenu.addEventListener("mouseover", () => {
  langBlock.classList.add('hover')
})
langMenu.addEventListener("mouseout", () => {
  langBlock.classList.remove('hover')
})


//Right
expMenu.addEventListener("mouseover", () => {
  expBlock.classList.add('hover')
})
expMenu.addEventListener("mouseout", () => {
  expBlock.classList.remove('hover')
})

educMenu.addEventListener("mouseover", () => {
  educBlock.classList.add('hover')
})
educMenu.addEventListener("mouseout", () => {
  educBlock.classList.remove('hover')
})

skillsMenu.addEventListener("mouseover", () => {
  skillsBlock.classList.add('hover')
})
skillsMenu.addEventListener("mouseout", () => {
  skillsBlock.classList.remove('hover')
})