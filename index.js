let main = document.getElementById("main");
main.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

document.querySelector('h1').id = 'victory';

document.querySelector('h1#victory').innerHTML = 'AUDREA is the champion';