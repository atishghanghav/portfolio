const text = document.querySelector(".rounded_text p");
const secondText = document.querySelector(".second_rounded_text p");
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform: rotate(${i * 13}deg)">${char}</span>`
).join("");


secondText.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
).join("")



const cursor = document.querySelector(".cursor");
const projectContainer = document.querySelector(".project_container");
var cursorScale = document.querySelectorAll(".cursor_scale");
var mouseX = 0;
var mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function() {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function(e){
    mouseX = e.clientX
    mouseY = e.clientY
});

cursorScale.forEach(link =>{
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
    });

    link.addEventListener("mousemove", () =>{
        cursor.classList.add("grow");
    })
})



