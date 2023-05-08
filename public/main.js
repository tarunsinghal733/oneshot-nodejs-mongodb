//on scroll function
function navmenu() {
    let navBar = document.querySelector('.navbar-sticky');
    let scrollTopButton = document.querySelector('#scrollup');

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 120) {
            navBar.classList.add("navbar-sticky-moved-up");
        } else {
            navBar.classList.remove("navbar-sticky-moved-up");
        }

        //apply for transtion
        if (scroll >= 240) {
            navBar.classList.add("navbar-sticky-transitioned");
            scrollTopButton.classList.add("scrollActive");
        } else {
            navBar.classList.remove("navbar-sticky-transitioned");
           scrollTopButton.classList.remove("scrollActive");
        }
        //sticky on
        if(scroll >= 500){
            navBar.classList.add("navbar-sticky-on");
        }else{
            navBar.classList.remove("navbar-sticky-on");
        }
    }
}
navmenu();
//side nav bar close on click
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse");

navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function() {
    navCollapse.classList.remove("show");
  });
});




//counter
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;

                obj.textContent = current;

                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 78, 10, 3000);
    counter("count2", 26, 2, 3000);
    counter("count3", 61, 15, 3000);
    counter("count4", 49, 20, 3000);
});

//slider
var swiper = new Swiper(".swiper-container.app-screen", {
    effect: "coverflow",
    loop: true,
    autoplaySpeed:3000,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay:5000,
        disableOninteraction:false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    }
  });
  