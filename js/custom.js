$(function () {
  $(".mobile_btn").on("click", function () {
    $(this).toggleClass("on");
    $(".gnb").toggleClass("on");
  });

  $(".gnb").on("wheel touchmove", function (e) {
    e.preventDefault();
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header, .to_top").addClass("on");
      hover();
    } else {
      $(".header, .to_top").removeClass("on");
    }
  });

  const main_slide = new Swiper(".main_slide", {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        $(".main_visual .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
      slideChangeTransitionStart: function () {
        $(".main_visual .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $(".main_visual .arrows .left").on("click", function () {
    main_slide.slidePrev();
  });
  $(".main_visual .arrows .right").on("click", function () {
    main_slide.slideNext();
  });

  $(".main_visual .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    main_slide.slideTo(idx);
  });

  const gallery_slide = new Swiper(".gallery_slide", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".sbar",
      type: "progressbar",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  $(".main_gallery .arrows .left").on("click", function () {
    gallery_slide.slidePrev();
  });
  $(".main_gallery .arrows .right").on("click", function () {
    gallery_slide.slideNext();
  });

  $("#bgndVideo").YTPlayer({
    videoURL: "R7fapqKaWXE",
    containment: "#fashionMovie",
    showControls: false,
    mute: true,
    playOnlyIfVisible: true,
  });

  $(".main_fashionshow .play").on("click", function () {
    $("#bgndVideo").YTPPlay();
  });

  $(".main_fashionshow .pause").on("click", function () {
    $("#bgndVideo").YTPPause();
  });

  const drama_slide = new Swiper(".drama_slide", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    on: {
      slideChangeTransitionStart: function () {
        $(".main_drama .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  $(".main_drama .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    drama_slide.slideTo(idx);
  });

  $(".main_drama .arrows .left").on("click", function () {
    drama_slide.slidePrev();
  });
  $(".main_drama .arrows .right").on("click", function () {
    drama_slide.slideNext();
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
