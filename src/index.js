// Function to change the text word by word after a delay
function changeText() {
    var element = document.getElementById("changeMe");
    var hiddenElements = document.getElementsByClassName("hidden");
    hiddenElements[0].style.display = "inline";

    var words = element.textContent.split(' ');
    var currentIndex = 0;

    function nextWord() {
        element.textContent = '';
        if (currentIndex < words.length) {
            var currentWord = words[currentIndex];
            var letterIndex = 0;

            function nextLetter() {
                if (letterIndex < currentWord.length) {
                    element.textContent += currentWord[letterIndex];
                    letterIndex++;
                    setTimeout(nextLetter, 100);
                } else {
                    currentIndex++;
                    element.textContent += ' ';
                    setTimeout(nextWord, 1000);
                }
            }

            nextLetter();
        } else {
            currentIndex = 0;
            setTimeout(nextWord, 1000);
        }
    }

    nextWord();
}

setTimeout(changeText, 2000);

// Hamburger menu functionality
const hamburger = document.getElementsByClassName("hamburger")[0];
const navListItem = document.getElementsByClassName("nav-ul")[0];

hamburger.addEventListener("click", () => {
    navListItem.classList.toggle("show-link");
    hamburger.classList.toggle('clicked');

    // Save the hamburger state to local storage
    localStorage.setItem('hamburgerClicked', hamburger.classList.contains('clicked'));
});

// Dark mode functionality
const darkMode = document.querySelector("body");
const input = document.getElementById("dark-mode-toggle");

input.addEventListener("click", () => {
    darkMode.classList.toggle("dark-mode");
    darkMode.classList.remove("light-mode");

    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', darkMode.classList.contains('dark-mode'));
});

// Load saved preferences from local storage
document.addEventListener("DOMContentLoaded", () => {
    // Check dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        darkMode.classList.add('dark-mode');
    }

    // Check hamburger menu state
    if (localStorage.getItem('hamburgerClicked') === 'true') {
        hamburger.classList.add('clicked');
        navListItem.classList.add('show-link');
    }
});

const darkModeBtn = document.querySelector(".toggle-dark-light")

const darkModeToggle = document.getElementById("dark-mode-toggle");
        const body = document.querySelector("body");

        // Load the saved state from local storage when the page loads
        document.addEventListener("DOMContentLoaded", () => {
            const isDarkMode = localStorage.getItem("darkMode") === "true";

            // Set the checkbox and body class based on the saved state
            darkModeToggle.checked = isDarkMode;
            if (isDarkMode) {
                body.classList.add("dark-mode");
                body.classList.remove("light-mode");
            } else {
                body.classList.add("light-mode");
                body.classList.remove("dark-mode");
            }
        });

        // Save the state to local storage when the checkbox is clicked
        darkModeToggle.addEventListener("change", () => {
            if (darkModeToggle.checked) {
                body.classList.add("dark-mode");
                body.classList.remove("light-mode");
                localStorage.setItem("darkMode", "true");
            } else {
                body.classList.add("light-mode");
                body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "false");
            }
        });