//sivun sisältö
const content = document.getElementById("content");

//sivun tummennus
const fadeBg = document.getElementById("fadeBg")

// loggin ja register menu elementit
const dropMenu = document.getElementById("dropMenu");
const dropBtn = document.getElementById("dropBtn");
let isMenuOpen = false;

//loggin window
const logWindow = document.getElementById("logWindow");
let isLogMenuOpen = false;
const registerBtn = document.getElementById("registerBtn");

//register window
const regWindow = document.getElementById("regWindow");
let isRegMenuOpen = false;
const logginBtn = document.getElementById("logginBtn")


let users = [] //Tähän tallentuu käyttäjien tiedot ja salasanat. Myöhemmin lisään käyttäjiä Local Storageen


//loggin ja register menu avaaminen
function dropMenuOpener() {
    dropMenu.style.display = "block";
    isMenuOpen = true;
}

function logIn() {
    logWindow.style.display = "block"; //näyttää loggin ikkunan
    regWindow.style.display = "none";
    fadeBg.style.display = "block";

    isLogMenuOpen = true;

    logginBtn.onclick = function() {
        const nameLog = document.getElementById("namelog").value;
        const passwordLog = document.getElementById("paswordlog").value;

        if (nameLog != "" && passwordLog != "") { //jos kentät eivät ole tyhjät
            let userFound = false;

            //tarkistaa nimen ja salasanan
            for (let i = 0; i < users.length; i++) {
                if (users[i].name === nameLog) {
                    userFound = true;
                    if (users[i].password === passwordLog) {
                        console.log("kirjautuminen onnistui!");
                    } else {
                        console.log("väärä salasana");
                    }
                    break;
                }
            }

            if (!userFound) {
                console.log("käyttäjä ei löytynyt");
            }

        } else {
            console.log("Täytä molemmat kentät!");  // lisätä myöhemmin tekstit näytölle. (tehdä function)
        }
    }
}

function regIn() {
    regWindow.style.display = "block"; //näyttää register ikkunan
    logWindow.style.display = "none";
    fadeBg.style.display = "block";

    isRegMenuOpen = true;

    registerBtn.onclick = function() {
        //käyttäjän syöttämät arvot
        const nameReg = document.getElementById("nameReg").value;
        const passwordReg = document.getElementById("paswordReg").value;
        const isAdmin = document.querySelector(".admin").checked; //true tai false

        let nameIsFree = true

        for (let i = 0; i < users.length; i++) { //tarkistaa, onko samannimistä käyttäjää
            if (users[i].name == nameReg) {
                nameIsFree = false;
            }
        }

        if (nameIsFree) { //Jos käyttäjää ei vielä olemassa annetulla nimellä
            if (nameReg != "" && passwordReg != "") {
                let user = {
                    name: nameReg,
                    password: passwordReg,
                    admin: isAdmin
                }

                users.push(user); //laittaa käyttäjän talteen

                console.log("rekisteröityminen onnistui!");
                console.log(users);
            } else {
                console.log("Täytä molemmat kentät!") // tähän kohtaan joku ääni tai teksti näytölle
            }
        } else {
            console.log("käyttäjä nimi on varattu")
        }
    }
    
}


logWindow.addEventListener("click", function(e) {
    e.stopPropagation();
});
regWindow.addEventListener("click", function(e) {
    e.stopPropagation();
});

//jos klikkaa taustaa
fadeBg.addEventListener("click", function(e) {
    if (isLogMenuOpen) {
        logWindow.style.display = "none";
    }
    if (isRegMenuOpen) {
        regWindow.style.display = "none";
    }

    fadeBg.style.display = "none";
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