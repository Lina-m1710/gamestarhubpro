
$('.projects-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  cssEase: 'linear',
  centerMode: true,
  variableWidth: true
});

$('.services-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  cssEase: 'linear',
  centerMode: true,
  variableWidth: true
});

$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('.about-list').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: true,
      cssEase: 'linear'
    });
  } else {
    $(".about-list").slick("unslick");
  }
});

$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('.reviews-list').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      arrows: false,
      cssEase: 'linear'
    });
  } else {
    $(".reviews-list").slick("unslick");
  }
});


new WOW().init();


let btn = document.querySelector('.mobile-menu')
let burger = document.querySelector('.mobile-btn')
let nav = document.querySelector('.header-nav')
let item = document.querySelectorAll('.header-nav-item')

btn.addEventListener('click', function (e) {
    nav.classList.toggle('header-nav-mobile')
    burger.classList.toggle('mobile-btn-active')
    document.body.classList.toggle('body-scroll')
})

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function (e) {
        nav.classList.toggle('header-nav-mobile')
        burger.classList.toggle('mobile-btn-active')
        document.body.classList.toggle('body-scroll')
    })
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


let popup = document.querySelector('.popup-cookie')
let popBtn = document.querySelector('.cookies-btn')

popBtn.addEventListener('click', function(e){
    popup.style.display = 'none'
})

function consoleBG() {
  if ($(window).scrollTop() == 0) {
    $('.header-top').css('background', 'unset');
  } else {
    $('.header-top').css('background', 'rgba(0, 0, 94, 0.4)');
  }
}
consoleBG();

$(window).scroll(function() {
  consoleBG();
});