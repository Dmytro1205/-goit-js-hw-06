const countValue= document.querySelector("#value");
const btnDec= document.querySelector('[data-action="decrement"]')
const btnIncr = document.querySelector('[data-action="increment"]')
let counterValue = 0;
btnDec.addEventListener("click", () =>{
    counterValue-=1
    countValue.textContent= counterValue
})
btnIncr.addEventListener("click", () =>{
    counterValue+=1
    countValue.textContent= counterValue
})