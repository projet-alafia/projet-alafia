(function($) {
  "use strict"; // Start of use strict
var galleryImage = $(".gallery").find("img").first();
var images = [
    "img/gallery/img1.jpg",
    "img/gallery/img2.jpg",
    "img/gallery/img3.jpg",
    "img/gallery/img4.jpg",
    "img/gallery/img5.jpg",
    "img/gallery/img6.jpg",
    "img/gallery/img7.jpg",
    "img/gallery/img8.jpg",
    "img/gallery/img9.jpg",
    "img/gallery/img10.jpg",
    "img/gallery/img11.jpg",
    "img/gallery/img12.jpg",
    "img/gallery/img13.jpg",
    "img/gallery/img14.jpg",
    "img/gallery/img15.jpg",
    "img/gallery/img16.jpg",
    "img/gallery/img17.jpg",
    "img/gallery/img18.jpg",
    "img/gallery/img19.jpg",
    "img/gallery/img20.jpg",
    "img/gallery/img21.jpg",
    "img/gallery/img22.jpg",
    "img/gallery/img23.jpg",
    "img/gallery/img24.jpg",
    "img/gallery/img25.jpg",
    "img/gallery/img26.jpg",
    "img/gallery/img27.jpg",
    "img/gallery/img28.jpg",
    "img/gallery/img29.jpg",
    "img/gallery/img30.jpg",
    "img/gallery/img31.jpg",
    "img/gallery/img32.jpg",

];
var i = 0;
setInterval(function(){
i = (i + 1) % images.length; // 0, 1, 2, 3 etc
galleryImage.fadeOut(function(){
  $(this).attr("src", images[i]);
  $(this).fadeIn();

});
console.log(galleryImage.attr("src"));
}, 2000);


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0
  });

  // Magnific popup calls

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  


})(jQuery); // End of use strict
