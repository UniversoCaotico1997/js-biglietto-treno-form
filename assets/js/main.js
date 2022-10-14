// Descrizione:

// Scrivere un programma che chieda all’utente:

// SELEZIONIAMO 
      // Il nome 
      // I km
      // Età

const fullNameElement = document.getElementById(`name`);

const kmDaPercorrereElement  = document.getElementById(`km`);

const ageElement  = document.getElementById(`userage`);

// SELEZIONIAMO 
      // Pulsanti

const genereteElement = document.querySelector(`.generate`);

const cancelElement = document.querySelector(`.cancel`);

// Recuperiamo i dati attarverso 
      // Input

// const name = fullNameElement.value;

// const km = kmDaPercorrereElement.value;

// const age = ageElement.value;


 // Creiamo il prezzo del biglietto 
      // const / let

// const euro = 0.21

// const ticketPrice = km * euro


// // va applicato uno sconto del 20% per i minorenni

// const minimumDiscount = 0.20;

// const maxTicket = (ticketPrice / 100) * minimumDiscount;


// // va applicato uno sconto del 40% per gli over 65.

// const maxDiscount = 0.40;


// const minimumTicket = (ticketPrice / 100) * maxDiscount;


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:


genereteElement.addEventListener(`click`, function(){
            // Al click deve generare 
            const name = fullNameElement.value;
            console.log(name);

            const km = Number (kmDaPercorrereElement.value);
            console.log(km);
            
            const age = ageElement.value;
            console.log(age);

            const euro = 0.21

            const ticketPrice = km * euro

            // va applicato uno sconto del 20% per i minorenni

            const minimumDiscount = 0.20;

            const maxTicket = (ticketPrice / 100) * minimumDiscount;

            // va applicato uno sconto del 40% per gli over 65.

            const maxDiscount = 0.40;

            const minimumTicket = (ticketPrice / 100) * maxDiscount;

            if (age < 18) {
                  console.log(maxTicket); 
                  // Applica il prezzo con lo sconto minore 
            } else if (age > 65) {
                  console.log(minimumTicket); 
                  // Applica il prezzo con lo sconto massimo 
            } else {
                  console.log(ticketPrice);
                  // Tariffa normale in base ai Km
            }
      })

// MILESTONE 1:

// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.

// La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:

// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

// Il riepilogo dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

// Questo richiederà un minimo di ricerca.



