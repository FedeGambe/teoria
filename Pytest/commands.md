# Pytest Commands
I CLI pronti all'uso da usare nel terminale:

```bash
pytest

pytest -v

pytest -k test_name

pytest -m slow

pytest --maxfail=1

pytest -n auto

pytest --junitxml=result.xml
```
---

##Spiegazione comandi:

`pytest`: Esegue tutti i test nella directory corrente e sottodirectory

`pytest -v`: Modalità verbose: mostra il nome di ogni test e il suo risultato

`pytest -k test_name`: Esegue solo i test che contengono "test_name" nel nome

`pytest -m slow`: Esegue solo i test marcati con @pytest.mark.slow

`pytest --maxfail=1`: Interrompe l’esecuzione dopo il primo test fallito

`pytest -n auto`: Esegue i test in parallelo usando tutti i core disponibili (richiede pytest-xdist)

`pytest --junitxml=result.xml`: Salva i risultati dei test in formato XML (utile per CI/CD)
