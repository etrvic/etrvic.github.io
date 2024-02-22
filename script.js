const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;


const effectElements = document.querySelectorAll("#effect");

effectElements.forEach(element => {
  element.addEventListener("mouseover", event => {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  });
});

function changeTheme() {
    var currentTheme = document.getElementById('theme').getAttribute('href');
    var newTheme = (currentTheme === 'dark_theme.css') ? 'light_theme.css' : 'dark_theme.css';
    document.getElementById('theme').setAttribute('href', newTheme);
    
    // Store the theme preference in localStorage
    localStorage.setItem('theme', newTheme);
    
}


// Check if there's a stored theme preference
var storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    document.getElementById('theme').setAttribute('href', storedTheme);
    var svg = document.getElementById('theme-toggle-svg');

}
