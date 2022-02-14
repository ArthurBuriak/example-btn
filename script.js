let firstBtn = document.querySelector(".first-btn");
let secondBtn = document.querySelector(".second-btn");
let thirdBtn = document.querySelector(".third-btn");


firstBtn.addEventListener("click", function () {
    let firstNumber = Math.floor(Math.random() * 256);
    let secondNumber = Math.floor(Math.random() * 256);
    let thirdNumber = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
});

secondBtn.addEventListener("click", function () {
    let firstNumber = Math.floor(Math.random() * 256);
    let secondNumber = Math.floor(Math.random() * 256);
    let thirdNumber = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
});

thirdBtn.addEventListener("click", function () {
    let firstNumber = Math.floor(Math.random() * 256);
    let secondNumber = Math.floor(Math.random() * 256);
    let thirdNumber = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
});
