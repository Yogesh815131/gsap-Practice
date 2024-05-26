gsap.to("#box1",{
    x: 1500,
    duration: 1.5,
    delay:1,
    rotate: 360,
    scale: 0.9,
    backgroundColor: "#6c0794",
    repeat:-1,
    yoyo: true,
    scale: 0.5

})

gsap.from("#box2",{
    x: 1500,
    duration: 1.5,
    delay:2.5,
    rotate: 360,
    scale: 0.9,
    backgroundColor: "#6b2347",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true
})

gsap.to("#box3",{
    x: 1500,
    duration: 1.5,
    delay:4,
    rotate: 360,
    scale: 0.9,
    backgroundColor: "#340b94",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true
})