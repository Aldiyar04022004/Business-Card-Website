//Header
(function () {
    const header = document.querySelector('.header');
    const wrapper_line = document.querySelector('.wrapper_line');
    const liniya = document.querySelector('.liniya');
    const skills = document.querySelector('.skills');
    window.onscroll = () => {
        if (window.pageYOffset > 50){
            header.classList.add('header_active');
            wrapper_line.classList.add('wrapper_line_active');
            liniya.classList.add('liniya_active');
        } else {
            header.classList.remove('header_active');
            wrapper_line.classList.remove('wrapper_line_active');
            liniya.classList.remove('liniya_active');
        }
    };
}());

//Рандомайзер

var one = '"Само-Контролируемая шизофрения – это и есть Гениальность."';
var two = '"Программисты — это устройства, преобразующие кофеин в код"';
var tree = '"Баг багом исправляют."';
var four = '"Программиста руки кормят… и кофе."';
var five = '"Тестировщик не выдаст, заказчик не съест."';
var six = '"Это не баг, это фича"';
let word = [one, two, tree, four, five, six];
 random1zer = Math.random();

function getRandomWord() {    return word[Math.floor(random1zer * word.length)];

}

document.getElementById("random").innerHTML = getRandomWord();

//Навигатор

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

var scroll = 0;
$(window).on("scroll", function(){
    scroll = window.pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop);
    const header_linkNAV_skill = document.querySelector('.header_linkNAV_skill');
    const header_linkNAV_about = document.querySelector('.header_linkNAV_about');
    const header_linkNAV_portfolio = document.querySelector('.header_linkNAV_portfolio');
    const header_linkNAV_contact = document.querySelector('.header_linkNAV_contact');
    const footer_linkNAV_skill = document.querySelector('.footer_linkNAV_skill');
    const footer_linkNAV_about = document.querySelector('.footer_linkNAV_about');
    const footer_linkNAV_portfolio = document.querySelector('.footer_linkNAV_portfolio');
    const footer_linkNAV_contact = document.querySelector('.footer_linkNAV_contact');
    if (scroll > 500 && scroll < 1250) {
      header_linkNAV_skill.classList.add('header_linkNAV_skill_active');
      footer_linkNAV_skill.classList.add('footer_linkNAV_skill_active');
    }
    else{
      header_linkNAV_skill.classList.remove('header_linkNAV_skill_active');
      footer_linkNAV_skill.classList.remove('footer_linkNAV_skill_active');
    }
    if(scroll > 1200 && scroll < 1750){
      header_linkNAV_about.classList.add('header_linkNAV_about_active');
      footer_linkNAV_about.classList.add('footer_linkNAV_about_active');
    }
    else{
      header_linkNAV_about.classList.remove('header_linkNAV_about_active');
      footer_linkNAV_about.classList.remove('footer_linkNAV_about_active');
    }
    if(scroll > 2000 && scroll < 2800){
      header_linkNAV_portfolio.classList.add('header_linkNAV_portfolio_active');
      footer_linkNAV_portfolio.classList.add('footer_linkNAV_portfolio_active');
    }
    else{
      header_linkNAV_portfolio.classList.remove('header_linkNAV_portfolio_active');
      footer_linkNAV_portfolio.classList.remove('footer_linkNAV_portfolio_active');
    }
    if(scroll > 3400 && scroll < 3900){
      header_linkNAV_contact.classList.add('header_linkNAV_contact_active');
      footer_linkNAV_contact.classList.add('footer_linkNAV_contact_active');
    }
    else{
      header_linkNAV_contact.classList.remove('header_linkNAV_contact_active');
      footer_linkNAV_contact.classList.remove('footer_linkNAV_contact_active');
    }
});

//Телеграмм почта

const TOKEN = "5935272587:AAGcV4dCMOx5sCVorRUebx4XqoPQLq6VROE";
const CHAT_ID = "-1001802900413";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();
    let message = `<b>Донесение с сайта!</b>\n`;
    message += `<b>Отправитель: </b>${ document.getElementById("input-name").value }\n`;
    message += `<b>E-mail: </b>${ document.getElementById("input-email").value }\n`;
    message += `<b>Телефон: </b>${ document.getElementById("input-phone").value }\n`;
    message += `<b>Тема сообщения: </b>${ document.getElementById("input-theme").value }\n`;
    message += `<b>Сообщение: </b>${ document.getElementById("input-text").value }`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
    .then((res) => {
      document.getElementById("input-name").value = "";
      document.getElementById("input-email").value = "";
      document.getElementById("input-phone").value = "";
      document.getElementById("input-theme").value = "";
      document.getElementById("input-text").value = "";
      success.innerHTML = "Сообщение отправлено!";
      success.style.display = "block";
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() =>{
      console.log('Конец!');
    })
})
//Слайдер биографий

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("about_me_mySlides");
  let dots = document.getElementsByClassName("number");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" NumActive", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " NumActive";
}

//Слайдер портфолио

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Модальное окно "Отзывы"

$('.open_popup').click(function() {
  $('.popup-bg').fadeIn(600);
  
});

$('.close_popup').click(function() {
  $('.popup-bg').fadeOut(600);
});

$('.single-item-popup').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

// отзывы

var swiper = new Swiper(".NASHSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
