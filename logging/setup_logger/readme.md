# setup_logger_yaml

Utility di logging riutilizzabile per Python.

La libreria può essere **installata tramite `pip`** e consente di **configurare il logging via API Python o tramite file YAML**.  
Fornisce funzioni per creare logger con configurazione consistente e senza duplicazioni di handler.

Caratteristiche principali:

- output su console
- output su file con rotazione (opzionale)
- formattazione predefinita
- comportamento stabile (evita la duplicazione degli handler)

---

## Installazione

### Da repository locale
```bash
pip install git+https://github.com/FedeGambe/teoria.git@main#subdirectory=logging/setup_logger
```
---

## Uso
### Metodo 1. API Python
```python
from setup_logger.logger import setup_logger

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

### Metodo 2. Configurazione YAML
```python
from setup_logger.yaml_logger import setup_logger_from_yaml

logger = setup_logger_from_yaml("logging.yaml", "myapp")
logger.info("Logger da YAML")

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