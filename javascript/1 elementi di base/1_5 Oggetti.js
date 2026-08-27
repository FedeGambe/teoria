// ============================================================
// OGGETTI — la struttura dati più importante di JS
// ============================================================
// Un oggetto JS non è "solo" l'equivalente di un dict Python: è una
// struttura fondamentale del linguaggio. Quasi tutto in JS che non è
// un tipo primitivo (array, funzioni, Date, Map, Set...) è, sotto
// sotto, un oggetto.
//
// Python:
//   persona = { "nome": "Marco", "età": 30 }
//
// JS: sintassi simile, ma un oggetto può contenere anche METODI
// (funzioni associate all'oggetto), altri oggetti annidati, array:
const persona = {
    nome: "Marco",
    età: 30,
    saluta() {
        console.log("Ciao!");
    },
    indirizzo: {
        città: "Bologna",
        cap: 40100,
    },
    hobby: ["programmazione", "musica"],
};


// ------------------------------------------------------------
// 1. Dot notation vs bracket notation
// ------------------------------------------------------------
// Due modi per leggere (e scrivere) una proprietà.
console.log(persona.nome);   // Marco       -> dot notation
console.log(persona["età"]); // 30          -> bracket notation

// La bracket notation è indispensabile quando il nome della proprietà
// è dentro una variabile (la dot notation non lo permette):
const chiave = "nome";
console.log(persona[chiave]); // Marco -> persona.chiave non funzionerebbe (cercherebbe una proprietà letterale "chiave")

// Aggiungere una proprietà o un metodo: entrambe le notazioni funzionano
persona.cognome = "Rossi";  // dot notation
persona["sesso"] = "M";     // bracket notation

// Modificare una proprietà esistente: stessa cosa
persona.nome = "Luca";
// NB: persona è dichiarata con const, eppure possiamo modificarne le
// proprietà! const blocca solo la RIASSEGNAZIONE della variabile
// (persona = {...} darebbe errore), non la modifica dell'oggetto a
// cui la variabile punta.


// ------------------------------------------------------------
// 2. Proprietà vs metodo
// ------------------------------------------------------------
// Proprietà: un valore associato a una chiave.
// Metodo:    una funzione associata a una chiave (si "invoca" con le parentesi).
persona.saluta();                       // "Ciao!" -> è un metodo, va chiamato con ()
console.log(typeof persona.saluta);     // "function"

console.log(persona.hobby[0]);          // "programmazione" -> è una proprietà (un array)
console.log(typeof persona.hobby[0]);   // "string"


// ------------------------------------------------------------
// 3. Primitivi vs oggetti: per valore vs per riferimento
// ------------------------------------------------------------
// Concetto CHIAVE, diverso da come si ragiona di solito in Python.
// - I primitivi (number, string, boolean, null, undefined, bigint,
//   symbol) sono immutabili e vengono copiati "per valore": ogni
//   variabile ha la sua copia indipendente.
// - Gli oggetti sono mutabili e vengono maneggiati "per riferimento":
//   la variabile non contiene l'oggetto, contiene un riferimento
//   (puntatore) a dove l'oggetto vive in memoria.

// --- Primitivo: copia indipendente ---
let a = 5;
let b = a; // b riceve una COPIA del valore 5
b = 10;    // modifico solo b
console.log(a); // 5  -> a non è stato toccato
console.log(b); // 10

// --- Oggetto: riferimento condiviso ---
let obj1 = { nome: "Marco" };
let obj2 = obj1;      // obj2 riceve una copia del RIFERIMENTO, non un nuovo oggetto
obj2.nome = "Luca";    // modifico l'oggetto passando da obj2...
console.log(obj1.nome);    // "Luca" -> ...ma "si vede" anche da obj1!
console.log(obj1 === obj2); // true -> puntano allo stesso oggetto in memoria
/*
obj1 ──┐
       ├──► { nome: "Luca" }   (un solo oggetto in memoria)
obj2 ──┘
Non esistono due oggetti distinti: esistono due riferimenti allo
stesso oggetto. Modificarlo tramite uno dei due riferimenti modifica
l'oggetto stesso, quindi l'effetto è visibile anche dall'altro.
*/

// Per avere davvero due oggetti indipendenti bisogna CREARNE due:
const oggetto1 = { x: 1 };
const oggetto2 = { x: 1 }; // un secondo oggetto letterale, non un riferimento al primo
console.log(oggetto1 === oggetto2); // false -> stesse proprietà, ma oggetti distinti in memoria


// ------------------------------------------------------------
// 4. Copiare un oggetto (shallow copy)
// ------------------------------------------------------------
// Per ottenere un nuovo oggetto indipendente si usa Object.assign()
// oppure lo spread operator {...obj} (più comune oggi).
// Entrambi fanno una SHALLOW COPY (copia superficiale): copiano il
// primo livello di proprietà, ma se una proprietà è a sua volta un
// oggetto, viene copiato solo il RIFERIMENTO a quell'oggetto interno.
const persona1 = {
    nome: "Marco",
    età: 30,
    indirizzo: {
        città: "Bologna",
    },
};

// const persona2 = persona1; // ERRORE CONCETTUALE: persona2 sarebbe solo un riferimento a persona1
const persona2 = { ...persona1 }; // spread: crea un nuovo oggetto, proprietà di primo livello copiate

persona2.nome = "Luca";
console.log(persona1.nome); // "Marco" -> persona1 NON è stato toccato
console.log(persona2.nome); // "Luca"

// Ma con un oggetto annidato la shallow copy mostra il suo limite:
persona2.indirizzo.città = "Roma"; // indirizzo è un riferimento CONDIVISO tra persona1 e persona2
console.log(persona1.indirizzo.città); // "Roma" -> anche persona1 viene modificato!
// Per copiare anche i livelli annidati serve una "deep copy"
// (es. structuredClone(persona1), o librerie dedicate) — la vedremo quando servirà.


// ------------------------------------------------------------
// 5. Riepilogo tipi primitivi
// ------------------------------------------------------------
// In JS i tipi primitivi principali sono: string, number, boolean,
// undefined, null, bigint, symbol. Tutto il resto (oggetti, array,
// funzioni, Date, Map, Set...) è un oggetto.
console.log(typeof "ciao");    // "string"
console.log(typeof 42);        // "number"
console.log(typeof 10.5);      // "number" -> in JS non c'è distinzione int/float come in Python
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof 42n);       // "bigint" -> per numeri interi arbitrariamente grandi (nota la "n" finale)


// ------------------------------------------------------------
// 6. Template literals (l'equivalente delle f-string di Python)
// ------------------------------------------------------------
// Python:  print(f"Ciao {nome}")
// JS:      usa i BACKTICK ` (non ' o "), non le virgolette normali.
const n1 = 10;
const n2 = 20;
console.log(`La somma è ${n1 + n2}`); // "La somma è 30"
// ${...} non significa solo "inserisci una variabile": valuta una
// QUALSIASI espressione JavaScript e ne inserisce il risultato nella stringa.
console.log(`${n1} + ${n2} = ${n1 + n2}, doppio: ${(n1 + n2) * 2}`);


// ------------------------------------------------------------
// 7. Metodi Oggetti (Object.keys / values / entries / assign / freeze)
// ------------------------------------------------------------
// Strumenti sull'oggetto globale Object per ispezionare o trasformare
// un oggetto letterale (utili anche per iterarlo senza for...in).
const auto = { marca: "Fiat", modello: "Panda", anno: 2020 };

console.log(Object.keys(auto));   // ["marca", "modello", "anno"] -> array delle chiavi
console.log(Object.values(auto)); // ["Fiat", "Panda", 2020]      -> array dei valori
console.log(Object.entries(auto)); // [["marca","Fiat"], ["modello","Panda"], ["anno",2020]] -> coppie [chiave, valore]

// Object.entries() è comodo per iterare con destructuring:
for (const [chiave, valore] of Object.entries(auto)) {
    console.log(chiave + " -> " + valore);
}

// Object.assign(target, ...sorgenti): copia le proprietà di uno o più
// oggetti dentro target (e lo restituisce). Alternativa più "verbosa" allo spread {...}.
const base = { a: 1 };
const esteso = Object.assign({}, base, { b: 2 }); // {} vuoto come target -> non modifica base
console.log(esteso); // { a: 1, b: 2 }
console.log(base);   // { a: 1 } -> invariato

// Object.freeze(obj): rende l'oggetto IMMUTABILE (a differenza di
// const, che blocca solo la riassegnazione della variabile).
const congelato = Object.freeze({ x: 1 });
congelato.x = 99; // nessun errore lanciato (in modalità non-strict), ma l'assegnazione viene ignorata
console.log(congelato.x); // 1 -> invariato
console.log(Object.isFrozen(congelato)); // true


// ------------------------------------------------------------
// 8. This Keyword (introduzione)
// ------------------------------------------------------------
// `this` rappresenta "il contesto di chi sta chiamando la funzione".
// Il suo valore NON è fisso: dipende da COME la funzione viene invocata,
// non da dove è stata scritta. Approfondiremo i casi complessi (bind,
// call, apply, closures) più avanti; qui solo il comportamento base.

// Caso 1: dentro un METODO di un oggetto, `this` è l'oggetto stesso
const contoBancario = {
    saldo: 100,
    mostraSaldo() {
        console.log(this.saldo); // `this` = contoBancario, perché il metodo è chiamato come contoBancario.mostraSaldo()
    },
};
contoBancario.mostraSaldo(); // 100

// Caso 2: una funzione "normale" (non arrow) chiamata da sola, senza
// un oggetto davanti, ha `this` undefined (in modalità strict/moduli) o l'oggetto globale
function mostraThisIsolato() {
    console.log(this); // undefined in un modulo/strict mode
}
mostraThisIsolato();

// Caso 3: le ARROW FUNCTION non hanno un proprio `this`: "ereditano"
// quello dello scope in cui sono state DEFINITE, non di chi le chiama.
// Per questo, usate come metodo di un oggetto, si comportano in modo
// sorprendente per chi arriva da altri linguaggi:
const contoConArrow = {
    saldo: 500,
    mostraSaldo: () => {
        console.log(this); // NON è contoConArrow! è il `this` dello scope esterno (qui: undefined/global)
    },
};
contoConArrow.mostraSaldo(); // this.saldo sarebbe undefined, non 500

// Regola pratica: per i metodi di un oggetto usa la sintassi normale
// (function o metodo shorthand come in `mostraSaldo() {}`), NON arrow function.
// Le arrow function sono ideali invece dentro un metodo, quando serve
// mantenere il `this` "esterno" (es. dentro una callback) — lo vedremo
// nel dettaglio nel capitolo su scope e closures.


// ------------------------------------------------------------
// 9. Esercizio: Oggetti
// ------------------------------------------------------------
// Dato un oggetto prodotto, calcolare il prezzo scontato, elencare le
// sue proprietà con Object.entries(), e creare una copia modificata
// senza toccare l'originale.
const prodotto = { nome: "Cuffie", prezzo: 50, sconto: 0.2 };

function prezzoScontato(p) {
    return p.prezzo - p.prezzo * p.sconto; // `p` è un parametro qualsiasi: qui non serve `this`
}
console.log(prezzoScontato(prodotto)); // 40

for (const [chiave, valore] of Object.entries(prodotto)) {
    console.log(chiave + ": " + valore);
}

const prodottoScontato = { ...prodotto, prezzo: prezzoScontato(prodotto) };
console.log(prodotto.prezzo);         // 50 -> originale intatto
console.log(prodottoScontato.prezzo); // 40 -> copia modificata
