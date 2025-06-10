const voteContainer = document.getElementById("voteContainer") //Grid conteineri, johon tulee kaikki äänestykset

const voteAddWindow = document.getElementById("voteAddWindow"); //ikkuna, jossa voi tehdä uuden äänestyksen

const addVoteBtn = document.getElementById("addVoteBtn")
const voteName = document.getElementById("voteName");
const optionInput1 = document.getElementById("optionInput1");
const optionInput2 = document.getElementById("optionInput2");
const addMoreOptions = document.getElementById("addMoreOptions");
const saveVote = document.getElementById("saveVote");

const optionInputs = document.getElementById("optionInputs");

let groupName = 1
let optionNum = 1

//lisää uuden äänestyksen
function addVote() {
    voteAddWindow.style.display = "block";
    fadeBg.style.display = "block";

    addMoreOptions.onclick = addOptionField;

    saveVote.onclick = function() {

        if (!optionInput1.value.trim() || !optionInput2.value.trim()) {return}; //jos on tyhjät kaksi ensimmäistä

        //div äänestys konteireni
        const divContainer = document.createElement("div");
        divContainer.className = "voteItem";
        divContainer.id = "voteItem" + groupName;

        const heading = document.createElement("h2");
        heading.textContent = voteName.value;
        divContainer.appendChild(heading);

        const rowdiv = document.createElement("div");
        rowdiv.className = "row"

        //tähäm diviin ryhmä radio input näppäimiä
        const divOptions = document.createElement("div");
        divOptions.className = "divOptions";

        //tarkistaa kaikki input ja luo radio input
        const inputs = optionInputs.querySelectorAll("input");
        for (inp of inputs) {
            const value = inp.value.trim();

            if (value) {
            createNewRadio(value, optionNum, groupName, divOptions);
            optionNum++;
            }
        }
        rowdiv.appendChild(divOptions);

        //äänestys näppäin
        const voteButton = document.createElement("button");
        voteButton.id = "voteButton" + groupName;
        voteButton.className = "voteButton"
        voteButton.innerHTML = "Äänestä"
        rowdiv.appendChild(voteButton);

        //äänestyksen poistonäppäin
        const voteDeleteBtn = document.createElement("button");
        voteDeleteBtn.className = "voteDeleteBtn"
        voteDeleteBtn.id = "voteDeleteBtn" + groupName;
        voteDeleteBtn.textContent = "Poista";


        voteDeleteBtn.onclick = function () {
            divContainer.remove();
        }

        divContainer.appendChild(rowdiv);
        divContainer.appendChild(voteDeleteBtn)
        voteContainer.appendChild(divContainer);

        groupName ++;

        fadeBg.style.display = "none";
        voteAddWindow.style.display = "none";

        resetVoteForm();
    }
}

//tyhjentää kaikki käyttäjän syötetyt arvot ja poistaa lisätyt vaihtoehdot (äänestys luonti ikkuna)
function resetVoteForm() {
    voteName.value = "";
    optionInput1.value = "";
    optionInput2.value = "";

    const extraOptions = optionInputs.querySelectorAll(".optiondivContainer");

    extraOptions.forEach(function(div) {
        div.remove();
    });

    optionNum = 1;
}
//tyhjentää kaikki käyttäjän syötetyt arvot (loggin ja register ikkunat)
function resetLogRegForm() {
    const nameReg = document.getElementById("nameReg").value = "";
    const passwordReg = document.getElementById("paswordReg").value = "";
    const isAdmin = document.querySelector(".admin").checked = false;

    const nameLog = document.getElementById("namelog").value = "";
    const passwordLog = document.getElementById("paswordlog").value = "";
}

//luo uuden radio input ja lisää sen heti näytölle
function createNewRadio(userInput, optionNum, groupName, container) {
    //radio input näppäin
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "group" + groupName;
    radio.value = userInput;
    radio.id = "option" + optionNum;

    const label = document.createElement("label");
    label.htmlFor = "option" + optionNum;
    label.textContent = userInput;

    //div, johon tulee radio ja label
    const newDiv = document.createElement("div");
    newDiv.className = "optionPair";

    newDiv.appendChild(radio);
    newDiv.appendChild(label);

    container.appendChild(newDiv);
}

//lisää uuden äänestys vaihtoehto kentän
function addOptionField() {
    const currentOptions = optionInputs.querySelectorAll(".optiondivContainer").length;
    const optionNumber = currentOptions + 3; // alkaa, kolmosesta, koska ensimmäistä kahta ei saa poistaa

    //luo div konteinerin, johon tulee input ja poisto näppäin
    const divContainer = document.createElement("div");
    divContainer.className = "optiondivContainer";
    divContainer.id = "optiondivContainer" + optionNumber;

    //luo input
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Vaihtoehto " + optionNumber;
    input.id = "optionInput" + optionNumber;

    //luo poistonäppäimen
    const delBtn = document.createElement("button");
    delBtn.textContent = "Poista";
    delBtn.id = "delOption" + optionNumber;
    delBtn.className = "delOptionBtn";

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
    const containers = optionInputs.querySelectorAll(".optiondivContainer");

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