document.addEventListener("DOMContentLoaded",function(){

    // --------------- KARUZELA -------------

    // wyszukanie elementów karuzeli w DOM
    var carousel = document.querySelector(".carousel");
    var track = carousel.querySelector(".carousel__track");
    var slides = carousel.querySelectorAll(".carousel__slide");
    var carouselButtons = carousel.querySelectorAll(".carousel__nav");

    // licznik wskazujący aktualny slajd w karuzeli - startowo 0
    var currentSlide = 0;

    // ustawienie slajdów obok siebie
    function setSlidesPosition() {

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.left = 100 * i + "%";
        }
    }

    // przesuwanie slajdów w prawo i w lewo
    function moveToSlide(event) {

        if (this.className.indexOf("next") > -1) {

            var targetSlide = currentSlide + 1;

            if (targetSlide >= slides.length) {
                targetSlide = 0;
            }
        }

        if (this.className.indexOf("prev") > -1) {

            var targetSlide = currentSlide - 1;

            if (targetSlide < 0) {
                targetSlide = slides.length - 1;
            }
        }

        var amountToMove = slides[targetSlide].style.left;
        track.style.transform = "translateX(-" + amountToMove + ")";
        currentSlide = targetSlide;
    }

    // instrukcje dla karuzeli wywołujące się przy załadowaniu strony:
    setSlidesPosition();
    for (var i = 0; i < carouselButtons.length; i++) {
        carouselButtons[i].addEventListener("click", moveToSlide);
    }
});
