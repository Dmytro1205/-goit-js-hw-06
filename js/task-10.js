function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const control = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


createBtn.addEventListener('click', () => createBox(control.value));
destroyBtn.addEventListener('click', destroyBox);
function createBox(amount){
  for (let i = 0; i < amount; i+= 1) {
    const div = document.createElement('div')
    const size = 30 + i * 10;
    const color = getRandomHexColor()
    
    div.style.height = size + 'px';
    div.style.width = size + 'px';
    div.style.backgroundColor= color
    boxes.append(div)
  }
}
function destroyBox() {
  boxes.innerHTML= '';
}