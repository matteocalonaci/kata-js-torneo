//ARREY ARMI(10)
const armi = [
  "Coltello",
  "Spada",
  "Ascia",
  "Bastone",
  "Pugnale",
  "Martello da guerra",
  "Lancia",
  "Nunchaku",
  "Katana",
  "Machete",
];
//ARREY CONCORRENTI(10)
const concorrenti = [
  "Marco Rossi",
  "Giulia Bianchi",
  "Luca Verdi",
  "Sara Neri",
  "Alessandro Gallo",
  "Francesca Conti",
  "Matteo Ferri",
  "Elena Moretti",
  "Simone Rinaldi",
  "Chiara Romano",
];

//MILESTONE 1 - Scelta dell’arma

//1 combattente =  un'arma casuale relativa lista.
//un'arma po' essere assegnata solo una volta

let assegnazioni = [];

for (let i = 0; i < concorrenti.length; i++) {
  const armaScelta = armi.splice(Math.floor(Math.random() * armi.length), 1)[0];

  //adesso vado a creare un oggetto che abbia come proprietà nome, arma
  const concorrenteObj = {
    nome: concorrenti[i],
    arma: armaScelta,
  };
  // vado ad aggiungere in assegnazioni l'oggetto creato
  assegnazioni.push(concorrenteObj);
}


// MILESTONE 2 - Allenamento:

// ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.


for (let i = 0; i < concorrenti.length; i++) {
    let training;
    //creo un numero casuale che corrisponderà alla potenza del concorrente.
    training = Math.floor(Math.random() * 100) + 1;
    //aggiungo la proprietà potenza e il suo valore a assegnazioni
    assegnazioni[i].potenza = training
    }
    
