const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

burger.onclick = function () {
    // Створюємо li
    let li = document.createElement('li');

    // Створюємо a всередину li
    let a = document.createElement('a');
    a.innerHTML = '✖';
    a.href = '#'; // посилання для семантики
    a.onclick = function(e) {
        e.preventDefault(); // запобігаємо переходу по #
        location.reload();  // перезавантажуємо сторінку
    };

    // Вставляємо a в li
    li.appendChild(a);

    // Вставляємо li в меню
    menu.appendChild(li);
};
