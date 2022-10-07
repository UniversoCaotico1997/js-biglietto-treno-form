// Descrizione:

// Scrivere un programma che chieda all’utente:

// Il numero di chilometri da percorrere


// Età del passeggero 

const element = document.getElementById("km");
element.addEventListener(`click`, function () {
    
    
})


// Il numero di chilometri da percorrere


// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const pricePerKm = 0.21
console.log(pricePerKm);

const ticketPrice = kmDaPercorrere * pricePerKm;
console.log(ticketPrice);

// va applicato uno sconto del 20% per i minorenni

const percentualeMinima = 20;
console.log(percentualeMinima);

const totaleMinimo = (prezzoInBaseAiKmPercorsi / 100) * percentualeMinima;
console.log(totaleMinimo);


// va applicato uno sconto del 40% per gli over 65.

const percentualeMassima = 40;
console.log(percentualeMassima);

const totaleMassimo = (prezzoInBaseAiKmPercorsi / 100) * percentualeMassima;
console.log(totaleMassimo);



// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

if (userAge < 18) {
    console.log(totaleMinimo);
    // applica uno sconto del 20%
    
} else if (userAge > 65) {
    console.log(totaleMassimo);
    // applica uno sconto del 40%
    

} else {
    console.log(ticketPrice); 
    // non applicare uno sconto
}


// MILESTONE 1:

// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.

// La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:

// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

// Il riepilogo dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

// Questo richiederà un minimo di ricerca.