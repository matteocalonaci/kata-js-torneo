//ARREY weapons(10)
const weapons = [
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
// Arrey copia di weapons
const availableWeapons = [...weapons];

//ARREY fighters(10)
const fighters = [
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

//arrey lottatore + arma assegnata
let obj_fighter = [];

// ciclo for
for (let i = 0; i < fighters.length; i++) {
  const armaScelta = availableWeapons.splice(
    Math.floor(Math.random() * availableWeapons.length),
    1
  )[0];

  //adesso vado a creare un oggetto che abbia come proprietà nome, arma
  const createObj = {
    name: fighters[i],
    weapon: armaScelta,
  };
  // vado ad aggiungere in obj_fighter l'oggetto creato
  obj_fighter.push(createObj);
}
console.log("OGGETTO BASE", obj_fighter);

// MILESTONE 2 - Allenamento:

// ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

//map
obj_fighter = obj_fighter.map((fighter) => {
  // Potenza base
  const base_power = Math.floor(Math.random() * 100) + 1;
  // Incremento della potenza
  const training = Math.floor(Math.random() * 100) + 1;

  // Calcolo la potenza dopo l'allenamento
  const power = base_power * training;

  // Aggiungo la proprietà nuova potenza all'oggetto
  return {
    ...fighter, // copio le proprietà
    power: power, // aggiungo potenza
  };
});

console.log("OGGETTO AGGIORNATO", obj_fighter);

// MILESTONE 3 - Qualificazione:
// escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

// filter()
let qualified_fighters = obj_fighter.filter((fighter) => {
  if (fighter.power < 2000) {
    console.log(`${fighter.name} non si è qualificato`);
    return false;
  } else {
    console.log(`${fighter.name} si è qualificato`);
    return true;
  }
});

// Se i concorrenti qualificati sono dispari
if (qualified_fighters.length % 2 !== 0) {
  // Arma casuale per Robot
  const armaScelta = weapons.splice(
    Math.floor(Math.random() * weapons.length),
    1
  )[0];

  // Robot
  const robot = {
    name: "Robot",
    weapon: armaScelta,
    power: 4000,
  };

  // Aggiungo Robot a qualified_fighters qualora fossero dispari
  qualified_fighters.push(robot);
}

console.log(qualified_fighters);

//MILESTONE 4 - Combattimento:

//i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta.

// Funzione per scomporre l'array in coppie
function pairUp(qualified_fighters) {
  const pairs = [];
  // i += 2 è un modo semplice e chiaro per incrementare l'indice di un ciclo di due unità
  for (let i = 0; i < qualified_fighters.length; i += 2) {
      // Crea una coppia con l'elemento corrente e il successivo
      const pair = qualified_fighters.slice(i, i + 2); 
      pairs.push(pair);
  }
  
  return pairs;
}

const fighterPairs = pairUp(qualified_fighters);
console.log(fighterPairs);

// In ogni scontro vincerà il combattente con la potenza più alta. In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.

//creo una funzione che restituisca il vincitore
function fight(fighter1, fighter2) {
  if (fighter1.power >= fighter2.power){
    console.log(`${fighter1.name} vs ${fighter2.name} - VINCE ${fighter1.name}(${fighter1.power})`);
    return fighter1
      } else if (fighter1.power < fighter2.power) {
        console.log(`${fighter1.name} vs ${fighter2.name} - VINCE ${fighter2.name}(${fighter2.power})`);
        return fighter2
      }  
  }

  // creo un array di vincitori
  const winners = []
  // ciclo su ogni coppia di combattenti
  for (let i = 0; i < fighterPairs.length; i++) {
    // chiamo la funzione fight per determinare il vincitore
    const winner = fight(fighterPairs[i][0], fighterPairs[i][1]);
    // aggiungo il vincitore all'array dei vincitori come oggetto
    winners.push({
      name: winner.name,
      power: winner.power
    });
  }

  console.log('Winners:', winners);




