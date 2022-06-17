const lis = document.getElementById('list');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const cloneLi = lis.firstElementChild.cloneNode(true);
const rads = document.getElementById('rad');
const radli = document.querySelectorAll('#rad li');
console.log(radli)
lis.appendChild(cloneLi);
cloneLi.innerText = '5';
let index = 0;
let lock = true;
rightBtn.addEventListener('click', () => {
    if (lock) {
        lock = false;   
        index++;
        lis.style.transition = 'all .5s ease';
        lis.style.transform = `translateX(-${20 * index}%)`
        if(index == 4) {
            setTimeout(() => {
                lis.style.transition = 'none';
                lis.style.transform = `translateX(0)`;
            }, 0)     
            index = 0;
        }
        console.log(index)
        radt();

        setTimeout(() => lock = true, 1000)
    }
}, false)
leftBtn.addEventListener('click', () => {
    if (lock) {
        lock = false;
        if (index == 0) {
            lis.style.transition = 'none';
            lis.style.transform = `translateX(-${20 * 4}%)`;
            setTimeout(() => {
                lis.style.transition = 'all .5s ease';
                index = 3;
                lis.style.transform = `translateX(-${20 * index}%)`
            }, 0)
        } else {
            index--;
            lis.style.transform = `translateX(-${20 * index}%)`;
        }
        setTimeout(() => lock = true, 1000)
        radt();
    }

}, false)


function radt() {
    radli.forEach((v, i) => {
        if (i == index % 4) {
            v.classList.add('current')
        } else {
            v.className = ''
        }
    })
}

