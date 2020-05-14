// Обработка событий
const btn = document.querySelector('button');
const link = document.querySelector('a');
// btn.addEventListener('click', function (e) {
//     console.log(e);
// });

// btn.addEventListener('click', (e) => {
//     console.log(this);
// });

// function clickFunction (e) {
//     e.preventDefault();
//     console.log('link');
// }
//
// link.addEventListener('click', clickFunction );
//
// link.removeEventListener('click', clickFunction);

const container = document.querySelector('.container');

btn.addEventListener('click', e => {
   const div = document.createElement('div');
   const nestedBtn = document.createElement('button');
   div.textContent = Math.random();
   nestedBtn.textContent = 'Button';
   div.appendChild(nestedBtn);
   container.appendChild(div);
});

container.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.tagName === 'BUTTON'){
        console.log('Button clicked!!!');
    }
});


