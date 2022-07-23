//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-next",
    },
thumbs:{
    swiper: swiper,
},
});

//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");

});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
    
});