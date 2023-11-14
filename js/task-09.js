function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnColor = document.querySelector('.change-color')
const span = document.querySelector('.color')
const body = document.body

btnColor.addEventListener('click', ()=>{
  const random = getRandomHexColor()
  body.style.backgroundColor = random;
  span.textContent = random;
})