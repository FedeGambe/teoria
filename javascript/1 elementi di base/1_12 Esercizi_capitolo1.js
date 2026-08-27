// ============================================================
// ESERCIZI — riepilogo capitolo 1 (argomenti senza esercizio dedicato)
// ============================================================
// Nota: Controllo di Flusso ha già il suo esercizio in 1_2, Numeri in
// 1_10, Stringhe in 1_11, Oggetti in 1_5, Array in 1_6. Qui il resto:
// Variabili, Tipi di Dati, Date, Cicli, Funzioni.

// ------------------------------------------------------------
// Esercizio: Variabili
// ------------------------------------------------------------
// Dichiarare una costante per il nome, una variabile per l'età che
// verrà aggiornata dopo un compleanno, e mostrare la differenza tra
// let e const provando a riassegnare entrambe.
const nomeEsercizio = "Federico";
let etàEsercizio = 29;

etàEsercizio += 1; // compleanno: let si può riassegnare
console.log(nomeEsercizio + " ha ora " + etàEsercizio + " anni");

try {
    nomeEsercizio = "Altro nome"; // const non si può riassegnare
} catch (errore) {
    console.log("Errore atteso:", errore.message);
}


// ------------------------------------------------------------
// Esercizio: Tipi di Dati
// ------------------------------------------------------------
// Data una lista di valori eterogenei, stampare per ciascuno il
// risultato di typeof e se è un array con Array.isArray().
const valoriEterogenei = [42, "ciao", true, null, undefined, { a: 1 }, [1, 2], () => {}];

valoriEterogenei.forEach((valore) => {
    console.log(valore, "->", typeof valore, "| è array:", Array.isArray(valore));
});
// 42 -> number | è array: false
// ciao -> string | è array: false
// true -> boolean | è array: false
// null -> object | è array: false   <- curiosità: typeof null è "object", storico bug del linguaggio
// undefined -> undefined | è array: false
// { a: 1 } -> object | è array: false
// [ 1, 2 ] -> object | è array: true
// [Function (anonymous)] -> function | è array: false


// ------------------------------------------------------------
// Esercizio: Date
// ------------------------------------------------------------
// Calcolare quanti giorni mancano dalla data odierna a una data futura.
const oggi = new Date();
const dataFutura = new Date(2026, 11, 25); // 25 dicembre 2026 (mese zero-based: 11 = dicembre)

const differenzaMs = dataFutura - oggi; // sottrarre due Date dà la differenza in millisecondi
const differenzaGiorni = Math.ceil(differenzaMs / (1000 * 60 * 60 * 24)); // ms -> secondi -> minuti -> ore -> giorni
console.log("Giorni mancanti a Natale 2026:", differenzaGiorni);


// ------------------------------------------------------------
// Esercizio: Cicli
// ------------------------------------------------------------
// Stampare la tabellina del 7 (da 1 a 10) usando un ciclo for, poi
// sommare solo i multipli di 3 da 1 a 30 con un while.
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

let numero = 1;
let sommaMultipliDi3 = 0;
while (numero <= 30) {
    if (numero % 3 === 0) sommaMultipliDi3 += numero;
    numero++;
}
console.log("Somma multipli di 3 fino a 30:", sommaMultipliDi3); // 165


// ------------------------------------------------------------
// Esercizio: Funzioni
// ------------------------------------------------------------
// Scrivere una funzione che verifica se un numero è primo, e una
// funzione ricorsiva che calcola la somma dei primi n numeri naturali.
function èPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // divisibile per qualcosa oltre 1 e se stesso -> non primo
    }
    return true;
}
console.log(èPrimo(7));  // true
console.log(èPrimo(10)); // false

function sommaFinoA(n) {
    if (n <= 0) return 0; // caso base
    return n + sommaFinoA(n - 1); // chiamata ricorsiva
}
console.log(sommaFinoA(5)); // 15 (5+4+3+2+1)
