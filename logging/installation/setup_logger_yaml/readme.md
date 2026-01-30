# setup_logger_yaml

Utility di logging riutilizzabile per Python.
Questa versione usa un file YAML per configurare il logging, fornisce una funzione `setup_logger()` per creare un logger con:

- output su console
- output su file con rotazione (opzionale)
- formattazione predefinita
- comportamento stabile: evita duplicazioni di handler

---

## Installazione

```bash
pip install .
```
---

## Uso

```python
from setup_logger_pip.logger import setup_logger

logger = setup_logger(
    name="myapp",
    level=logging.INFO,
    log_to_file=True,
    new_file=False,
    log_file="logs/app.log",
    max_bytes=2_000_000,
    backup_count=5
)

logger.info("Logger inizializzato")
```

---

## Parametri della funzione

| Parametro    | Tipo | Default   | Descrizione                              |
| ------------ | ---- | --------- | ---------------------------------------- |
| name         | str  | -         | Nome del logger                          |
| level        | int  | INFO      | Livello minimo di log                    |
| log_to_file  | bool | False     | Abilita logging su file                  |
| new_file     | bool | False     | Se True cancella il file esistente       |
| log_file     | str  | app.log   | Nome file di log                         |
| max_bytes    | int  | 2_000_000 | Dimensione massima prima della rotazione |
| backup_count | int  | 5         | Numero di file di backup                 |

