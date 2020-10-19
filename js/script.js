// Chiedi all'utente il suo nome

  var nome = prompt("Qual'è il tuo nome ?");

  //testiamo il funzionamento sull'inspector con console.log
  console.log(nome);

// Chiedi all'utente il suo cognome

  var cognome = prompt("Qual'è il tuo cognome ?");
  console.log(cognome);

// Chiedi all'utente il suo colore preferito

  var colorePreferito = prompt("Qual'è il tuo colore preferito ?");
  console.log(colorePreferito);

// Password generata

  var passwordGenerata = nome + cognome + colorePreferito + "19";

// Risposta Output pwgen

  document.getElementById('pwgen').innerHTML = "La tua password generata è: " + nome + cognome + colorePreferito + "19";

  console.log("La pw generata sarà", passwordGenerata );
