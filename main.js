//ESERCIZIO 1

let gattiTotali = 44;
let gattiFila = Math.floor(44 / 6);
let gattiResto = 44 % 6;
let gattiRimanenti = gattiFila - gattiResto;

console.log("Ci sono " + gattiFila + " file di gatti e ne mancano " + gattiRimanenti + " per una nuova fila, con un avanzo di " + gattiResto + ".");

//ESERCIZIO 2

let v = 30;

if (v <= 18) {
    console.log("insufficiente");
} else if (v >= 18 && v < 21) {
    console.log("sufficiente");
} else if (v >= 21 && v < 24) {
    console.log("buono");
} else if (v >= 24 && v < 27) {
    console.log("distinto");
} else if (v >= 27 && v <= 29) {
    console.log("ottimo");
} else if (v == 30) {
    console.log("eccellente");
} else {
    console.log("inserire un voto valido");
}

let voto = 28;

switch (true) {
    case (voto <= 18):
        console.log("insufficiente");
        break;
    case (voto >= 18 && voto < 21):
        console.log("sufficiente");
        break;
    case (voto >= 21 && voto < 24):
        console.log("buono");
        break;
    case (voto >= 24 && voto < 27):
        console.log("distinto");
        break;
    case (voto >= 27 && voto <= 29):
        console.log("ottimo");
        break;
    case (voto == 30):
        console.log("eccellente");
        break;
    
    default:
        console.log("inserire un voto valido");
        break;
}

//ESERCIZIO 3

let temperatura = -11;
console.log("la temperatura indicata è " + temperatura);

if (temperatura >= 30) {
    console.log("Lu mare, lu sole, lu ientu");
} else if (temperatura < 20 && temperatura >0) {
    console.log("non ci sono più le mezze stagioni");
} else if (temperatura < 30 & temperatura > 20) {
    console.log("mi dia una Peroni sudata");
} else if (temperatura < 0 && temperatura > -10) {
    console.log("non è tanto il freddo quanto l'umidità");
} else if (temperatura < -10) {
    console.log("copriti... ancora ti raffreddi");
} else {
    console.log("");
}

let gradi = -273;
console.log("la temperatura indicata è " + gradi);

switch (true) {
    case (gradi >= 30):
        console.log("Lu mare, lu sole, lu ientu");
        break;
    case (gradi < 20 && gradi >0):
        console.log("non ci sono più le mezze stagioni");
        break;
    case (gradi < 30 & gradi > 20):
        console.log("mi dia una Peroni sudata");
        break;
    case (gradi < -10 && gradi > -273):
        console.log("copriti... ancora ti raffreddi");
        break;
    case (gradi < 0 && gradi > -10):
        console.log("non è tanto il freddo quanto l'umidità");
        break;
    case (gradi == -273):
        console.log("0 assoluto... come ci sei arrivato?");
        break;
    default:
        break;
}