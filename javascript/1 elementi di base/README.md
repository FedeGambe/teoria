# Sett. 1 – Fondamenti

Appunti riorganizzati del primo capitolo (cap. 1-18+ guida html.it).

## File

1. `0_Inserire_JS_in_HTML.html` — le 3 modalità per inserire JS in una pagina: script interno (head/body), esterno con `defer`/`async`. Non si esegue con `node`, va aperto nel browser.
2. `1_1 Differenze_con_python.js` — coercizione, `==` vs `===`, `var`/`let`/`const`, scope, hoisting, `null`/`undefined`, primitivi vs oggetti.
3. `1_2 Controllo di flusso.js` — truthy/falsy, `if/else`, `switch`, ternario, `while`/`do-while`, `for` (classico, `for...of`, `for...in`), `break`/`continue`, etichette. Esercizio: controllo di flusso.
4. `1_3 Funzioni.js` — dichiarazione/espressione/arrow, parametri, default/rest, ricorsione, funzioni di ordine superiore.
5. `1_4 Funzioni_predefinite.js` — `parseInt`/`parseFloat`, `isNaN`, `Number`/`String`/`Boolean`, `Math`.
6. `1_5 Oggetti.js` — oggetti letterali, dot/bracket notation, proprietà vs metodo, primitivi per valore vs oggetti per riferimento, shallow copy, template literals, metodi Object (keys/values/entries/assign/freeze), `this` (introduzione). Esercizio: oggetti.
7. `1_6 Array_metodi.js` — metodi funzionali degli array: `map`, `filter`, `find`, `includes`, `reduce`, method chaining, `sort`, `reverse`, `forEach`, array come costanti. Esercizio: array.
8. `1_7 Map_e_Set.js` — le strutture dati `Map` e `Set` (da non confondere con `array.map()`).
9. `1_8 Regex_e_Date.js` — cenni introduttivi a regex e all'oggetto `Date`.
10. `1_9 Operatori.js` — istruzioni vs espressioni, precedenza degli operatori, operatori di assegnazione (inclusi `??=`/`||=`/`&&=`), operatori di comparazione, operatori logici, condizioni complesse, nullish coalescing (`??`), optional chaining (`?.`).
11. `1_10 Numeri_avanzato.js` — proprietà di `Number` (`MAX_SAFE_INTEGER`, `EPSILON`, ecc.), metodi (`toFixed`, `toPrecision`, `toString(radix)`), BigInt approfondito. Esercizio: numeri.
12. `1_11 Stringhe.js` — creazione, immutabilità, metodi di ricerca/estrazione (`slice`, `indexOf`, `includes`...) e di trasformazione (`split`, `replace`, `padStart`...). Esercizio: stringhe.
13. `1_12 Esercizi_capitolo1.js` — esercizi riassuntivi per gli argomenti senza file dedicato: variabili, tipi di dati, date, cicli, funzioni.

Tutti i file `.js` sono testati con `node` e girano senza errori dall'inizio alla fine.

## Note sulla revisione del 25/08

Gli appunti di "Oggetti" arrivavano come un unico file (`1_5 Oggetti.js` nella cartella radice) che mischiava argomenti diversi e, nella seconda metà, testo incollato senza formattarlo come commento — cosa che avrebbe mandato in errore l'esecuzione. Correzioni principali:

- **Sezioni non commentate**: da metà file in poi (Map, Set, Regex, Date) il testo non era racchiuso in `//` o `/* */`: eseguendolo, JS lo avrebbe interpretato come codice e sarebbe andato in errore. Riscritto tutto come commenti + esempi eseguibili.
- **Variabili ridichiarate nello stesso file**: `numeri` dichiarata 3 volte (array, poi `new Set()`, poi di nuovo `new Set()`) e `utenti` 2 volte (array, poi `new Map()`) — in Node questo è un `SyntaxError` che blocca l'intero file. Separate nei file per argomento, con nomi distinti dove serviva (`numeriUnici`, `anagrafica`...).
- **Split per argomento**: il contenuto originale spaziava da oggetti a metodi array a Map/Set a regex/Date — troppo eterogeneo per un solo file, quindi diviso in `1_5`...`1_8`.
- Il file originale (grezzo) è conservato come `1_5 Oggetti.js.bak_originale` nella stessa cartella — puoi cancellarlo quando vuoi, non l'ho eliminato per non perdere nulla.

## Note sulla revisione del 26/08

Confrontando il programma completo di Sett. 1 con i file esistenti sono emersi diversi argomenti mancanti o solo accennati: inserire JS in HTML, istruzioni vs espressioni, precedenza operatori, operatori di assegnazione/logici, BigInt e proprietà di `Number`, l'intero blocco stringhe/metodi stringa, `sort`/`forEach`, array come costanti, metodi Object, `this` (introduzione), e gli esercizi mancanti per diversi argomenti. Aggiunti i file `0_Inserire_JS_in_HTML.html`, `1_9`...`1_12` ed estesi `1_5` e `1_6` con le sezioni mancanti (vedi elenco file sopra). Il capitolo 1 ora copre l'intero programma indicato.

Prossimo step dal piano di studio: **Sett. 2 – Oggetti, this, scope, closures, arrow function** (cap. 19-34) — `this` approfondito e le closures restano da coprire.
