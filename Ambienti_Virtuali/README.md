# Ambienti virtuali in Python (venv)

## Cos’è un Virtual Environment (venv)

Un **virtual environment (venv)** è una copia isolata di Python contenuta in una cartella.
Ogni venv ha il proprio:

- interprete Python
- `pip`
- cartella `site-packages` con le librerie installate

Quando un venv è attivo, qualsiasi libreria installata rimane **isolata** e non influisce
sull’installazione globale di Python.

---

## Cosa trovi in questa cartella

In questa cartella sono presenti diversi file utili per imparare e usare i venv:

### Notebook (.ipynb)
Un file notebook che spiega la teoria e mostra esempi pratici sull’uso dei virtual environment.

### File Markdown (.md)
- **cheatsheet.md** → scheda rapida con i comandi principali  
- **comandi.md** → lista completa dei comandi più usati

### Cartella `commands/`
Contiene script pronti all’uso per creare e gestire venv:

- file **.ps1** (PowerShell)  
- file **.zsh** (Zsh / macOS / Linux)

---
## Perché conviene usare un venv

### Isolamento
Evita conflitti tra versioni di librerie.

Esempio:
- progetto A → `torch==2.0`
- progetto B → `torch==2.9`

Con ambienti separati possono coesistere senza problemi.

### Riproducibilità
È possibile condividere il progetto e ricreare lo stesso ambiente usando:

```bash
pip freeze > requirements.txt
