// Variables
const MOON = '🌙';
const SUN = '☀️';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = LIGHT_MODE;
const btn = document.querySelector('#theme-switcher');

// Init function
(function init() {
    let storedMode = sessionStorage.getItem('mode');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        sessionStorage.setItem('mode', DEFAULT_MODE);
    }
    setMode(storedMode);
})();

// Function to change text / class
function setMode(mode = DEFAULT_MODE) {
    if (mode === DARK_MODE) {
        btn.innerHTML = SUN;
        document.body.classList.add(DARK_MODE);
    } else if (mode === LIGHT_MODE) {
        btn.innerHTML = MOON;
        document.body.classList.remove(DARK_MODE);
    }
}

// Event listener for button
btn.addEventListener('click', function () {
    let newMode =
        sessionStorage.getItem('mode') == DARK_MODE ? LIGHT_MODE : DARK_MODE;
    setMode(newMode);
    sessionStorage.setItem('mode', newMode);
});

// If je nepotreban
// btn.addEventListener('click', function () {
//     let mode = sessionStorage.getItem('mode');
//     if (mode) {
//         let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
//         setMode(newMode);
//         sessionStorage.setItem('mode', newMode);
//     }
// });
