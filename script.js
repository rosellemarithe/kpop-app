const imgs = document.getElementById('imgs');

const img = document.querySelectorAll("#imgs img");
/*console.log(img);*/

let index = 0;
let interval = setInterval(run, 5000);

function run() {
    index++;
    changeImage();
    console.log(index);
}

function changeImage() {
    if (index > img.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = img.length - 1;
    }
    imgs.style.transform = `translateX(${-index * 600}px)`;
}

function resetInterval() {
    clearInterval(interval); // Pass the interval ID as an argument
    interval = setInterval(run, 5000);
}