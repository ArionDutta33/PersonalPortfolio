const page2 = document.querySelector(".page2")
gsap.to(page2, {
    // transform: "translateY(-100%)"
    duration: 2,
    y: "-100%",
    // scrollTrigger: {
    //     markers: true,
    //     scroller: "body",
    //     trigger: ".page1",
    //     start: "top 20%"
    // }
})