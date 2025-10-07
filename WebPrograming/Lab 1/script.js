const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

burger.onclick = function () {

    let li = document.createElement('li');

    let a = document.createElement('a');
    a.innerHTML = '✖';
    a.href = '#';
    a.onclick = function(e) {
        e.preventDefault();
        location.reload();
    };

    li.appendChild(a);

    menu.appendChild(li);
};
