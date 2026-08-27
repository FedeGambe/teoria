// ============================================================
// REGEX e DATE — cenni introduttivi
// ============================================================
// Due argomenti ampi che approfondiremo quando serviranno davvero
// (form validation per le regex, manipolazione date più avanti).
// Qui solo la sintassi di base e le trappole più comuni.


// ------------------------------------------------------------
// 1. Regex: differenza sintattica rispetto a Python
// ------------------------------------------------------------
// Python:  regex = re.compile(r"hello")
// JS:      le regex sono scritte direttamente tra due slash / /, senza bisogno di una funzione compile() o di importare nulla:
const regex = /hello/;

// Il metodo .test() restituisce true/false: la stringa contiene un match?
console.log(regex.test("hello world")); // true

// Si può anche usare una regex "al volo", senza assegnarla a una variabile:
console.log(/hello/.test("hello world")); // true

// Le regex in JS sono oggetti di tipo RegExp:
console.log(typeof regex); // "object"

// Le FLAG si mettono direttamente dopo lo slash di chiusura, es. "i" = case-insensitive
console.log(/ciao/i.test("CIAO")); // true -> senza la "i" sarebbe stato false

// Altri metodi utili: .exec() per estrarre i dettagli del match,
// string.match(regex) e string.replace(regex, sostituto) sul lato stringa.


// ------------------------------------------------------------
// 2. Date: rappresentare un momento nel tempo
// ------------------------------------------------------------
const adesso = new Date(); // crea un oggetto Date con l'istante corrente
console.log(adesso instanceof Date); // true

// Metodi principali per leggere i componenti di una data:
console.log(adesso.getFullYear()); // es. 2026 -> anno a 4 cifre
console.log(adesso.getDate());     // giorno del mese (1-31)

// ATTENZIONE alla trappola più famosa di Date: getMonth() è ZERO-BASED
console.log(adesso.getMonth());
// 0 = gennaio, 1 = febbraio, ... 11 = dicembre
// Quindi per stampare il mese "umano" bisogna sommare 1: adesso.getMonth() + 1

// Creare una data specifica (attenzione: qui il mese va indicato zero-based!)
const capodanno2026 = new Date(2026, 0, 1); // 0 = gennaio -> 1 gennaio 2026
console.log(capodanno2026.getFullYear(), capodanno2026.getMonth(), capodanno2026.getDate());
