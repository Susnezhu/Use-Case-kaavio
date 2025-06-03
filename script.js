// loggin ja register menu elementit
dropMenu = document.getElementById("dropMenu");
dropBtn = document.getElementById("dropBtn");
ismenuOpen = false;


//loggin ja register menu avaaminen
function dropMenuOpener() {
    dropMenu.style.display = "block";
    isMenuOpen = true;
}

function logIn() {
    //avaa loggin ikkunan
    //muu sivun sisältö pitää olla tummennettu
}

function regIn() {
    //avaa register ikkunan
    //muu sivun sisältö pitää olla tummennettu
}

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