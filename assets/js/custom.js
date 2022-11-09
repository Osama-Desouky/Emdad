

$(document).ready(function () {
    // swiper home banner
    let swiper = new Swiper(".homeSwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    let swiper2 = new Swiper(".partnersSwiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


  $(".s_round").hover(function () {
    $(this).parent().parent().toggleClass("b_round_hover");
    // return false;
  });
  $(".s_round").click(function () {
    $(this).parent().prev().toggleClass("flipped");
    // $(this).addClass('s_round_click');
    $(this).children().toggleClass("s_arrow_rotate");
    $(this).toggleClass("b_round_back_hover");
    // return false;
  });
  $(".s_round").on("transitionend", function () {
    $(this).removeClass("s_round_click");
    $(this).addClass("s_round_back");
    // return false;
  });


// end document ready
});
