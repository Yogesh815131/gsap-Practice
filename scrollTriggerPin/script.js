var tl = gsap.timeline();

tl.from("#page1 h1", {
    duration: 0.5,
    delay:1,
    opacity:0,
    y:-50,   
})

tl.from("#page1 h4", {
    duration: 0.5,
    opacity:0,
    y:-50, 
    stagger:1   
})

gsap.to("#page2 h1", {
    transform:"translateX(-260%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end: "top -150%",
        scrub:2,
        pin:true
    }
})