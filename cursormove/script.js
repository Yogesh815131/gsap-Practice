var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function (ev) {
    gsap.to(cursor, {        
        x:ev.x,
        y:ev.y,
        
    })
})

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "view more"
    gsap.to(cursor, {
        duration: 0.5,
        scale: 3,
    })
})
imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        duration: 0.5,
        scale: 1,
    })
})
