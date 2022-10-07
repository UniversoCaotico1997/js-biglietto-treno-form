// Descrizione:

// Scrivere un programma che chieda all’utente:

// Il numero di chilometri da percorrere

const kmDaPercorrere = Number (prompt(`Quanti chilometri devi fare?`));
console.log(kmDaPercorrere);


// Età del passeggero 

const userAge = Number (prompt(`Scrivi la tua età`));
console.log(userAge);



// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const pricePerKm = 0.21
console.log(pricePerKm);

let discoutn, ticketPrice;

// va applicato uno sconto del 20% per i minorenni

if (userAge < 18){
    // applica uno sconto del 20%
    discoutn = 0.2
} else if (userAge > 65) {
    // applica uno sconto del 40%
    discoutn = 0.4
} else {
    discoutn = 0
    // non applicare uno sconto
}


// va applicato uno sconto del 40% per gli over 65.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

// MILESTONE 1:

// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.

// La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:

// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

// Il riepilogo dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

// Questo richiederà un minimo di ricerca.