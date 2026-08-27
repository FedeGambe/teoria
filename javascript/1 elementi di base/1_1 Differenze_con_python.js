// ============================================================
// DIFFERENZE JS vs PYTHON — tipi, dichiarazioni, confronti
// ============================================================
// Qui sono raccolti i concetti di base che si comportano in modo diverso rispetto a Python: coercizione dei tipi, dichiarazione delle variabili, hoisting, null/undefined.


// ------------------------------------------------------------
// 1. Tipizzazione debole e coercizione implicita
// ------------------------------------------------------------
// In Python, sommare una stringa e un numero genera un TypeError.
// In JS, JavaScript prova a "convertire" i valori per far quadrare l'operazione: 
// questa conversione automatica si chiama coercizione, ed è una delle fonti di bug più comuni per chi arriva da Python.

const sommaConcatenata = '5' + 1; // '+' con una stringa concatena: converte 1 in "1"
console.log(sommaConcatenata); // '51' (stringa, non numero!)

const sottrazione = '5' - 1;   // '-', '*', '/' invece convertono la stringa in numero
console.log(sottrazione);      // 4

const moltiplicazione = '5' * 2;
console.log(moltiplicazione);  // 10

const divisione = '5' / 2;
console.log(divisione);        // 2.5

// Regola pratica: '+' con una stringa concatena SEMPRE.
// Gli altri operatori aritmetici convertono la stringa in numero.


// ------------------------------------------------------------
// 2. Confronto tra tipi diversi: == vs ===
// ------------------------------------------------------------
// == (confronto debole) converte i tipi prima di confrontare.
// === (confronto stretto) confronta anche il tipo, senza conversioni.
// Regola pratica: usa sempre === e !==. 
// Non c'è un motivo valido per usare == in codice moderno: elimina l'ambiguità della coercizione.

console.log('5' == 5);  // true  -> '5' viene convertito in numero prima del confronto
console.log('5' === 5); // false -> tipi diversi (string vs number), nessuna conversione


// ------------------------------------------------------------
// 3. Dichiarazione di variabili: var, let, const
// ------------------------------------------------------------
// Python non ha parole chiave per dichiarare variabili (si assegna e basta). 
// In JS invece la dichiarazione è obbligatoria e la parola chiave scelta cambia il comportamento della variabile.
//
//   const -> valore che non viene mai riassegnato (usala di default)
//   let   -> valore che cambierà nel tempo
//   var   -> sintassi vecchia (pre-ES6), oggi si evita quasi sempre

const nomeUtente = "Mario"; // non verrà riassegnata
let eta = 20;                // verrà riassegnata più avanti nel codice


// 3.1 Scope di blocco (tutto ciò che sta tra { })
// let e const rispettano i confini del blocco: fuori dal blocco non esistono più. 
// var, invece, ignora i blocchi: "esce" e restavisibile in tutta la funzione (o nello script, se è a livello globale).
{
    var contatoreVar = 10;
    let contatoreLet = 20;
    const contatoreConst = 30;

    console.log(contatoreVar);   // 10
    console.log(contatoreLet);   // 20
    console.log(contatoreConst); // 30
}

console.log(contatoreVar); // 10 -> var è ancora visibile fuori dal blocco
try {
    console.log(contatoreLet); // ReferenceError: contatoreLet non esiste qui fuori
} catch (errore) {
    console.log("Errore:", errore.message);
}


// 3.2 const non permette la riassegnazione
// (uso try/catch per mostrare l'errore reale invece di far crashare il file)
{
    const x = 10;
    try {
        x = 20; // tentativo di riassegnare una const
    } catch (errore) {
        console.log("Errore:", errore.message); // TypeError: Assignment to constant variable.
    }
}

// let invece si può riassegnare liberamente
{
    let x = 10;
    x = 20;
    console.log(x); // 20 -> nessun errore
}


// 3.3 Hoisting
// In Python l'hoisting non esiste. In JS, le dichiarazioni con var vengono concettualmente "sollevate" (hoisted) in cima allo scope:
// la variabile esiste da subito, ma con valore undefined finché non si arriva alla riga di assegnazione.
{
    console.log(varSollevata); // undefined -> la dichiarazione è "sollevata", il valore no. NESSUN ERRORE
    var varSollevata = 10;
    console.log(varSollevata); // 10
}

// let e const sono soggette a hoisting in modo diverso: esistono già nello scope, 
// ma sono in una "zona morta temporanea" (Temporal Dead Zone) finché non viene eseguita la riga di dichiarazione. 
// Accedervi prima genera un errore, non undefined.
{
    try {
        console.log(letInTDZ); // proviamo ad accedere prima della dichiarazione
    } catch (errore) {
        console.log("Errore:", errore.message); // ReferenceError: Cannot access 'letInTDZ' before initialization
    }
    let letInTDZ = 10;
    console.log(letInTDZ); // 10
}


// ------------------------------------------------------------
// 4. null e undefined
// ------------------------------------------------------------
/*  Python ha un solo valore per "niente": None. JS ne ha due, con significati diversi:
    undefined -> stato automatico: una variabile dichiarata ma mai inizializzata, o un parametro non passato, valgono undefined
    null      -> scelta esplicita del programmatore per dire "qui non c'è valore" */

let variabileNonInizializzata;
console.log(variabileNonInizializzata); // undefined (automatico, nessuno l'ha impostato)

const variabileNull = null;
console.log(variabileNull); // null (impostato esplicitamente)

// Curiosità: null == undefined è true, ma null === undefined è false
// (altro buon motivo per usare sempre ===).
console.log(null == undefined);  // true
console.log(null === undefined); // false


// ------------------------------------------------------------
// 5. Tipi primitivi vs oggetti
// ------------------------------------------------------------
// In Python "tutto è un oggetto". In JS invece esistono:
// - tipi primitivi (semplici, immutabili, senza metodi propri),
// - oggetti (strutture complesse che possono contenere altri valori e funzioni).

const numero = 5;        // primitivo
const stringa = 'ciao';  // primitivo
const booleano = true;   // primitivo

const oggetto = { chiave: 'valore' };               // oggetto
const array = [1, 2, 3];                            // oggetto (gli array sono un tipo speciale di oggetto)
const funzione = function () { return 'ciao'; };    // oggetto (anche le funzioni sono oggetti!)

console.log(typeof numero);   // 'number'
console.log(typeof stringa);  // 'string'
console.log(typeof booleano); // 'boolean'
console.log(typeof oggetto);  // 'object'
console.log(typeof array);    // 'object'   -> attenzione: typeof non distingue array da oggetto
console.log(typeof funzione); // 'function'

// Per sapere se una variabile è davvero un array si usa Array.isArray(), non typeof:
console.log(Array.isArray(array));   // true
console.log(Array.isArray(oggetto)); // false


// ------------------------------------------------------------
// 6. Array e oggetti: equivalenti Python -> JS (anteprima)
// ------------------------------------------------------------
// Python:  liste [] e dizionari {}
// JS:      array [] e oggetti {} — sintassi simile, ma metodi diversi.
// Approfondiremo array e oggetti nel dettaglio in un capitolo dedicato;
// qui solo gli equivalenti più immediati:

const numeri = [1, 2, 3];
numeri.push(4);   // aggiunge in fondo (equivalente a list.append() in Python)
numeri.pop();      // rimuove l'ultimo elemento (equivalente a list.pop())
console.log(numeri.length); // lunghezza dell'array, equivalente a len(lista) in Python

const quadrati = numeri.map((n) => n * n); // equivalente a una list comprehension [n**2 for n in numeri]
console.log(quadrati); // [1, 4, 9]
