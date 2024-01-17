let pariDispari = prompt("scegli: pari o dispari");
let numUtente = parseInt(prompt("scrivi un numero da 1 a 5"));

//* controllo che il numero dell'utente sia compreso tra 1 e 5

while (numUtente < 1 || numUtente > 5) {
    numUtente = parseInt(prompt("Non hai scelto un numero compreso tra 1 e 5, riprova"))
}

//* creo una funzione che genera un numero random (da 1 a 5) per il computer

function randomNum(){
    let cpuNumber = Math.floor(Math.random() * 5) + 1;
    return cpuNumber;
}

let randNum = randomNum();

//* sommo i due numeri

let somma = randNum + numUtente;

//* dichiaro chi ha vinto

if (pariDispari === "pari" && somma % 2 == 0) {
    console.log("Hai vinto!");
} else if (pariDispari === "pari" && somma % 2 != 0) {
    console.log("Hai perso!");
} else if (pariDispari === "dispari" && somma % 2 != 0) {
    console.log("Hai vinto!");
} else if (pariDispari === "dispari" && somma % 2 == 0) {
    console.log("Hai perso!");
} else {
    console.log("Non hai scelto pari o dispari");
}

console.log("hai scelto:", pariDispari)
console.log("il numero del pc è:", randNum);
console.log("il numero che hai scelto è:", numUtente);
console.log("la somma dei numeri è:", somma);