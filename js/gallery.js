const radios = document.querySelectorAll('input[name="css-fadeshow"]');
let index = 0;
const total = radios.length;

setInterval(() => {
    radios[index].checked = false;
    index = (index + 1) % total;
    radios[index].checked = true;
}, 5000);