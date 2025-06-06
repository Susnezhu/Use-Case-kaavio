const voteContainer = document.getElementById("voteContainer") //Grid conteineri, johon tulee kaikki äänestykset

const voteAddWindow = document.getElementById("voteAddWindow"); //ikkuna, jossa voi tehdä uuden äänestyksen

const optionInput1 = document.getElementById("optionInput1");
const optionInput2 = document.getElementById("optionInput2");
const addMoreOptions = document.getElementById("addMoreOptions");
const saveVote = document.getElementById("saveVote");

const optionInputs = document.getElementById("optionInputs");

//lisää uuden äänestyksen
function addVote() {
    voteAddWindow.style.display = "block";
    fadeBg.style.display = "block";

    addMoreOptions.onclick = addOptionField;

    saveVote.onclick = function() {
        //pitäisi tallentaa uuden äänestys ikkunan: voteContaineriin
    }
}

//lisää uuden äänestys vaihtoehto kentän
function addOptionField() {
    const currentOptions = optionInputs.querySelectorAll("optiondivContainer").length;
    const optionNumber = currentOptions + 3; //alkaa kolmosesta, koska ensimmäistä kahta ei saa poistaa

    //luo uuden div konteinerin
    const divContainer = document.createElement("div");
    divContainer.id = "optiondivContainer" + optionNumber;

    //luo input elementin
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Vaihtoehto " + optionNumber;
    input.id = "optionInput" + optionNumber;

    //luo poisto näppäimen
    const delBtn = document.createElement("button");
    delBtn.textContent = "Poista";
    delBtn.id = "delOption" + optionNumber;

    delBtn.onclick = function () {
        divContainer.remove();
        renumberOptions();
    };

    divContainer.appendChild(input);
    divContainer.appendChild(delBtn);
    optionInputs.appendChild(divContainer);

    renumberOptions();
}

//antaa input ja poisto näppäimelle uuden arvon
function renumberOptions() {
    const containers = optionInputs.querySelectorAll("optiondivContainer");

    //jokaiselle konteinerille uuden numeron
    containers.forEach(function(container, index) {
        const number = index + 3;

        const input = container.querySelector("input");
        const delBtn = container.querySelector("button");

        input.placeholder = "Vaihtoehto " + number;
        input.id = "optionInput" + number;

        delBtn.id = "delOption" + number;
        container.id = "optiondivContainer" + number;
    });
}

