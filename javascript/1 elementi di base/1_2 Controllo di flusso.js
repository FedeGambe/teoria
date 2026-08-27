// ============================================================
// CONTROLLO DI FLUSSO — condizioni e cicli
// ============================================================
// if/else, switch, ternario, while/do-while, for (nelle sue varianti), break/continue, etichette.
// Le funzioni sono state spostate in Funzioni.js: qui restano solo i costrutti che decidono "quale codice eseguire" e "quante volte eseguirlo".

// ------------------------------------------------------------
// 1. Truthy / falsy
// ------------------------------------------------------------
// Quando JS valuta una condizione (if, while, ternario...) converte il valore in booleano. 
// Alcuni valori sono "falsy" (si comportanocome false), tutti gli altri sono "truthy" (si comportano come true).
// Valori falsy (sono TUTTI, nessun altro): false, 0, -0, 0n, "", null, undefined, NaN

if (0) console.log("non stampa"); // 0 è falsy
if (false) console.log("non stampa");
if ("") console.log("non stampa");
if (null) console.log("non stampa");
if (undefined) console.log("non stampa");
if (NaN) console.log("non stampa");

// Attenzione: a differenza di Python, in JS un array o un oggetto sono
// SEMPRE truthy, anche se vuoti (in Python invece [] e {} sono falsy!).
if ([]) console.log("stampa: array vuoto è truthy in JS");
if ({}) console.log("stampa: oggetto vuoto è truthy in JS");

// Per controllare se un array/oggetto è "vuoto" bisogna controllare
// esplicitamente la sua lunghezza o le sue proprietà:
const utenti = [];
if (utenti.length > 0) console.log("non stampa: array vuoto");
// equivalente più corto: if (utenti.length) { ... }  (0 è falsy, un numero > 0 è truthy)

const oggettoVuoto = {};
if (Object.keys(oggettoVuoto).length > 0) console.log("non stampa: oggetto vuoto");


// ------------------------------------------------------------
// 2. if / else / else if
// ------------------------------------------------------------
const numero = 10;
if (numero > 0) {
    console.log("Il numero è positivo");
} else {
    console.log("Il numero è negativo o zero");
}

// else if concatena più condizioni in sequenza (equivalente a elif in Python)
const voto = 85;
if (voto >= 90) {
    console.log("Ottimo");
} else if (voto >= 80) {
    console.log("Buono");
} else if (voto >= 70) {
    console.log("Sufficiente");
} else {
    console.log("Insufficiente");
}


// ------------------------------------------------------------
// 3. switch
// ------------------------------------------------------------
// Alternativa più leggibile a una lunga catena di if/else quando si confronta UNA variabile con diversi valori possibili. 
// Il confronto interno usa sempre ===: 1 !== "1", quindi il tipo conta.
//
// Sintassi:
// switch (variabile) {
//     case valore1: /* codice */ break;
//     case valore2: /* codice */ break;
//     default: /* codice se nessun case corrisponde */
// }
const giorno = 3;
switch (giorno) {
    case 1:
        console.log("Lunedì");
        break;
    case 2:
        console.log("Martedì");
        break;
    case 3:
        console.log("Mercoledì");
        break;
    default:
        console.log("Giorno non valido");
}

// 3.1 Fall-through: se ometti il break, l'esecuzione "cade" nel case
// successivo e continua finché non trova un break (o finisce lo switch).
// Si può usare INTENZIONALMENTE per raggruppare più valori sullo stesso codice:
const colore = "rosso";
switch (colore) {
    case "rosso":
    case "rosa":
        console.log("Colore caldo");
        break;
    case "blu":
    case "verde":
        console.log("Colore freddo");
        break;
    default:
        console.log("Colore neutro");
}

// 3.2 switch(true): un trucco per usare condizioni complesse (range,
// espressioni) invece di semplici valori fissi come case.
const numeroDaClassificare = 5;
switch (true) {
    case numeroDaClassificare < 0:
        console.log("Il numero è negativo");
        break;
    case numeroDaClassificare === 0:
        console.log("Il numero è zero");
        break;
    default:
        console.log("Il numero è positivo");
}


// ------------------------------------------------------------
// 4. Operatore ternario
// ------------------------------------------------------------
// Forma compatta di if/else che restituisce un valore.
// Sintassi: condizione ? espressioneSeVero : espressioneSeFalso
const eta = 18;
const messaggio = eta >= 18 ? "Sei maggiorenne" : "Sei minorenne";
console.log(messaggio); // "Sei maggiorenne"


// ------------------------------------------------------------
// 5. while e do...while
// ------------------------------------------------------------
// while: controlla la condizione PRIMA di eseguire il blocco.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do...while: esegue il blocco ALMENO UNA VOLTA, poi controlla la condizione. 
// Utile quando il codice deve girare almeno una volta anche se la condizione parte già falsa.
let j = 5;
do {
    console.log(j); // stampa 5 anche se la condizione è già falsa
    j++;
} while (j < 5);


// ------------------------------------------------------------
// 6. for classico
// ------------------------------------------------------------
// Sintassi: for (inizializzazione; condizione; incremento) { ... }
for (
    let k = 0; // 1. inizializzazione: eseguita una sola volta all'inizio
    k < 5;     // 2. condizione: controllata prima di ogni iterazione
    k++        // 3. incremento: eseguito dopo ogni iterazione (k++ equivale a k = k + 1)
) {
    console.log(k);
}

// 6.1 Iterare un array con l'indice
const frutti = ["mela", "banana", "pera"];
for (let idx = 0; idx < frutti.length; idx++) {
    console.log(frutti[idx]); // mela, banana, pera
}

// 6.2 Iterare un array di oggetti
const persone = [
    { nome: "Mario", eta: 30 },
    { nome: "Luigi", eta: 25 },
    { nome: "Peach", eta: 28 },
];
for (let idx = 0; idx < persone.length; idx++) {
    console.log(persone[idx].nome + ": " + persone[idx].eta);
}


// ------------------------------------------------------------
// 7. for...of vs for...in
// ------------------------------------------------------------
// for...of  -> scorre i VALORI di una struttura iterabile (array, stringhe...).
//              È l'equivalente più diretto di "for v in lista:" in Python.
// for...in  -> scorre le CHIAVI/PROPRIETÀ di un oggetto (o gli INDICI di un array,
//              come stringhe: "0", "1"... da convertire con Number() se servono numeri).
//
// Regola pratica: for...of per gli array, for...in per gli oggetti.

const frutti2 = ["mela", "banana", "pera"];

for (const f of frutti2) { // scorre i valori: "mela", "banana", "pera"
    console.log(f);
}

for (const indice in frutti2) { // scorre le chiavi/indici: "0", "1", "2" (stringhe!)
    console.log(indice);
}

const persona = { nome: "Mario", eta: 25, citta: "Roma" };
for (const proprieta in persona) { // il modo corretto di iterare un oggetto
    console.log(proprieta + ": " + persona[proprieta]);
    // stampa: nome: Mario, eta: 25, citta: Roma
}


// ------------------------------------------------------------
// 8. break e continue
// ------------------------------------------------------------
// break    -> interrompe subito il ciclo e passa al codice successivo.
// continue -> salta SOLO l'iterazione corrente e passa alla prossima.

for (let n = 0; n < 10; n++) {
    if (n === 5) break; // esce dal ciclo quando n arriva a 5
    console.log(n); // 0, 1, 2, 3, 4
}

for (let n = 0; n < 10; n++) {
    if (n === 5) continue; // salta solo n === 5, il ciclo prosegue
    console.log(n); // 0, 1, 2, 3, 4, 6, 7, 8, 9
}


// ------------------------------------------------------------
// 9. Cicli annidati ed etichette (labels)
// ------------------------------------------------------------
// Un ciclo dentro un altro ciclo: quello interno viene eseguito
// per intero ad ogni iterazione di quello esterno.
for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
        console.log(a, b); // 0 0, 0 1, 0 2, 1 0, 1 1, 1 2, 2 0, 2 1, 2 2
    }
}

// Le etichette (labels) permettono di dare un nome a un ciclo, così break/continue possono riferirsi al ciclo ESTERNO invece che a quello più vicino. 
// Da usare con parsimonia: rendono il codice meno leggibile; spesso conviene estrarre la logica in una funzione.
outerLoop: for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
        if (a === 1 && b === 1) break outerLoop; // esce da ENTRAMBI i cicli
        console.log(a, b); // 0 0, 0 1, 0 2, 1 0
    }
}

outer: for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
        if (b === 2) continue outer; // salta alla prossima iterazione del ciclo ESTERNO
        console.log(a, b); // 0 0, 0 1, 1 0, 1 1, 2 0, 2 1
    }
}


// ------------------------------------------------------------
// 10. Esercizio: Controllo di flusso
// ------------------------------------------------------------
// Chiedere (idealmente da input utente) un numero e stampare se è positivo, negativo o zero. 
// Se positivo, indicare anche se pari o dispari. Se negativo, indicare se è minore o maggiore di -10.
const numeroDaVerificare = parseInt("7", 10);

if (numeroDaVerificare > 0) {
    console.log("Il numero è positivo");
    console.log(numeroDaVerificare % 2 === 0 ? "Il numero è pari" : "Il numero è dispari");
} else if (numeroDaVerificare < 0) {
    console.log("Il numero è negativo");
    console.log(numeroDaVerificare < -10 ? "Il numero è minore di -10" : "Il numero è maggiore di -10");
} else {
    console.log("Il numero è zero");
}
