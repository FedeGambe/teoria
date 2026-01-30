import logging
from logging.handlers import RotatingFileHandler
import sys
from pathlib import Path

def setup_logger (
    name:str,                     # nome del logger
    level=logging.INFO,           # livello minimo
    log_to_file=False,            # scrivere su file?
    new_file = False,
    log_file="app.log",           # nome file
    max_bytes=2_000_000,          # dimensione massima file
    backup_count=5                # numero backup file rotanti
) -> logging.Logger:
    """
    Crea e restituisce un logger stabile con console e (opzionale) file.
    """
    logger = logging.getLogger(name)
    logger.setLevel(level)
    logger.propagate = False    # evita doppio logging dal root logger

    # 1. Evita duplicati se logger già configurato
    if logger.handlers:
        return logger

    # 2. FORMATTER: sia per console che per file. Per console è ridotto
    fmt_console = logging.Formatter("[%(levelname)s] %(message)s")
    fmt_file = logging.Formatter("%(asctime)s | %(levelname)s | %(name)s | %(filename)s:%(lineno)d | %(message)s")

    # 3.1. HANDLER CONSOLE
    console_handler = logging.StreamHandler()   # di default, se non esplicitato manda i log su sys.stderr
                                                # sys.stdout: è un output normale. Si usa quando si vuole che i log vengano trattati coome output normali.
                                                # sys.stderr: errori, avvisi, log di errore. SI usa quando si vuole separare gli output con i logs
    console_handler.setLevel(level)
    console_handler.setFormatter(fmt_console)
    logger.addHandler(console_handler)
    # 3.2. HANDLER FILE (opzionale)
    if log_to_file:
        log_path = Path(log_file)
        log_path.parent.mkdir(parents=True, exist_ok=True)
        if new_file:                            # Viene impostato su true ogni volta cancella il file vecchio per farle uno nuovo e pulito
            if log_path.exists():
                log_path.unlink()  # cancella il file esistente
        file_handler = RotatingFileHandler(log_file, maxBytes=max_bytes, backupCount=backup_count,encoding="utf-8")
        file_handler.setLevel(level)
        file_handler.setFormatter(fmt_file)
        logger.addHandler(file_handler)

    return logger


