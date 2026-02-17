# Classi in Python

Le classi sono il cuore della **Programmazione Orientata agli Oggetti (OOP)** in Python.  
Permettono di raggruppare **dati (attributi)** e **funzioni che operano su quei dati (metodi)** in un'unica unità logica.

---

## Cos'è una classe e un oggetto

- **Classe**: definisce la struttura (gli attributi) e il comportamento (i metodi) che gli oggetti di quel tipo avranno.  
  È un **modello (blueprint)** per creare oggetti.
- **Oggetto (Istanza)**: è una realizzazione concreta della classe, un'entità individuale creata seguendo quel modello.

---

## Struttura di una classe

All'interno di una classe si possono definire due componenti principali:

1. **Attributi** – i dati che descrivono l'oggetto.  
   Esempi: colore, marca, età.
2. **Metodi** – funzioni che definiscono il comportamento dell'oggetto.  
   Esempi: guidare, fermarsi, cambiare colore.

---

## Sintassi di base

```python
class NomeClasse:
    def __init__(self, attributo1, attributo2):
        self.attributo1 = attributo1
        self.attributo2 = attributo2
    
    def metodo(self):
        print("Questo è un metodo della classe.")
