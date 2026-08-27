// ============================================================
// FUNZIONI — definizione, parametri, return, ricorsione
// ============================================================
// (Spostato fuori da Controllo_di_flusso.js: le funzioni non sono
// un costrutto di controllo di flusso, meritano un file a parte)


// ------------------------------------------------------------
// 1. Tre modi per definire una funzione
// ------------------------------------------------------------

// FUNCTION DECLARATION: la forma "classica". Grazie all'hoisting può
// essere invocata anche PRIMA della sua dichiarazione nel codice.
function salutaBase() {
    console.log("ciao");
}

// FUNCTION EXPRESSION: una funzione assegnata a una variabile.
// Può essere invocata solo DOPO questa riga (non è soggetta a hoisting
// come le function declaration). Attenzione: const rende costante il
// riferimento alla funzione, non "congela" la funzione stessa.
const salutaEspressione = function () {
    console.log("ciao");
};

// ARROW FUNCTION: sintassi più compatta per funzioni anonime.
// Anche questa va invocata solo dopo la dichiarazione.
// - Un solo parametro -> le parentesi tonde sono opzionali: x => ...
// - Un solo statement  -> si possono omettere { } e return
const salutaFreccia = () => {
    console.log("ciao");
};

// Le tre forme fanno la stessa cosa quando vengono chiamate. La
// differenza principale (oltre alla sintassi) è il comportamento di
// `this`: le function declaration/expression hanno un proprio `this`,
// le arrow function invece "ereditano" il `this` del contesto in cui
// sono state create. Approfondiremo `this` nel capitolo su closures.


// ------------------------------------------------------------
// 2. Parametri e valori di ritorno
// ------------------------------------------------------------

// Funzione con parametro
function salutaConNome(nome) {
    console.log("Ciao " + nome);
}
salutaConNome("Mario"); // Ciao Mario

// Grazie all'hoisting, si può chiamare una function declaration anche
// prima che compaia nel codice sorgente:
salutaPrimaDiEssereDichiarata("Luigi"); // funziona comunque: "Ciao Luigi"
function salutaPrimaDiEssereDichiarata(nome) {
    console.log("Ciao " + nome);
}

// Funzione senza parametri: non riceve input, non dipende da valori esterni
function salutaMondo() {
    console.log("Ciao mondo");
}
salutaMondo();

// return restituisce un valore utilizzabile altrove nel codice
function somma(a, b) {
    return a + b;
}
const risultato = somma(5, 3);
console.log(risultato); // 8


// ------------------------------------------------------------
// 3. Parametri di default e rest
// ------------------------------------------------------------

// Parametro di default: valore usato se l'argomento non viene passato
function salutaConDefault(nome = "ospite") {
    console.log("Ciao " + nome);
}
salutaConDefault();        // Ciao ospite
salutaConDefault("Mario"); // Ciao Mario

// Parametro rest: raccoglie un numero indefinito di argomenti in un array
// (i tre puntini ... indicano "tutto il resto degli argomenti")
function sommaRest(...numeri) {
    let totale = 0;
    for (const numero of numeri) {
        totale += numero;
    }
    return totale;
}
console.log(sommaRest(1, 2, 3, 4, 5)); // 15


// ------------------------------------------------------------
// 4. Funzioni anonime
// ------------------------------------------------------------
// Una funzione senza nome, tipicamente assegnata a una variabile o
// passata come argomento a un'altra funzione (vedi sezione 6).
const salutaAnonima = function (nome) {
    console.log("Ciao " + nome);
};
salutaAnonima("Mario"); // Ciao Mario


// ------------------------------------------------------------
// 5. Funzioni ricorsive
// ------------------------------------------------------------
// Una funzione che chiama se stessa. Serve sempre un CASO BASE che
// interrompa la ricorsione, altrimenti si va in stack overflow.
function fattoriale(n) {
    if (n === 0) {
        return 1; // caso base: 0! = 1
    }
    return n * fattoriale(n - 1); // chiamata ricorsiva
}
console.log(fattoriale(5)); // 120  (5! = 5*4*3*2*1)


// ------------------------------------------------------------
// 6. Funzioni di ordine superiore (higher-order functions)
// ------------------------------------------------------------
// Una funzione che accetta un'altra funzione come argomento, o che
// restituisce una funzione come risultato. Sono la base di metodi
// come map/filter/reduce che vedremo più avanti.
function applicaFunzione(array, funzione) {
    const risultato = [];
    for (const elemento of array) {
        risultato.push(funzione(elemento)); // invoca la funzione passata come argomento
    }
    return risultato;
}
const numeri = [1, 2, 3, 4, 5];
const quadrati = applicaFunzione(numeri, (x) => x * x); // arrow function passata come argomento
console.log(quadrati); // [1, 4, 9, 16, 25]
