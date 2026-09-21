// Selecting the button
const button = document.querySelector("button")

// Selecting the author-section
const author_sec = document.querySelector(".author-section")

// Selecting the share
const share = document.querySelector(".share")


// Share Ui
function click() {
    share.style.display = "flex"
    author_sec.style.display = "none"
}

// Adding the Event listener
button.addEventListener("click", click)
