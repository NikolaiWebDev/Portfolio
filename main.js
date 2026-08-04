document.addEventListener('mousemove', (e)=>{
    if(e.clientX > window.innerWidth / 2){
    document.documentElement.style.setProperty("--main_opacity","1");
    document.documentElement.style.setProperty("--textShadow_angle","-10px 5px");
    }else{
    document.documentElement.style.setProperty("--main_opacity","0");
    document.documentElement.style.setProperty("--textShadow_angle","10px 5px")
    }
});
let ClientLanguage = "RU"


const TranslateBtn = document.getElementById('TranslateBtn');
const HiText = document.getElementById('HiText');
const MyNameText = document.getElementById('MyNameText');
const TextWebDeveloper = document.getElementById('TextWebDeveloper');
const WhatIdotext = document.getElementById('WhatIdotext');
const btnSeeProjects = document.getElementById('btnSeeProjects');
const technologyText = document.getElementById('technologyText');
const TextInProject1 = document.getElementById('TextInProject1');
const TextInProject2 = document.getElementById('TextInProject2');
const TextInProject3 = document.getElementById('TextInProject3');
const technologiesBox = document.getElementById('technologiesBox');

TranslateBtn.addEventListener('click', ()=>{
if(ClientLanguage === "RU"){
    TranslateBtn.innerText = "EN";
    HiText.innerText = "Hi!👋 I";
    MyNameText.innerText = "Nikolai";
    TextWebDeveloper.innerText = " Web Developer"
    WhatIdotext.innerText = "I create modern and functional websites for businesses and startups. I help turn ideas into products.";
    btnSeeProjects.innerText = "View Projects"
    technologiesBox.innerHTML = `<p style="margin-left: 5px;" id="technologyText" class="whiteText">Technologies: HTML <span><img style="height: 20px;position: relative; top: 3px;" src="assets/image/Html_logo.webp" alt=""></span> CSS <span><img style="height: 20px;position: relative; top: 3px;" src="assets/image/Css_logo.webp" alt=""></span> JavaScript <span><img style="height: 20px;position: relative; top: 3px;" src="assets/image/JS_logo.webp" alt=""></span></p>`
    TextInProject1.innerText = "A modern, responsive landing page built using HTML, CSS, and JavaScript. Features include a hamburger menu for mobile devices, a slider, smooth page navigation, element animations, and a user-friendly interface. The site displays correctly on all popular devices."
    TextInProject2.innerText = "A to-do list management app built using HTML, CSS, and JavaScript. Features include adding, completing, and deleting tasks; tracking the total number of tasks and the number of completed tasks; responsive layout; and a user-friendly, minimalist interface."
    TextInProject3.innerText = "A web calculator with basic arithmetic operations, built using HTML, CSS, and JavaScript. It features user input processing, character cleaning and removal, a responsive interface, and a user-friendly layout optimized for use on both PCs and mobile devices."
    ClientLanguage = "EN"
    return;
} 
if(ClientLanguage === "EN"){
    TranslateBtn.innerText = "RU";
    HiText.innerText = "Привет!👋 Я";
    MyNameText.innerText = "Николай";
    TextWebDeveloper.innerText = "Веб-разработчик"
    WhatIdotext.innerText = "Создаю современные и функциональные сайты для бизнеса и стартапов. Помогаю идеям становиться продуктами.";
    btnSeeProjects.innerText = "Смотреть проекты"
    technologiesBox.innerHTML = `<p style="margin-left: 5px;" id="technologyText" class="whiteText">Технологии: HTML <span><img style="height: 20px;position: relative; top: 3px;" src="assets/image/Html_logo.webp" alt=""></span> CSS <span><img style="height: 20px;position: relative; top: 3px;" src="assets/image/Css_logo.webp" alt=""></span> JavaScript <span><img style="height: 20px;position: relative; top: 3px;" src="assets/image/JS_logo.webp" alt=""></span></p>`
    TextInProject1.innerText = "Современный адаптивный лендинг, разработанный на HTML, CSS и JavaScript. Реализованы бургер-меню для мобильных устройств, слайдер, плавная навигация по странице, анимации элементов и удобный пользовательский интерфейс. Сайт корректно отображается на всех популярных устройствах."
    TextInProject2.innerText = "Приложение для управления списком задач, разработанное на HTML, CSS и JavaScript. Реализованы добавление, выполнение и удаление задач, подсчет общего количества и выполненных задач, адаптивная верстка и удобный минималистичный интерфейс."
    TextInProject3.innerText = "Веб-калькулятор с базовыми арифметическими операциями, созданный на HTML, CSS и JavaScript. Реализована обработка пользовательского ввода, очистка и удаление символов, адаптивный интерфейс и удобное расположение элементов для работы как на ПК, так и на мобильных устройствах."
    ClientLanguage = "RU"
    return;
}
})