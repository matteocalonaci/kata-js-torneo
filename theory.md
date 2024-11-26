# MILESTONE 1

## Ragionamento

Per ogni elemento dell'array `fighters`, ad ogni giro di ciclo, al concorrente selezionato dovrà essere assegnata un'arma dall'array `weapons`.

### Uso di `ciclo for`
Creo un oggetto per ciascun fighter, associando a ciascuno di essi un'arma scelta casualmente dall'array availableWeapons.

- **`ciclo for`** richiede almeno due argomenti:
  - **inizializzazione**: Inizializza la variabile i a 0.
  - **condizione**: Il ciclo continua finché i è minore di `fighters.length`(10).
  - **incremento**: Incrementa i di 1 ad ogni iterazione.


## Metodi degli Array:

### Uso di `splice()`
Garantisce che ogni arma venga assegnata solo una volta. 
Dovendomi servire ancora dell'arrey weapons uso lo spread operator per creare una copia dell'arrey.

- **`splice()`** richiede almeno due argomenti:
  - **index**: in questo caso, va a generare un numero casuale.
  - **deleteCount**: numero di elementi da rimuovere dall'array `weapons`.


### Uso di `push()`
Utilizzo di `push()` per aggiungere l'oggetto `createObj` all'array `obj_fighter`.

- **`push()`**:
  - È un metodo degli array in JavaScript.
  - Aggiunge uno o più elementi alla fine di un array.

## Funzioni Globali

- **`Math.floor()`**: 
  - Funzione che permette di ottenere un numero intero.

- **`Math.random()`**: 
  - Funzione che genera un numero casuale tra `0` e la lunghezza dell'array `weapons`.





# MILESTONE 2

## Ragionamento

Per ogni `fighter`, calcolo la sua potenza di base del lottatore poi la moltiplico per il risultato dell'allenamento e l'aggiungo alle sue proprietà.


## Metodi degli Array:

### Uso di `map()`
è un metodo degli array in JavaScript che crea un nuovo array con i risultati della chiamata a una funzione fornita su ogni elemento dell'array originale. Non modifica l'array originale e restituisce un nuovo array.

- **`map()`** richiede almeno un parametro:
  - **element (fighter)**: rappresenta l'elemento corrente dell'array.
  - **index (opzionale)**: indica la posizione del fighter nell'array originale. (Non è utilizzato)
  - **array (opzionale)**: indica il numero totale di fighter presenti nell'array originale. (Non è utilizzato)

### Funzioni Globali
- **`Math.floor()`**: 
- **`Math.random()`**: 


# MILESTONE 3

## Ragionamento

Filtro `obj_fighter` per vedere se i lottatori hanno le qualità minime per partecipare al torneo. `power > 2000`.
Se hanno la potenza minima,faranno parte di un nuovo array `qualified_fighters`.

Dopo aver effettuato questo controllo, se i concorrenti qualificati sono dispari aggiugo un concorrente `Robot` per far disputare un incontro a tutti.

## Metodi degli Array:

### Uso di `filter()`
Cra un nuovo array che include solo gli elementi che soddisfano una condizione specifica.

- **`filter()`** richiede almeno un parametro:
  - **element (fighter)**: rappresenta l'elemento corrente dell'array.
  - **index (opzionale)**: indica la posizione del fighter nell'array originale. (Non è utilizzato)
  - **array (opzionale)**: Rappresenta l'array originale obj_fighter, che potrebbe essere utile se hai bisogno di confrontare l'elemento corrente con altri elementi nell'array. (Non è utilizzato)

- **`push()`**:

### Funzioni Globali
- **`Math.floor()`**: 
- **`Math.random()`**
