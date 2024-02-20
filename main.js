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



let voto = 20;

switch (voto) {
    case 17:
        console.log("insufficiente");
        break;
    case 18:
        console.log("sufficiente");
        break;
    case 19:
        console.log("sufficiente");
        break;
    case 20:
        console.log("sufficiente");
        break;
    case 21:
        console.log("buono");
        break;
    case 22:
        console.log("buono");
        break;
    case 23:
        console.log("buono");
        break;
    case 24:
        console.log("distinto");
        break;
    case 25:
        console.log("distinto");
        break;
    case 26:
        console.log("distinto");
        break;
    case 27:
        console.log("ottimo");
        break;
    case 28:
        console.log("ottimo");
        break;
    case 29:
        console.log("ottimo");
        break;
    case 30:
        console.log("eccellente");
        break;
   
    default:
        console.log("inserire un voto valido");
        break;
}