function mainAnimation() {
    const page2 = document.querySelector(".page2")
    gsap.to(page2, {
        // transform: "translateY(-100%)"

        y: "-100%",
        scrollTrigger: {
            // markers: true,
            scroller: "body",
            trigger: ".page1",
            pin: true,
            scrub: 5,
            start: " top -100%",
            end: "bottom 40%",
            // scrub: true,

        }
    })

}
mainAnimation()


const menuIcon = document.querySelector("i")
console.log(menuIcon)
// menuIcon.addEventListener("click", function () {

// })


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
