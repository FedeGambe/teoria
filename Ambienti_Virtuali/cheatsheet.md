# Python venv – Cheatsheet

## Cos’è
Un **virtual environment (venv)** è un ambiente Python isolato contenuto in una cartella.
Serve per gestire dipendenze e versioni senza conflitti.

---

## Perché usarlo
- Isolamento delle librerie
- Evita conflitti di versione
- Ambiente riproducibile
- Non sporca Python globale
- Facile da eliminare e ricreare

---

## Struttura di un venv
- `bin/` (Mac/Linux) o `Scripts/` (Windows)
- `lib/`
- `pyvenv.cfg`

Tutto il venv vive in **una sola cartella**

---

## Dove creare il venv
- Dentro il progetto → `.venv/`
- Cartella esterna → `~/venvs/` o `C:\Users\...\venvs\`

---

## Best practice
- Usa `.venv` come nome standard
- Non versionare mai il venv
- Salva le dipendenze con `requirements.txt`
- Un venv per progetto

---

## Git
Aggiungi sempre al `.gitignore`:
```gitignore
venv/
.venv/
.ipynb_checkpoints/
