// nav menu
let menuBtn = document.querySelector('#menuBtn');
let menuList = document.querySelector('#menuList');
menuBtn.addEventListener("click", showMenu);
function showMenu() {
  menuList.classList.toggle('max-h-0');
  menuList.classList.toggle('max-h-full');
}

// 登入 Modal
let loginDialog = document.querySelector('#loginDialog');
let loginBtn = document.querySelector('#loginBtn');
let closeLoginDialogBtn = document.querySelector("#closeLoginDialogBtn");
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginDialog.parentElement.classList.toggle('hidden');
  loginDialog.showModal();
});
closeLoginDialogBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginDialog.parentElement.classList.toggle('hidden');
  loginDialog.close();
});

// 付款進度條
$('#goPay').on('click', (e) => {
  $('#timeline').toggleClass('before:hidden');
  $('#timeline').toggleClass('before:block');

  $('#payStep1').toggleClass("before:content-['1']");
  $('#payStep1').toggleClass("before:content-checked");

  $('#payStep2').toggleClass('before:bg-dark-300');
  $('#payStep2').toggleClass('before:bg-green');
  $('#payStep2').toggleClass('before:border');
  $('#payStep2').toggleClass('text-green');

  $('#lessonSignUp').fadeOut();
  $('#payInfo').fadeIn();
})

$('#pay').on('click', (e) =>{
  $('#timeline').toggleClass('after:hidden');
  $('#timeline').toggleClass('after:block');

  $('#payStep2').toggleClass("before:content-['2']");
  $('#payStep2').toggleClass("before:content-checked");
  $('#payStep3').toggleClass("before:content-['3']");
  $('#payStep3').toggleClass("before:content-checked");

  $('#payStep3').toggleClass('before:bg-dark-300');
  $('#payStep3').toggleClass('before:bg-green');
  $('#payStep3').toggleClass('before:border');
  $('#payStep3').toggleClass('text-green');

  $('#payInfo').fadeOut();
  $('#paySuccess').toggleClass('md:flex');
})


//輪播
let swiperCourse = new Swiper('#swiperCourse', {
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  speed: 1500,
  slidesPerView: 'auto',
  loop: true,
})


let swiperSuggest = new Swiper("#swiperSuggest", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

let swiperClass = new Swiper('#swiperClass', {
  freeMode: true,
  mousewheel: {
    forceToAxis: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  observer: true,//修改swiper自己或子元素时，自动初始化swiper
  observeParents: true,
})

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  language: 'zh-TW',
  orientation: 'bottom',
  autohide: true,
});

