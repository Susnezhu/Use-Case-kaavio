//sivun sisältö
const content = document.getElementById("content");

// loggin ja register menu elementit
const dropMenu = document.getElementById("dropMenu");
const dropBtn = document.getElementById("dropBtn");
let isMenuOpen = false;

//loggin window
const logWindow = document.getElementById("logWindow");
let isLogMenuOpen = false;

//register window
const regWindow = document.getElementById("regWindow");
let isRegMenuOpen = false;


//loggin ja register menu avaaminen
function dropMenuOpener() {
    dropMenu.style.display = "block";
    isMenuOpen = true;
}

function logIn() {
    logWindow.style.display = "block"; //näyttää loggin ikkunan
    regWindow.style.display = "none"

    isLogMenuOpen = true;

    //muu sivun sisältö pitää olla tummennettu
}

function regIn() {
    regWindow.style.display = "block"; //näyttää register ikkunan
    logWindow.style.display = "none"

    isRegMenuOpen = true

    //muu sivun sisältö pitää olla tummennettu
}


logWindow.addEventListener("click", function(e) {
    e.stopPropagation();
});
regWindow.addEventListener("click", function(e) {
    e.stopPropagation();
});

//jos klikkaa content div:in taustaa
content.addEventListener("click", function(e) {
    if (isLogMenuOpen) {
        logWindow.style.display = "none";
    }
    if (isRegMenuOpen) {
        regWindow.style.display = "none";
    }
});


//Jos on painettu dropBtn näppäin
dropBtn.addEventListener("click", function(e) {
    e.stopPropagation(); //Estää klikkauksen etenemisen muihin elementteihin
});

//jos painettu mihin vaan sivun kohtaan, dropMenu sulkeutuu
document.addEventListener("click", function() {
    if (isMenuOpen) {
        dropMenu.style.display = "none";
        isMenuOpen = false;
    }
});