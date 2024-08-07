const page2 = document.querySelector(".page2")
gsap.to(page2, {
    // transform: "translateY(-100%)"

    y: "-100%",
    scrollTrigger: {
        markers: true,
        scroller: "body",
        trigger: ".page1",
        pin: true,
        scrub: 5,
        start: " top -100%",
        end: "bottom 40%",
        // scrub: true,

    }
})


// gsap.registerPlugin(ScrollTrigger);

// const page2 = document.querySelector(".page2");

// gsap.to(page2, {
//     y: "-100%",
//     duration: 2,
//     scrollTrigger: {
//         markers: true,
//         scroller: "body",
//         trigger: ".page1",
//         start: "top top",
//         end: "bottom 90%",
//         scrub: true // This ensures the animation is tied to the scrollbar
//     }
// });
