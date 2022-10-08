// Descrizione:

// Scrivere un programma che chieda all’utente:


// Il numero di chilometri da percorrere

const kmDaPercorrere = document.getElementById(`km`).value;


// Età del passeggero 

const userAge = document.getElementById(`userage`).value;


// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const priceForKm = 0.21


const ticketPrice = kmDaPercorrere * priceForKm 


// va applicato uno sconto del 20% per i minorenni

const percentualeMinima = 20;

const ticketPriceWithPercentualeMinima = (ticketPrice / 100) * percentualeMinima;


// va applicato uno sconto del 40% per gli over 65.

const percentualeMasima = 40;


const ticketPriceWithPercentualeMassima = (ticketPrice / 100) * percentualeMasima;


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

const element = document.querySelector(`button`);
      element.addEventListener(`click`, function(){
              // Al click deve generare 
              if (userAge < 18) {
                console.log(ticketPriceWithPercentualeMinima); 
                // Applica il prezzo con lo sconto minore 
          } else if (userAge > 65) {
                console.log(ticketPriceWithPercentualeMassima); 
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