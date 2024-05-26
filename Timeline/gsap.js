
var t1 = gsap.timeline();
t1.to("#box1",{
        x: 1500,
        duration: 1.5,
        delay:1,
        rotate: 360,
        scale: 0.9,
        backgroundColor: "#6c0794",
        repeat:-1,
        yoyo: true,        
    }
)

t1.from("#box2", {
    x: 1500,
    duration: 1.5,
    delay: 1,
    rotate: 360,
    backgroundColor: "#6b2347",
    repeat: -1,
    yoyo: true,
    borderRadius: "50%"
})

t1.to("#box3", {
    x:1500,
    duration: 1.5,
    delay: 1,
    rotate: 360,
    backgroundColor: "#340b94",
    repeat: -1,
    yoyo: true,
    borderRadius: "50%",

})

