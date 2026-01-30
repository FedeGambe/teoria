import logging
from logging.handlers import RotatingFileHandler
from pathlib import Path


def setup_logger(
    name: str,
    level=logging.INFO,
    log_to_file=False,
    new_file=False,
    log_file="app.log",
    max_bytes=2_000_000,
    backup_count=5
) -> logging.Logger:
    logger = logging.getLogger(name)
    logger.setLevel(level)
    logger.propagate = False

    if logger.handlers:
        return logger

    fmt_console = logging.Formatter("[%(levelname)s] %(message)s")
    fmt_file = logging.Formatter(
        "%(asctime)s | %(levelname)s | %(name)s | %(filename)s:%(lineno)d | %(message)s"
    )

    console_handler = logging.StreamHandler()
    console_handler.setLevel(level)
    console_handler.setFormatter(fmt_console)
    logger.addHandler(console_handler)

    if log_to_file:
        log_path = Path(log_file)
        log_path.parent.mkdir(parents=True, exist_ok=True)

        if new_file and log_path.exists():
            log_path.unlink()

        file_handler = RotatingFileHandler(
            log_file,
            maxBytes=max_bytes,
            backupCount=backup_count,
            encoding="utf-8"
        )
        file_handler.setLevel(level)
        file_handler.setFormatter(fmt_file)
        logger.addHandler(file_handler)

    return logger
