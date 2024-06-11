function fun1() {
    var h1 = document.querySelector("h1")

    textSplit = h1.textContent.split("");

    var txtLen = textSplit.length / 2

    var spanTag = "";

    textSplit.forEach((ele, idx) => {
        if (idx < txtLen) {
            spanTag += `<span class="a">${ele}</span>`;
        } else {
            spanTag += `<span class="b">${ele}</span>`
        }
    });

    h1.innerHTML = spanTag;
}

fun1()

gsap.from(".a", {
    y:50,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15
})

gsap.from(".b", {
    y:50,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15
})