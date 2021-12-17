const box = document.querySelectorAll('.box');

box.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.background == 'red'){
            item.style.background = 'blue';
            item.style.borderRadius = '50%';
        }else{
            item.style.background = 'red';
            item.style.borderRadius = '0%';
        }
    })
})