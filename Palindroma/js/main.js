//* funzione che aggiunge le lettere della parola al contrario
function isPalindrome(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    const letter = word[i];

    reverseWord += letter;
  }

  let result = false;
  if (reverseWord == word) {
    result = true;
  }

  return result;
}

//* chiedo di inserire una parola
let userWord = prompt("Inserisci una parola");

//* controllo se ci sono numeri
while (!isNaN(userWord)) {
  alert("Non sono accettati i numeri, inserisci una parola");
  userWord = prompt("Inserisci una parola");
}

//* contenitore per la parola reverse
let result = isPalindrome(userWord);

//* stampiamo se è palindroma oppure no
if (result) {
  console.log("è palindroma");
} else {
  console.log("non è palindroma");
}
