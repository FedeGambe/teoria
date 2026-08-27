// ============================================================
// ARRAY — metodi funzionali (map, filter, find, includes, reduce)
// ============================================================
// Rispetto a Python, JS mette moltissimo comportamento direttamente
// nei metodi dell'array invece che in funzioni globali o comprehension.
// Questi metodi NON modificano l'array originale (tranne dove indicato):
// restituiscono sempre un nuovo valore.

const numeri = [1, 2, 3, 4, 5];


// ------------------------------------------------------------
// 1. map(): trasforma ogni elemento
// ------------------------------------------------------------
// Equivalente a una list comprehension in Python: [x * 2 for x in numeri]
// Restituisce un NUOVO array della stessa lunghezza, con ogni elemento trasformato.
const doppi = numeri.map((x) => x * 2);
console.log(doppi); // [2, 4, 6, 8, 10]


// ------------------------------------------------------------
// 2. filter(): seleziona alcuni elementi
// ------------------------------------------------------------
// Equivalente a: [x for x in numeri if x > 2]
// Restituisce un NUOVO array con solo gli elementi per cui la funzione ritorna true.
const grandi = numeri.filter((x) => x > 2);
console.log(grandi); // [3, 4, 5]


// ------------------------------------------------------------
// 3. find(): cerca il primo elemento che soddisfa una condizione
// ------------------------------------------------------------
// A differenza di filter (che restituisce un array con TUTTI i match),
// find restituisce solo il PRIMO elemento trovato (non un array).
// Se non trova nulla, restituisce undefined.
const utenti = [
    { id: 1, nome: "Marco" },
    { id: 2, nome: "Anna" },
    { id: 3, nome: "Luca" },
];
const utente = utenti.find((u) => u.id === 2);
console.log(utente); // { id: 2, nome: 'Anna' }

const utenteInesistente = utenti.find((u) => u.id === 99);
console.log(utenteInesistente); // undefined


// ------------------------------------------------------------
// 4. includes(): il valore è presente nell'array?
// ------------------------------------------------------------
// Restituisce semplicemente true/false. Equivalente a "valore in lista" in Python.
const colori = ["rosso", "verde", "blu"];
console.log(colori.includes("verde"));  // true
console.log(colori.includes("giallo")); // false


// ------------------------------------------------------------
// 5. reduce(): riduce l'array a un singolo valore
// ------------------------------------------------------------
// Il metodo più flessibile e anche il più ostico all'inizio.
// Sintassi: array.reduce((accumulatore, elementoCorrente) => ..., valoreIniziale)
// Ad ogni iterazione, l'accumulatore prende il valore restituito dall'iterazione precedente; alla fine reduce restituisce l'accumulatore finale.
const somma = numeri.reduce(
    (accumulatore, numero) => accumulatore + numero,
    0 // valore iniziale dell'accumulatore
);
console.log(somma); // 15

// Esempio più avanzato: raggruppare un array di oggetti per una proprietà
const persone = [                           // Ogni persona ha due proprietà: nome e città
    { nome: "Marco", città: "Bologna" },
    { nome: "Anna", città: "Roma" },
    { nome: "Luca", città: "Bologna" },
];
const perCittà = persone.reduce((gruppi, persona) => {  // l'obiettivo è creare un gruppo per ogni città e metterci dentro i nomi delle persone che abitano lì.
    const chiave = persona.città;
    if (!gruppi[chiave]) gruppi[chiave] = [];       // se non esiste ancora un gruppo per la chiave, si crea un array vuoto
    gruppi[chiave].push(persona.nome);              // al gruppo viene aggiunto il nome della parsona 
    return gruppi;
}, {} // valore iniziale un dict vuoto
);
console.log(perCittà); // { Bologna: [ 'Marco', 'Luca' ], Roma: [ 'Anna' ] }


// ------------------------------------------------------------
// 6. Concatenare i metodi (method chaining)
// ------------------------------------------------------------
// Poiché map/filter restituiscono un nuovo array, si possono concatenare in sequenza: molto comune in JS, l'equivalente di più list comprehension in fila.
const risultato = numeri
    .filter((x) => x % 2 === 0) // tiene solo i pari: [2, 4]
    .map((x) => x * 10);        // li moltiplica per 10: [20, 40]
console.log(risultato); // [20, 40]


// ------------------------------------------------------------
// 7. Ordinare array: sort()
// ------------------------------------------------------------
// ATTENZIONE alla trappola più comune: sort() SENZA argomenti ordina
// convertendo ogni elemento in STRINGA, non numericamente!
const numeriDisordinati = [10, 1, 21, 2];
console.log(numeriDisordinati.sort()); // [1, 10, 2, 21] -> ordine alfabetico di stringhe, NON numerico ("10" < "2")

// Per ordinare numericamente serve una funzione di confronto:
// (a, b) => a - b   -> negativo se a < b (a prima), positivo se a > b (b prima), 0 se uguali
const numeriOrdinati = [10, 1, 21, 2].sort((a, b) => a - b);
console.log(numeriOrdinati); // [1, 2, 10, 21] -> ordine numerico crescente

const numeriDecrescenti = [10, 1, 21, 2].sort((a, b) => b - a);
console.log(numeriDecrescenti); // [21, 10, 2, 1] -> decrescente

// sort() su stringhe funziona bene di default (ordine alfabetico)
const nomi = ["Marco", "Anna", "Luca"];
console.log(nomi.sort()); // ["Anna", "Luca", "Marco"]

// IMPORTANTE: a differenza di map/filter/reduce, sort() MODIFICA
// l'array originale (mutating), non ne restituisce uno nuovo!
const originaleArr = [3, 1, 2];
const risultatoSort = originaleArr.sort();
console.log(originaleArr === risultatoSort); // true -> stesso array, sort() lo modifica e lo ritorna

// Per non modificare l'originale, si ordina una COPIA con lo spread operator:
const originaleSicuro = [3, 1, 2];
const copiaOrdinata = [...originaleSicuro].sort((a, b) => a - b);
console.log(originaleSicuro); // [3, 1, 2] -> invariato
console.log(copiaOrdinata);   // [1, 2, 3]

// reverse(): inverte l'ordine dell'array (anche questo muta l'originale!)
console.log([1, 2, 3].reverse()); // [3, 2, 1]


// ------------------------------------------------------------
// 8. forEach(): eseguire un'azione per ogni elemento
// ------------------------------------------------------------
// A differenza di map(), forEach() NON restituisce un nuovo array: la
// funzione passata restituisce sempre undefined. Si usa per "effetti
// collaterali" (stampare, salvare, ecc.), non per trasformare dati.
const fruttiForEach = ["mela", "banana", "pera"];

fruttiForEach.forEach((frutto, indice) => {
    console.log(indice + ": " + frutto); // 0: mela, 1: banana, 2: pera
});

const risultatoForEach = fruttiForEach.forEach((f) => f.toUpperCase());
console.log(risultatoForEach); // undefined -> ecco perché forEach non va usato per "trasformare" (usa map invece)


// ------------------------------------------------------------
// 9. Array come costanti
// ------------------------------------------------------------
// Come per gli oggetti (vedi 1_5), const su un array blocca solo la
// RIASSEGNAZIONE della variabile, non la modifica del CONTENUTO
// dell'array: push/pop/sort/ecc. funzionano comunque.
const arrayCostante = [1, 2, 3];
arrayCostante.push(4);     // OK: modifica il contenuto, non riassegna la variabile
console.log(arrayCostante); // [1, 2, 3, 4]

try {
    arrayCostante = [9, 9, 9]; // ERRORE: questo SÌ è una riassegnazione
} catch (errore) {
    console.log("Errore:", errore.message); // TypeError: Assignment to constant variable.
}

// Per un array davvero immutabile serve Object.freeze() (gli array sono oggetti):
const arrayCongelato = Object.freeze([1, 2, 3]);
try {
    arrayCongelato.push(4); // push lancia SEMPRE TypeError su un array congelato: non è più estensibile
} catch (errore) {
    console.log("Errore:", errore.message); // TypeError: Cannot add property 3, object is not extensible
}
console.log(arrayCongelato); // [1, 2, 3] -> invariato


// ------------------------------------------------------------
// 10. Esercizio: Array
// ------------------------------------------------------------
// Data una lista di prodotti con prezzo, ordinarli dal più economico
// al più caro, e stampare nome e prezzo di ciascuno con forEach.
const prodottiEsercizio = [
    { nome: "Tastiera", prezzo: 45 },
    { nome: "Monitor", prezzo: 200 },
    { nome: "Mouse", prezzo: 15 },
];

const prodottiOrdinati = [...prodottiEsercizio].sort((a, b) => a.prezzo - b.prezzo);
prodottiOrdinati.forEach((p) => console.log(p.nome + ": " + p.prezzo + "€"));
// Mouse: 15€
// Tastiera: 45€
// Monitor: 200€
