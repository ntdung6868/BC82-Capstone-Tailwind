document.getElementById("play-btn").addEventListener("click", function () {
    console.log("click r");
    document.getElementById("video-thumbnail").classList.add("hidden");
    document.getElementById("video-player").classList.remove("hidden");
});

var swiper = new Swiper(".review-carousel", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    pagination: {
        el: ".reviews-carousel-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});
