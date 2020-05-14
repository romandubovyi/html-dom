// Введение в DOM
const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
const h1 = document.getElementsByTagName('h1');

console.log(div.parentElement);
const link = div.querySelector('.link');
console.log(link);
console.log(link.parentElement);
console.log(link.closest('.content'));

// console.log(Array.from(titles));
// console.log([...titles]);
// console.log(Array.prototype.slice.call(titles));
// console.dir(div);
// console.log(titles);
// console.log(h1);


