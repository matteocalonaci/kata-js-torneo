# MILESTONE 1

## Ragionamento

Per ogni elemento dell'array `concorrenti`, ad ogni giro di ciclo, al concorrente selezionato dovrà essere assegnata un'arma dall'array `armi`.

### Uso di `splice()`

L'uso di `splice()` garantisce che ogni arma venga assegnata solo una volta. 

- **`splice()`** richiede almeno due argomenti:
  - **index**: in questo caso, va a generare un numero casuale.
  - **deleteCount**: numero di elementi da rimuovere dall'array `armi`.

### Funzioni Utilizzate

- **`Math.floor()`**: 
  - Funzione che permette di ottenere un numero intero.

- **`Math.random()`**: 
  - Funzione che genera un numero casuale tra `0` e la lunghezza dell'array `armi`.

### Uso di `push()`

Utilizzo di `push()` per aggiungere l'oggetto `concorrenteObj` all'array `assegnazioni`.

- **`push()`**:
  - È un metodo degli array in JavaScript.
  - Aggiunge uno o più elementi alla fine di un array.



