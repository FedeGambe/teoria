// ============================================================
// STRINGHE — creazione, immutabilità e metodi
// ============================================================
// I template literals (backtick) sono già stati trattati in 1_5
// Oggetti.js; qui ci si concentra sulle stringhe "classiche" e sui
// loro metodi. In JS le stringhe sono primitivi IMMUTABILI: ogni
// metodo che sembra "modificarle" in realtà ne restituisce una NUOVA.

// ------------------------------------------------------------
// 1. Creazione e proprietà di base
// ------------------------------------------------------------
const singole = 'ciao';       // apici singoli
const doppie = "ciao";        // apici doppi -> equivalenti, è solo una preferenza di stile
const template = `ciao`;      // backtick -> permette interpolazione ${} e multi-riga

console.log(singole.length); // 4 -> lunghezza della stringa (come len() in Python, ma è una PROPRIETÀ, non una funzione)

// Accesso ai singoli caratteri: come un array, con indice a partire da 0
console.log(singole[0]);  // "c"
console.log(singole[3]);  // "o"
console.log(singole[99]); // undefined -> indice fuori range, nessun errore

// Immutabilità: non si può riassegnare un carattere con l'indice
let parola = "gatto";
parola[0] = "G"; // NON dà errore, ma NON HA EFFETTO: le stringhe sono immutabili
console.log(parola); // "gatto" -> invariata!
// Per "modificarla" bisogna creare una stringa nuova:
parola = "G" + parola.slice(1);
console.log(parola); // "Gatto"


// ------------------------------------------------------------
// 2. Metodi stringhe pt.1 — estrarre e cercare
// ------------------------------------------------------------
const frase = "  Ciao Mondo!  ";

// slice(inizio, fine): estrae una porzione (fine ESCLUSA). Indici negativi contano dalla fine.
console.log(frase.trim().slice(0, 4));  // "Ciao" -> dopo trim(), i primi 4 caratteri
console.log(frase.trim().slice(-6));    // "Mondo!" -> ultimi 6 caratteri

// substring(inizio, fine): simile a slice, ma non accetta indici negativi (li tratta come 0)
console.log("javascript".substring(0, 4)); // "java"

// indexOf(sottostringa): posizione della prima occorrenza, -1 se non trovata
console.log("javascript".indexOf("script")); // 4
console.log("javascript".indexOf("python")); // -1

// includes(sottostringa): esiste nella stringa? (come "in" su una stringa Python)
console.log("javascript".includes("script")); // true

// startsWith() / endsWith()
console.log("javascript".startsWith("java")); // true
console.log("javascript".endsWith("script")); // true

// toUpperCase() / toLowerCase()
console.log("Ciao".toUpperCase()); // "CIAO"
console.log("Ciao".toLowerCase()); // "ciao"

// trim() / trimStart() / trimEnd(): rimuove spazi bianchi (utile su input utente)
console.log(frase.trim());      // "Ciao Mondo!" -> spazi rimossi da entrambi i lati
console.log(frase.trimStart()); // "Ciao Mondo!  " -> solo a sinistra
console.log(frase.trimEnd());   // "  Ciao Mondo!" -> solo a destra


// ------------------------------------------------------------
// 3. Metodi stringhe pt.2 — trasformare
// ------------------------------------------------------------
// split(separatore): stringa -> array. Equivalente a str.split() in Python.
const csv = "mario,25,bologna";
console.log(csv.split(",")); // ["mario", "25", "bologna"]

// join() è un metodo degli ARRAY (non delle stringhe): fa l'operazione inversa
console.log(["mario", "25", "bologna"].join(" - ")); // "mario - 25 - bologna"

// replace(): sostituisce SOLO la prima occorrenza
console.log("mela mela mela".replace("mela", "pera")); // "pera mela mela"

// replaceAll(): sostituisce TUTTE le occorrenze
console.log("mela mela mela".replaceAll("mela", "pera")); // "pera pera pera"

// repeat(n): ripete la stringa n volte
console.log("ab".repeat(3)); // "ababab"

// padStart(lunghezza, riempimento) / padEnd(): allunga la stringa fino
// alla lunghezza indicata, aggiungendo caratteri all'inizio/fine.
// Uso tipico: formattare numeri con zeri iniziali (es. "05" invece di "5")
console.log("5".padStart(2, "0"));   // "05"
console.log("7".padStart(2, "0"));   // "07"
console.log("ciao".padEnd(8, "."));  // "ciao...."

// concat(): unisce stringhe (equivalente più verboso di +)
console.log("Ciao".concat(" ", "Mario")); // "Ciao Mario"

// Combinare più metodi in sequenza (method chaining, come per gli array)
const inputUtente = "   MARIO@EMAIL.com   ";
console.log(inputUtente.trim().toLowerCase()); // "mario@email.com"


// ------------------------------------------------------------
// 4. Esercizio: Stringhe
// ------------------------------------------------------------
// Data una frase, contare quante parole contiene, restituirla con la
// prima lettera maiuscola, e verificare se contiene una parola specifica.
const frasiEsercizio = "  il gatto dorme sul divano  ";
const pulita = frasiEsercizio.trim();
const parole = pulita.split(" ");

console.log(parole.length); // 5 -> numero di parole
console.log(pulita[0].toUpperCase() + pulita.slice(1)); // "Il gatto dorme sul divano"
console.log(pulita.includes("divano")); // true
