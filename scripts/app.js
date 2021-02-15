const mouseCursor = document.querySelector('.cursor');
const mouseSVG = document.querySelector('.mouseSVG')

// let rotater = 1

// const cursor = (e) => {
//     mouseCursor.style.top = e.pageY + "px";
//     mouseCursor.style.left = e.pageX + "px";
// }

// window.setInterval(
//     function () {
//         rotater = rotater + 2;
//         mouseCursor.style.transform = `rotate(${(rotater)}deg)`;
//     }, 100);

// window.addEventListener("mousemove", cursor)

// window.addEventListener("mousedown", () => {
//     mouseCursor.classList.add("mouse-down")
// })

// window.addEventListener("mouseup", () => {
//     mouseCursor.classList.remove("mouse-down")
// })

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}