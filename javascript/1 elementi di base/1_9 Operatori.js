// ============================================================
// OPERATORI — istruzioni vs espressioni, precedenza, assegnazione, logici
// ============================================================

// ------------------------------------------------------------
// 1. Istruzioni (statement) vs Espressioni (expression)
// ------------------------------------------------------------
// Espressione: qualsiasi pezzo di codice che PRODUCE un valore.
// Istruzione:  un'azione completa, che non restituisce necessariamente un valore
//              (spesso CONTIENE espressioni al suo interno).
//
// Esempi di espressioni: 5 + 3, "ciao".toUpperCase(), x > 0, funzione()
// Esempi di istruzioni:  if (...) {...}, for (...) {...}, const x = 5;

const x = 5 + 3; // "5 + 3" è un'espressione (vale 8); "const x = ...;" è l'istruzione che la usa
console.log(x); // 8

// Un modo pratico per riconoscerle: un'espressione può stare a destra
// di un'assegnazione o dentro un console.log(), un'istruzione no.
console.log(5 + 3);      // ok: 5 + 3 è un'espressione
// console.log(if (true) {}); // ERRORE: if è un'istruzione, non produce un valore da passare

// L'operatore ternario invece È un'espressione (a differenza di if/else):
// per questo può stare dentro un'assegnazione o un console.log().
const risultatoTernario = x > 0 ? "positivo" : "non positivo";
console.log(risultatoTernario); // "positivo"


// ------------------------------------------------------------
// 2. Precedenza degli operatori
// ------------------------------------------------------------
// Come in matematica, alcuni operatori vengono valutati prima di altri.
// Ordine (dal più al meno prioritario, versione semplificata):
//   () parentesi > ** elevamento > * / % > + - > confronti > && > || > = assegnazione
console.log(2 + 3 * 4);   // 14, non 20 -> * ha precedenza su +
console.log((2 + 3) * 4); // 20 -> le parentesi forzano l'ordine

console.log(2 ** 3 ** 2); // 512, non 64 -> ** è associativo a destra: 2 ** (3 ** 2) = 2 ** 9
console.log(10 - 2 - 3);  // 5 -> gli operatori con la stessa precedenza si valutano da sinistra a destra (10-2=8, 8-3=5)

console.log(1 < 2 && 3 < 4); // true -> i confronti si valutano prima di &&
console.log(true || false && false); // true -> && ha precedenza su ||: equivale a true || (false && false)

// Regola pratica: in caso di dubbio, usa le parentesi. Non serve
// memorizzare l'intera tabella di precedenza, basta rendere esplicito
// l'ordine quando un'espressione diventa poco leggibile.


// ------------------------------------------------------------
// 3. Operatori di assegnazione
// ------------------------------------------------------------
// = assegna semplicemente. Gli altri sono "scorciatoie" che combinano
// un'operazione con l'assegnazione: a op= b  equivale a  a = a op b

let contatore = 10;
contatore += 5;  // contatore = contatore + 5
console.log(contatore); // 15

contatore -= 3;  // contatore = contatore - 3
console.log(contatore); // 12

contatore *= 2;  // contatore = contatore * 2
console.log(contatore); // 24

contatore /= 4;  // contatore = contatore / 4
console.log(contatore); // 6

contatore %= 4;  // contatore = contatore % 4 (resto della divisione)
console.log(contatore); // 2

contatore **= 3; // contatore = contatore ** 3
console.log(contatore); // 8

// Incremento/decremento: scorciatoie per += 1 e -= 1
let n = 0;
n++; // equivalente a n += 1
console.log(n); // 1
n--; // equivalente a n -= 1
console.log(n); // 0

// Assegnazione logica (ES2020): assegnano solo in certe condizioni
let a = null;
a ??= "valore di default"; // assegna SOLO se a è null o undefined (nullish)
console.log(a); // "valore di default"

let b = 0;
b ||= 99; // assegna SOLO se b è falsy (0 lo è!) -> attenzione, diverso da ??=
console.log(b); // 99

let c = "esiste";
c &&= "sovrascritto"; // assegna SOLO se c è già truthy
console.log(c); // "sovrascritto"


// ------------------------------------------------------------
// 4. Operatori di comparazione (riepilogo)
// ------------------------------------------------------------
// == / === già visti in 1_1 (differenza tipo). Qui il resto:
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true  -> maggiore o uguale
console.log(5 <= 4);  // false -> minore o uguale
console.log(5 != "5"); // false -> != converte i tipi come ==, quindi sono "uguali"
console.log(5 !== "5"); // true -> !== confronta anche il tipo, come ===


// ------------------------------------------------------------
// 5. Operatori logici
// ------------------------------------------------------------
// && (AND), || (OR), ! (NOT). In JS non restituiscono solo true/false:
// restituiscono uno dei due OPERANDI (short-circuit evaluation).

// && restituisce il primo valore falsy che trova, oppure l'ULTIMO valore se sono tutti truthy
console.log(true && "ciao");   // "ciao" -> primo è truthy, quindi valuta e restituisce il secondo
console.log(false && "ciao");  // false  -> il primo è già falsy, si ferma lì (short-circuit)
console.log(0 && "mai eseguito"); // 0 -> si ferma al primo falsy

// || restituisce il primo valore truthy che trova, oppure l'ULTIMO se sono tutti falsy
console.log(false || "default"); // "default" -> il primo è falsy, prova il secondo
console.log("ciao" || "default"); // "ciao" -> il primo è già truthy, si ferma lì

// ! inverte un booleano (o la "truthyness" di un valore)
console.log(!true);  // false
console.log(!0);     // true -> 0 è falsy, quindi !0 è true
console.log(!!"ciao"); // true -> trucco comune per convertire qualsiasi valore in booleano esplicito

// Uso pratico di && come "if compatto": esegue la seconda parte SOLO se la prima è truthy
const utente = { loggato: true, nome: "Mario" };
utente.loggato && console.log("Benvenuto " + utente.nome); // stampa, perché loggato è true


// ------------------------------------------------------------
// 6. Condizioni complesse
// ------------------------------------------------------------
// Combinare più confronti/operatori logici per esprimere regole più ricche.
const età = 25;
const haPatente = true;

if (età >= 18 && haPatente) {
    console.log("Può guidare");
}

const voto1 = 6;
const voto2 = 4;
if (voto1 < 6 || voto2 < 6) {
    console.log("Almeno un voto è insufficiente");
}

// Nullish coalescing (??): restituisce il valore di destra SOLO se
// quello di sinistra è null o undefined (a differenza di ||, che
// scatta per QUALSIASI valore falsy, incluso 0 o "").
const quantità = 0;
console.log(quantità || 10); // 10 -> ERRORE CONCETTUALE: 0 è un valore valido, ma || lo considera falsy!
console.log(quantità ?? 10); // 0  -> ?? lo lascia stare: 0 non è null/undefined

// Optional chaining (?.): accede a una proprietà annidata SENZA
// lanciare errore se un pezzo della catena è null/undefined.
const persona = { indirizzo: { città: "Bologna" } };
console.log(persona.indirizzo?.città);        // "Bologna"
console.log(persona.contatti?.email);         // undefined, NESSUN ERRORE (persona.contatti non esiste)
// console.log(persona.contatti.email);       // questo invece darebbe TypeError
