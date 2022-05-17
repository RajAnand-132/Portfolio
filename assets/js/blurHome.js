const bg = document.querySelector("#hero");
let load = 0;
const blurring = () => {
    load++;
    if (load >65) clearInterval(int);
    bg.style.filter = `blur(${scale(load, 0, 65, 40, 0)}px)`;
};

// For reference: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
let int = setInterval(blurring, 40);