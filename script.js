// Selecting the button
const button = document.querySelector("button")

// Selecting the author-section
const author_sec = document.querySelector(".author-section")

// Share Ui
function click() {
    author_sec.className = 'share'
    
    console.log("Click")
}

// Adding the Event listener
button.addEventListener("click", click)
