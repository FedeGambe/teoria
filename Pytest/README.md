# PYTEST

Appunti teorici su **pytest**.  
Il contenuto dettagliato è disponibile nei notebook associati.

## Risorse
- Tutorial: https://tutorial.edu.lat/pub/pytest?alias=tutorial-pytest
- Guida rapida: https://tutorial.edu.lat/pub/pytest/pytest-quick-guide/pytest-guida-rapida

---

## Argomenti trattati

1. **Introduzione a pytest**
   - Naming dei file (`test_*.py`, `*_test.py`)
   - Naming delle funzioni (`test_*`)
   - Output base e verbose (`-v`)

2. **Esecuzione dei test**
   - Esecuzione di file specifici
   - Selezione test con `-k <substring>`

3. **Marker**
   - Marker built-in
   - Marker personalizzati
   - Esecuzione con `-m <marker>`

4. **Fixture**
   - Definizione e utilizzo
   - Injection tramite parametri
   - Scope delle fixture

5. **conftest.py**
   - Fixture condivise tra più file di test
   - Risoluzione automatica delle fixture

6. **Parametrizzazione**
   - `@pytest.mark.parametrize`
   - Test con più set di input

7. **Gestione dei test**
   - `xfail`
   - `skip`

8. **Controllo dell’esecuzione**
   - Arresto dopo N fallimenti (`--maxfail`)
   - Esecuzione selettiva dei test

9. **Esecuzione in parallelo**
   - Plugin `pytest-xdist`
   - Opzione `-n`

10. **Report dei risultati**
    - Output XML (`--junitxml`)
    - Integrazione con CI/CD

---

📌 **Nota**  
Questa cartella contiene solo teoria e appunti.  
Gli esempi completi e i dettagli sono nel notebook.

