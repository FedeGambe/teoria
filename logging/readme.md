# Logging in Python

Questa cartella raccoglie materiale teorico e pratico sul logging in Python, con l’obiettivo di fornire una guida chiara, riutilizzabile e orientata a casi reali (script, automazioni, progetti data / backend).

Il logging è uno strumento fondamentale per:

- capire cosa sta succedendo nel codice mentre gira
- diagnosticare errori e comportamenti anomali
- sostituire `print()` con una soluzione strutturata e professionale

---

## Contenuto della cartella

All’interno della cartella trovi:

- `logging.ipynb`  
  - Notebook didattico  
  - Spiega i concetti base del modulo `logging`  
  - Include esempi pratici e commentati  
- `logger_utils.py` modulo py pronto all'uso.
- `setup_logger` contiene i materiali per installare il modulo via pip, e configurarlo con APY py o YAML (leggere la [README per l'installazione](https://github.com/FedeGambe/teoria/blob/main/logging/readme.md))

---

## Argomenti trattati

Il materiale copre progressivamente:

- Cos’è il logging e perché usarlo  
- Differenza tra `print()` e `logging`  
- Livelli di logging:
  - `DEBUG`
  - `INFO`
  - `WARNING`
  - `ERROR`
  - `CRITICAL`
- Configurazione base con `basicConfig`  
- Formattazione dei messaggi di log  
- Logger, Handler e Formatter  
- Logging su file  
- Buone pratiche  
