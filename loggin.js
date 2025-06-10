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
const registerBtn = document.getElementById("registerBtn");
const errorMessageLog = document.getElementById("errorMessageLog");

//register window
const regWindow = document.getElementById("regWindow");
const logginBtn = document.getElementById("logginBtn");
const errorMessageReg = document.getElementById("errorMessageReg");

let users = [] //Tähän tallentuu käyttäjien tiedot ja salasanat. Myöhemmin lisään käyttäjiä Local Storageen

//loggin ja register menu avaaminen
function dropMenuOpener() {
    dropMenu.style.display = "block";
    isMenuOpen = true;
}

function showErrorMessage(id, message="", color="red") {
    id.textContent = message;
    id.style.color = color;
    id.style.visibility = "visible";

    setTimeout(function() {
        id.style.visibility = "hidden";
    },3000)
}


function logIn() {
    logWindow.style.display = "block"; //näyttää loggin ikkunan
    regWindow.style.display = "none";
    fadeBg.style.display = "block";

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
                        showErrorMessage(errorMessageLog ,"kirjautuminen onnistui!", "green");
                    } else {
                        showErrorMessage(errorMessageLog, "väärä salasana");
                    }
                    break;
                }
            }

            if (!userFound) {
                showErrorMessage(errorMessageLog, "käyttäjä ei löytynyt");
            }

        } else {
            showErrorMessage(errorMessageLog,"Täytä molemmat kentät!");
        }
    }
}

function regIn() {
    regWindow.style.display = "block"; //näyttää register ikkunan
    logWindow.style.display = "none";
    fadeBg.style.display = "block";

    registerBtn.onclick = function() {
        //käyttäjän syöttämät arvot
        const nameReg = document.getElementById("nameReg").value;
        const passwordReg = document.getElementById("paswordReg").value;
        const isAdmin = document.querySelector(".admin").checked; //true tai false

        let nameIsFree = true

        for (let i = 0; i < users.length; i++) { //tarkistaa, onko samannimistä käyttäjää
            if (users[i].name == nameReg) {
                nameIsFree = false;
                break;
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

                showErrorMessage(errorMessageReg, "rekisteröityminen onnistui!", "green");
            } else {
                showErrorMessage(errorMessageReg, "Täytä molemmat kentät!")
            }
        } else {
            showErrorMessage(errorMessageReg, "käyttäjä nimi on varattu")
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
    logWindow.style.display = "none";
    regWindow.style.display = "none";
    voteAddWindow.style.display = "none";

    fadeBg.style.display = "none";

    resetVoteForm();
    resetLogRegForm();
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