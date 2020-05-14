// Погружение и всплытие событий

const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');

btn.addEventListener('click', e => {
    // e.stopPropagation();
    console.log('click btn');
}, true);

wrap.addEventListener('click', e => {
    console.log('click wrap');
}, {capture: true});
