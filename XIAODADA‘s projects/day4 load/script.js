const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const liner = document.getElementById('liner');
const divs = document.querySelectorAll('.line div');
console.log(leftBtn, rightBtn, liner, divs)
let index = 0;
rightBtn.addEventListener('click', () => {
    if (index < 3) {
        index++;
        liner.style.width = `${index * 33}%`;
        divs[index].classList.add('current')
    }else{
        rightBtn.disabled = true
    }
}, false)
leftBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        liner.style.width = `${index * 33}%`;
        divs[index + 1].className -= 'current'
    }
}, false) 