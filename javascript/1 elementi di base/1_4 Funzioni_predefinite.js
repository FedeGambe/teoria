// ============================================================
// FUNZIONI PREDEFINITE — conversioni di tipo e Math
// ============================================================
// Le funzioni "built-in" più usate per convertire e validare i tipi
// primitivi, più una panoramica dell'oggetto Math.


// ------------------------------------------------------------
// 1. parseFloat() e parseInt(): stringa -> numero
// ------------------------------------------------------------

// parseFloat(): converte in numero mantenendo la parte decimale
console.log(parseFloat("3.14")); // 3.14

// parseInt(): converte in numero intero (tronca, non arrotonda)
console.log(parseInt("42")); // 42

// Attenzione: parseInt si ferma al primo carattere non numerico,
// ma non dà errore: restituisce quello che è riuscito a leggere.
console.log(parseInt("42px")); // 42

// Buona pratica: passare sempre la base (radix) come secondo argomento,
// di solito 10, per evitare ambiguità con notazioni non decimali.
console.log(parseInt("42", 10)); // 42


// ------------------------------------------------------------
// 2. isNaN(): il valore NON è un numero valido?
// ------------------------------------------------------------
// isNaN() prova prima a convertire il valore in numero, poi controlla
// se il risultato è NaN ("Not a Number").
console.log(isNaN("ciao")); // true  -> "ciao" non è convertibile in numero
console.log(isNaN(42));     // false -> 42 è già un numero valido

// Number.isNaN() è la versione "sicura": NON converte il valore prima
// di controllare, quindi è più prevedibile (preferibile a isNaN globale).
console.log(Number.isNaN("ciao")); // false -> "ciao" non è NaN, è proprio una stringa
console.log(Number.isNaN(NaN));    // true


// ------------------------------------------------------------
// 3. Number(), String(), Boolean(): conversioni esplicite di tipo
// ------------------------------------------------------------

// Number(): converte un valore in numero. Se non è convertibile, dà NaN.
console.log(Number("42"));   // 42
console.log(Number("ciao")); // NaN

// Altri strumenti utili sull'oggetto Number:
console.log(Number.isInteger(42));   // true  -> è un numero intero?
console.log(Number.isInteger(42.5)); // false
console.log(Number.parseInt("42px")); // 42   -> equivalente al parseInt globale
console.log(Number.parseFloat("3.14")); // 3.14

// String(): converte un valore in stringa
console.log(String(42)); // "42"

// Boolean(): converte un valore in booleano, seguendo le regole
// truthy/falsy viste nel capitolo sul controllo di flusso
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false


// ------------------------------------------------------------
// 4. Math: strumenti matematici
// ------------------------------------------------------------
console.log(Math.random()); // numero pseudo-casuale tra 0 (incluso) e 1 (escluso)

console.log(Math.round(4.5)); // 5 -> arrotonda al più vicino
console.log(Math.floor(4.9)); // 4 -> arrotonda per difetto (verso il basso)
console.log(Math.ceil(4.1));  // 5 -> arrotonda per eccesso (verso l'alto)

console.log(Math.abs(-7)); // 7 -> valore assoluto, elimina il segno

console.log(Math.max(3, 7, 2)); // 7 -> il più grande tra i valori passati
console.log(Math.min(3, 7, 2)); // 2 -> il più piccolo

console.log(Math.pow(2, 3)); // 8 -> 2 elevato alla 3
console.log(2 ** 3);         // 8 -> equivalente più leggibile con l'operatore **

console.log(Math.sqrt(16)); // 4 -> radice quadrata
