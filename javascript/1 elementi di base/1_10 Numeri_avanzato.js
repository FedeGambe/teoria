// ============================================================
// NUMERI — proprietà, metodi e BigInt
// ============================================================
// Completa 1_4 (funzioni predefinite/Math) con ciò che riguarda
// specificamente il tipo Number e il tipo BigInt.

// ------------------------------------------------------------
// 1. Proprietà statiche di Number
// ------------------------------------------------------------
// Valori "costanti" già pronti sull'oggetto Number, utili per sapere
// i limiti con cui si sta lavorando.
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 -> intero più grande rappresentabile senza perdere precisione
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE);        // il numero più grande in assoluto rappresentabile (non necessariamente "sicuro")
console.log(Number.EPSILON);          // 2.220446049250313e-16 -> la differenza minima tra due numeri distinguibili

// Perché "safe integer" conta: oltre MAX_SAFE_INTEGER i calcoli possono perdere precisione
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true! -> bug di precisione, non un errore

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(1 / 0);   // Infinity -> in JS non lancia un'eccezione come in Python
console.log(-1 / 0);  // -Infinity


// ------------------------------------------------------------
// 2. Metodi di un'istanza numerica
// ------------------------------------------------------------
// toFixed(n): arrotonda a n cifre decimali e restituisce una STRINGA
// (utile per prezzi, percentuali, output "carino")
const prezzo = 19.9567;
console.log(prezzo.toFixed(2));  // "19.96" (stringa!)
console.log(typeof prezzo.toFixed(2)); // "string"

// toPrecision(n): restituisce il numero con n cifre SIGNIFICATIVE totali
console.log((123.456).toPrecision(4)); // "123.5"

// toString(radix): converte il numero in stringa in una base diversa da 10
console.log((255).toString(2));  // "11111111" -> binario
console.log((255).toString(16)); // "ff"       -> esadecimale
// NB: servono le parentesi attorno al numero letterale, altrimenti
// il punto viene interpretato come inizio di un decimale: 255.toString() darebbe errore di sintassi.


// ------------------------------------------------------------
// 3. BigInt: interi arbitrariamente grandi
// ------------------------------------------------------------
// Il tipo number usa la precisione doppia IEEE 754: oltre
// Number.MAX_SAFE_INTEGER perde precisione (vedi sopra). BigInt
// risolve il problema per i soli numeri INTERI, senza limite di grandezza.

// Due modi per crearlo: literal con la "n" finale, o la funzione BigInt()
const grandeLiteral = 9007199254740993n; // nota la "n" alla fine
const grandeFunzione = BigInt(9007199254740993);
console.log(grandeLiteral);        // 9007199254740993n
console.log(typeof grandeLiteral); // "bigint"

// Le operazioni aritmetiche funzionano, ma SOLO tra BigInt e BigInt
console.log(10n + 20n); // 30n
console.log(10n * 3n);  // 30n

// Non si possono MAI mescolare number e bigint direttamente: errore
try {
    console.log(10n + 10); // TypeError: Cannot mix BigInt and other types
} catch (errore) {
    console.log("Errore:", errore.message);
}

// Per mescolarli bisogna convertire esplicitamente
console.log(10n + BigInt(10)); // 20n -> converto il number in bigint
console.log(Number(10n) + 10); // 20  -> oppure converto il bigint in number (rischio perdita precisione su numeri enormi)

// Confronti tra number e bigint invece SONO permessi (solo con == o <, >, non con ===)
console.log(10n == 10);  // true  -> == converte i tipi
console.log(10n === 10); // false -> tipi diversi, === non converte

// Quando usarlo: id molto grandi (es. da database), crittografia,
// calcoli finanziari ad altissima precisione. Nella pratica quotidiana è raro.


// ------------------------------------------------------------
// 4. Esercizio: Numeri
// ------------------------------------------------------------
// 1. Dato un prezzo con tanti decimali, stamparlo arrotondato a 2 cifre.
// 2. Convertire il numero 42 in binario ed esadecimale.
// 3. Sommare due BigInt e stampare il risultato.
const prezzoEsercizio = 7.489321;
console.log(prezzoEsercizio.toFixed(2)); // "7.49"

const numeroEsercizio = 42;
console.log(numeroEsercizio.toString(2));  // "101010"
console.log(numeroEsercizio.toString(16)); // "2a"

const bigIntEsercizio = 123456789012345678901234567890n + 1n;
console.log(bigIntEsercizio); // 123456789012345678901234567891n
