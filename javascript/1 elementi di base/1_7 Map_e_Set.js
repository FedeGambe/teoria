// ============================================================
// MAP e SET — strutture dati collezione (diverse da array.map()!)
// ============================================================
// Trappola classica per chi impara JS: array.map() (il METODO visto nel file precedente) e new Map()
// (la STRUTTURA DATI di questo file) non hanno nulla in comune se non il nome.


// ------------------------------------------------------------
// 1. Map: struttura chiave -> valore
// ------------------------------------------------------------
// Assomiglia a un oggetto plain ({}), ma è pensata specificamente come mappa di associazioni chiave-valore, con alcuni vantaggi:
// - la chiave può essere QUALSIASI valore (anche un oggetto, non solo stringhe)
// - mantiene l'ordine di inserimento in modo affidabile
// - ha una proprietà .size e metodi dedicati (get/set/has/delete)
const anagrafica = new Map();

anagrafica.set("mario", 30); // set(chiave, valore) -> aggiunge/aggiorna una coppia
anagrafica.set("anna", 25);
console.log(anagrafica)               // Map(1) { 'mario' => 30, 'anna' => 25 }
console.log(anagrafica.get("mario")); // 30 -> get(chiave) legge il valore
console.log(anagrafica.size);         // 2
console.log(anagrafica.has("anna"));  // true

// La chiave può essere un oggetto (con un oggetto plain {} non sarebbe possibile
// in modo affidabile: le chiavi degli oggetti vengono sempre convertite in stringhe)
const persona = { nome: "Marco" };
const ruoli = new Map();
ruoli.set(persona, "studente");     // la chiave è l'oggetto persona stesso
console.log(ruoli)                  // Map(2) { { nome: 'Marco' } => 'studente' }
console.log(ruoli.get(persona));    // "studente"

// Per iterare una Map:
for (const [chiave, valore] of anagrafica) {
    console.log(chiave + ": " + valore); // mario: 30, anna: 25
}


// ------------------------------------------------------------
// 2. Set: collezione di valori UNICI
// ------------------------------------------------------------
// Equivalente concettuale del set() di Python: un array in cui ogni valore può comparire una sola volta. 
// Utile per rimuovere duplicati o per controllare velocemente l'appartenenza di un valore.
const numeriUnici = new Set();

numeriUnici.add(10);
numeriUnici.add(20);
numeriUnici.add(10); // ignorato: 10 è già presente

console.log(numeriUnici);           // Set(2) { 10, 20 } -> il secondo 10 non compare
console.log(numeriUnici.size);      // 2
console.log(numeriUnici.has(20));   // true

// Modo rapido per togliere i duplicati da un array:
const conDuplicati = [1, 2, 2, 3, 3, 3];
const senzaDuplicati = new Set(conDuplicati);
console.log(senzaDuplicati); // Set(3) { 1, 2, 3 }

// Per tornare a un array (es. per poi usare map/filter/reduce su di esso):
const arraySenzaDuplicati = [...senzaDuplicati]; // spread operator su un Set -> array
console.log(arraySenzaDuplicati); // [1, 2, 3]
