const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const a5 = document.getElementById("a5");
const a6 = document.getElementById("a6");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");


a1.parentElement.addEventListener('mouseover', function () {
    a1.parentElement.style.backgroundColor = "rgb(246,246,246)";
    a1.style.color = "rgb(6, 70, 206)";
    a1.style.fontWeight = 500;
    img1.src = "img/dashboard-hover.png";
})

a1.parentElement.addEventListener('mouseout', function () {
    a1.parentElement.style.backgroundColor = "rgb(6, 70, 206)";
    a1.style.color = "rgb(255,255,255)";
    a1.style.fontWeight = "Normal";
    img1.src = "img/dashboard.png";
})

a2.parentElement.addEventListener('mouseover', function () {
    a2.parentElement.style.backgroundColor = "rgb(246,246,246)";
    a2.style.color = "rgb(6, 70, 206)";
    a2.style.fontWeight = 500;
    img2.src = "img/daily-hover.png";
})

a2.parentElement.addEventListener('mouseout', function () {
    a2.parentElement.style.backgroundColor = "rgb(6, 70, 206)";
    a2.style.color = "rgb(255,255,255)";
    a2.style.fontWeight = "Normal";
    img2.src = "img/daily.png";
})

a3.parentElement.style.backgroundColor = "rgb(246,246,246)";
a3.style.color = "rgb(6, 70, 206)";
a3.style.fontWeight = 500;
img3.src = "img/monthly-hover.png";

a4.parentElement.addEventListener('mouseover', function () {
    a4.parentElement.style.backgroundColor = "rgb(246,246,246)";
    a4.style.color = "rgb(6, 70, 206)";
    a4.style.fontWeight = 500;
    img4.src = "img/yearly-hover.png";
})

a4.parentElement.addEventListener('mouseout', function () {
    a4.parentElement.style.backgroundColor = "rgb(6, 70, 206)";
    a4.style.color = "rgb(255,255,255)";
    a4.style.fontWeight = "Normal";
    img4.src = "img/yearly.png";
})