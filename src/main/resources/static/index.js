
// const billetter = [];
// let teller = 0;

function registrer(){
    console.log("registrer()");
    const firstOption = document.getElementById("0").innerHTML;
    let feilSkrevetInn = false;
    let antallFeil = $("#inputAntall").val();
    let filmFeil = $("#velgFilm").val();
    let forNavnetFeil = $("#inputForNavn").val();
    let etterNavnetFeil = $("#inputEtterNavn").val();
    let tlfNretFeil = $("#inputTlfNr").val();
    let epostenFeil = $("#inputEpost").val();
    let antall = $("#inputAntall").val();

    if(antallFeil<=0 || isNaN(antallFeil)){
        $("#feilmeldingAntall").html("Må skrive et tall større enn 0".fontcolor("red"));
        feilSkrevetInn = true;
    }
    if(filmFeil == firstOption ){
        $("#filmFeilmelding").html("Må velge en film".fontcolor("red"));
        filmFeil = firstOption;
        feilSkrevetInn = true;
    }
    if (forNavnetFeil === "" ||  !isNaN(Number(forNavnetFeil))){
        let ut = "Må skrive inn noe i Fornavn".fontcolor("red");
        $("#feilmeldingFornavn").html(ut);
        feilSkrevetInn = true;
    }
    if (etterNavnetFeil === "" || !isNaN(Number(etterNavnetFeil))){
        let ut = "Må skrive inn noe i Etternavn".fontcolor("red");
        $("#feilmeldingEtternavn").html(ut);
        feilSkrevetInn = true;
    }
    if (tlfNretFeil === "" || isNaN(Number(tlfNretFeil))){
        let ut = "Må skrive inn tall i Tlf".fontcolor("red");
        $("#feilmeldingTlf").html(ut);
        feilSkrevetInn = true;
    }
    if (epostenFeil === "" || !isNaN(Number(epostenFeil))){
        let ut = "Må skrive inn noe i Epost".fontcolor("red");
        $("#feilmeldingEpost").html(ut);
        feilSkrevetInn = true;
    }
    if (feilSkrevetInn) return;

    const Billetter= {
        film: $("#velgFilm").val(),
        antall: antall,
        forNavnet: $("#inputForNavn").val(),
        etterNavnet: $("#inputEtterNavn").val(),
        tlfNret: $("#inputTlfNr").val(),
        eposten: $("#inputEpost").val()
    //    Ingen ; semikolon i slutten av objekt.
    }
    // Koble sammen controller og linke til neste fase:
    $.post("/lagre", Billetter, function (){
        hentAlle();
    });

//    Tøm inputfelt:
    $("#velgFilm").val("");
    $("#inputAntall").val("");
    $("#inputForNavn").val("");
    $("#inputEtterNavn").val("");
    $("#inputTlfNr").val("");
    $("#inputEpost").val("");

    /* tøm feilmelding */
    $("#filmFeilmelding").html("");
    $("#feilmeldingAntall").html("");
    $("#feilmeldingFornavn").html("");
    $("#feilmeldingEtternavn").html("");
    $("#feilmeldingTlf").html("");
    $("#feilmeldingEpost").html("");
}

function hentAlle(){
    console.log("Hent alle()");
    let ut="<table class='table table-striped'>";
    ut += "<tr> " +
        "<th>Film:</th> " +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th>"+
        "</tr>";

    $.get("/printUt", function (dataFraBillettArray){
        for(let billett of dataFraBillettArray){
            ut += "<tr>" +
                "<td>" +billett.film + "</td>" +
                "<td>" + billett.antall + "</td>" +
                "<td>"+ billett.forNavnet + "</td>" +
                "<td>" + billett.etterNavnet + "</td>" +
                "<td>" + billett.tlfNret + "</td>" +
                "<td>" + billett.eposten + "</td>" +
                /*"<td>" + <button class='btn btn-danger' onclick='slettEnBill("+billett.id+")'>Slett </button> + "</td>"*/
                "</tr>";
        }
        ut+="</table>"
        $("#div1").html(ut);
    });
}

function slett(){
    console.log("slett()");
    $.get("/slettAlle", function (){
        hentAlle();
    })
}
 /*
function slettEnBill(id){
    const url = "slettEnKunde/?id="+id;      // Denne sletter en kunde med id..;
    $.get(url, function(){
        window.location.href = "/";    // Denne kjører index.html fila på nytt
    });

}

  */
/*
function kjøp(){

    let ut= "";

    // let index = document.getElementById("velgFilm").selectedIndex;
    // let film = document.getElementById("velgFilm").options[index].innerHTML;
    let film = document.getElementById("velgFilm").value;

    const pageArray = document.getElementsByTagName("p");
    const firstOption = document.getElementById("0").innerHTML;
    let feilSkrevetInn = false;
    const inputArray = document.getElementsByTagName("input");

}

 */

