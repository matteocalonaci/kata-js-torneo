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
let obj_fighter= [];

// ciclo for
for (let i = 0; i < fighters.length; i++) {
  const armaScelta = availableWeapons.splice(Math.floor(Math.random() * availableWeapons.length), 1)[0];

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
obj_fighter = obj_fighter.map(fighter => {
  // Potenza base
  const base_power = Math.floor(Math.random() * 100) + 1;
  // Incremento della potenza
  const training = Math.floor(Math.random() * 100) + 1;
  
  // Calcolo la potenza dopo l'allenamento
  const power = base_power * training;
  
  // Aggiungo la proprietà nuova potenza all'oggetto
  return {
      ...fighter, // copio le proprietà 
      power: power // aggiungo potenza
  };
});


  console.log("OGGETTO AGGIORNATO", obj_fighter);

      
// MILESTONE 3 - Qualificazione:
// escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

// filter()
let qualified_fighters = obj_fighter.filter(fighter => {
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
  const armaScelta = weapons.splice(Math.floor(Math.random() * weapons.length), 1)[0];
  
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

    


