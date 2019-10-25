let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory");

document.body.appendChild(newHeader);

newHeader.innerHTML = 'Laura is the champion';

const element = document.querySelector("main");

element.remove();