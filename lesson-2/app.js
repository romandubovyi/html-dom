//  Работа с атрибутами элементов
// Введение в DOM
const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
const h1 = document.getElementsByTagName('h1');

// console.log(div.classList);
div.classList.add('myClass', 'custom');
div.classList.remove('myClass');
// console.log(div.classList.contains('_custom'));
div.classList.toggle('toggle');
div.classList.toggle('toggle');
// console.log(div.classList);
// console.log(div.parentElement);

div.setAttribute("id", "myid");
// div.removeAttribute("id");
// console.log(div.hasAttribute("id"));
// const link = div.querySelector('.link');

// console.log(div.dataset.myattr);

const span = document.createElement('span');
span.textContent = 'content span';
span.classList.add = 'span slass';

const title = document.querySelector('h1');
// title.innerHTML = '<span>Span</span>';
// title.textContent = '<span>Span</span>';
title.appendChild(span);

// console.log(title.textContent);
// console.log(title.innerHTML);

//console.log(span);

const colors = ['red', 'black', 'green', 'orange'];
const container = document.querySelector('.container');
const fragment = document.createDocumentFragment();
const btn = document.createElement('button');
const btnCancel = document.createElement('button');
btn.textContent = 'Button';
btnCancel.textContent = 'Reset';
document.body.appendChild(btn);
document.body.appendChild(btnCancel);



btn.addEventListener('click', (e) => {
    container.appendChild(fragment);
});

btnCancel.addEventListener('click', (e) => {
    container.innerHTML = '';
});

colors.forEach(color => {
    const item = document.createElement('div');
    item.classList.add(`bg-${color}`);
    item.textContent = color;
    item.style.background = color;
    fragment.appendChild(item);
});

// container.appendChild(fragment);

