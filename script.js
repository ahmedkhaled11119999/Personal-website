$(document).ready(function () {
  $(".services-card").on("click", function () {
    $(this).css("transform", "rotateY(180deg)");
  });

  $(".navbar .navbar-nav .nav-item").on("click", function () {
    $(this).addClass("active");
    $(this)
      .siblings()
      .each(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        }
      });
  });
});

let scrollToTopBtn = document.getElementById("scroll-up-btn");
let rootElement = document.documentElement;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || rootElement.scrollTop > 800) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
