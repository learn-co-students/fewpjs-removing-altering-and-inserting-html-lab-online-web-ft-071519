// Write your code here!
document.getElementById("main").remove();
let newHeader = document.createElement('h1');
newHeader.className = "victory";
newHeader.id="victory"
newHeader.innerHTML = "is the champion!";
document.head.querySelector("title").appendChild(newHeader);