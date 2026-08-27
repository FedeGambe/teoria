# Pytest – Quick Reference

## Naming
- File di test: `test_*.py`, `*_test.py`
- Funzioni di test: devono iniziare con `test_`

---

## Comandi principali

pytest
# Esegue tutti i test nella directory corrente e sottodirectory

pytest -v
# Modalità verbose: mostra ogni test con il suo risultato

pytest test_file.py
# Esegue solo il file specificato

pytest -k keyword
# Esegue i test che contengono "keyword" nel nome

pytest -m marker
# Esegue solo i test marcati con @pytest.mark.marker

pytest --maxfail=1
# Interrompe l’esecuzione dopo N test falliti

pytest -n auto
# Esegue i test in parallelo (richiede pytest-xdist)

pytest --junitxml=result.xml
# Salva i risultati in formato XML (utile per CI/CD)

---

## Marker
- Uso: `@pytest.mark.<name>`
- Esecuzione: `pytest -m <name>`
- Esempi comuni: `slow`, `unit`, `integration`

---

## Fixture
- Definizione: `@pytest.fixture`
- Iniezione tramite parametro della funzione
- Condivisione tra file con `conftest.py`

---

## Parametrizzazione
- Decorator: `@pytest.mark.parametrize`
- Permette di eseguire lo stesso test con più set di dati

---

## Gestione test
- `@pytest.mark.xfail` → test atteso come fallito
- `@pytest.mark.skip` → test saltato

---

## Note rapide
- Pytest ignora funzioni che non iniziano con `test_`
- `conftest.py` non va importato
- I marker custom vanno registrati in `pytest.ini`
