// Write your code here!
// Removing a node with the id of 'main'
let main = document.getElementById('main')
main.remove()

// Create a variable 'newHeader' that is an h1 element with the id of 'victory'.
let newHeader = document.createElement("h1")
// Add the id attribute to newHeader.
newHeader.id = 'victory'
// Add html text to newHeader.
newHeader.innerHTML = "${YOUR-NAME} is the champion"
