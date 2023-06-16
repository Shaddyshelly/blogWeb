// //images=4 (0,1,2,3)

// let flag = 0;

// function controller(x) {
//     flag = flag + x;
//     slideshow(flag);
//     // flag = 2 + (-1) = 1

//     // flag = 2+(1)=3
// }

// slideshow(flag);


// function slideshow(num) {
//     let slides = document.getElementsByClassName('slide');

//     if (num == slides.length) {
//         flag = 0;
//         num = 0;
//     }

//     if (num < 0) {
//         flag = slides.length - 1;
//         num = slides.length - 1;
//     }

//     // console.log(slides);
//     for (let y of slides) {
//         y.style.display = "none";
//     }

//     slides[num].style.display = "block";
// }
  

// =========================

// this js code for auto slider

let flag = 0;
let intervalId = null;

function startSlideshow() {
    intervalId = setInterval(() => {
        controller(1);
    }, 2000);
}

function stopSlideshow() {
    clearInterval(intervalId);
}

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}

function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    if (num == slides.length) {
        flag = 0;
        num = 0;
    }

    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for (let y of slides) {
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}

startSlideshow();
