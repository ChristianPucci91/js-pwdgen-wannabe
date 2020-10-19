// Chiedi all'utente il suo nome,cognome,colore preferito e generiamo una pw

  var nome = prompt("Qual'è il tuo nome ?");
  var cognome = prompt("Qual'è il tuo cognome ?");
  var colorePreferito = prompt("Qual'è il tuo colore preferito ?");
  var passwordGenerata = nome + cognome + colorePreferito + "19";

// testiamo il funzionamento sull'inspector con console.log

  console.log("Nome :" , nome);
  console.log("Cognome: " , cognome);
  console.log("Colore preferito: " , colorePreferito);
  console.log("La pw generata sarà", passwordGenerata );

// Risposta Output pwgen

  document.getElementById('pwgen').innerHTML = nome + cognome + colorePreferito + "19";
