gsap.from("#page1 #box", {
    opacity: 0,
    scale: 0,
    duration: 2,
    delay: 1,
    rotate:360,

})

gsap.from("#page2 #box", {
    opacity: 0,
    scale: 0,
    duration: 1, 
    rotate:360,
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        start: "top 70%",
        markers: true,
        end: "top 30%",
        scrub: 2,
    }
})

gsap.from("#page3 #box", {
    opacity: 0,
    scale: 0,
    duration: 1,
    rotate:360,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        markers: true,
        scrub: 2,
    }
})