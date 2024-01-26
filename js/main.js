let province = ["Parma", "Reggio Emilia"];
let comuni = [
    {
        "nome": "Sorbolo Mezzani",
        "provincia": "Parma"
    },
    {
        "nome": "Colorno",
        "provincia": "Parma"
    },
    {
        "nome": "Fontanellato",
        "provincia": "Parma"
    },
    {
        "nome": "Felino",
        "provincia": "Parma"
    },
    {
        "nome": "Sala Baganza",
        "provincia": "Parma"
    },
    {
        "nome": "Praticello di Gattatico",
        "provincia": "Reggio Emilia"
    },
    {
        "nome": "Brescello",
        "provincia": "Reggio Emilia"
    },
    {
        "nome": "Sant'Ilario d'Enza",
        "provincia": "Reggio Emilia"
    }
];

function clearComuni(){
    let selectComuni = document.getElementById("comune");
    let selectResettata = document.createElement("select");
    selectResettata.name = "comune";
    selectResettata.id = "comune";
    let opzioneVuota = document.createElement("option");
    opzioneVuota.value = "none";
    opzioneVuota.innerHTML = "-- Scegli il comune --";
    selectResettata.appendChild(opzioneVuota);
    selectComuni.innerHTML = selectResettata;
}

function loadProvince(){
    let selectProvince = document.getElementById("provincia");
    for (let i = 0; i < province.length; i++){
        let nuovaOpzione = document.createElement("option");
        nuovaOpzione.value = province[i].replace(" ", "").toLowerCase();
        nuovaOpzione.innerHTML = province[i];
        selectProvince.appendChild(nuovaOpzione);
    }
}

function loadComuni(){
    clearComuni();
    let provincia = document.getElementById("provincia").value;
    let selectComuni = document.getElementById("comune");
    for (let i = 0; i < comuni.length; i++){
        if (comuni[i].provincia.replace(" ", "").toLowerCase() == provincia){
            let nuovaOpzione = document.createElement("option");
            nuovaOpzione.value = comuni[i].nome.replace(" ", "").toLowerCase();
            nuovaOpzione.innerHTML = comuni[i].nome;
            selectComuni.appendChild(nuovaOpzione);
        }
    }
}

loadProvince();