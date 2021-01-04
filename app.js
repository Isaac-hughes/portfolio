const body = document.querySelector('body');
const bubble = document.querySelector('.morphShape');
const svgColor = document.querySelector('.nav svg');

bubble.addEventListener("mouseenter", () => {
    body.style.backgroundColor = '#F7D961';
    svgColor.style.fill = '#141414';
});
bubble.addEventListener("mouseout", () => {
    body.style.backgroundColor = '#141414';
    svgColor.style.fill = '#F7D961';
});