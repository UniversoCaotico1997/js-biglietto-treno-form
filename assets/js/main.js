// creaimo un form nel quale l'utente inserira i propri dati 
// {Nome, Cognome, età, Km, Anziano, bimbo e adulto}, 
// i dati verrano inviati attraverso il click ul pulsante
// Una volta compilato effettueremo uno sconto sul prezzo del biglietto

// selezioniamo i vari elementi della dom 

const userNameElement = document.getElementById('username')

const surNameElement = document.getElementById('surname')

const userAgeElement = document.getElementById('age')

const kmElement = document.getElementById('km')


const buttonSubmitElement = document.querySelector('.submit')
const buttonDeleteElement = document.querySelector('.delete')

buttonSubmitElement.addEventListener('click', function () {

      const userName = userNameElement.value
      const sureName = surNameElement.value
      const userAge = userAgeElement.value
      const km = kmElement.value
      const ticketPrice = km + 0.21.toFixed(2)


      const discountOver = 40
      const discoutnUnder = 20


      let ticketPriceUnder = ticketPrice * discoutnUnder / 100
      let ticketPriceOver = ticketPrice * discountOver / 100


      let newTicketPriceUnder = ticketPriceUnder.toFixed(2)
      let newTicketPriceOver = ticketPriceOver.toFixed(2)


      if (userAge < 18) {
            document.getElementById('price').innerHTML = newTicketPriceUnder
            console.log(`costo biglietto Minori ${newTicketPriceUnder}`);

      } else if (userAge > 65) {
            document.getElementById('price').innerHTML = newTicketPriceOver
            console.log(`costo biglietto Anziani ${newTicketPriceOver}`);

      } else {
            document.getElementById('price').innerHTML = ticketPrice
            console.log(`costo biglietto Adulti ${ticketPrice}`);

      }

      // Stampiamo  a schermo i dati ricavati 
      // selezioniamo l'elemento dalla dom 

      document.getElementById('primo').innerHTML = userName

      document.getElementById('secondo').innerHTML = sureName

      document.getElementById('terzo').innerHTML = userAge

      document.getElementById('quarto').innerHTML = km


})

buttonDeleteElement.addEventListener('click', function () {

      userNameElement.value = ''

      surNameElement.value = ''

      userAgeElement.value = ''

      kmElement.value = ''

      document.getElementById('primo').innerHTML = ''
      document.getElementById('secondo').innerHTML = ''
      document.getElementById('terzo').innerHTML = ''
      document.getElementById('quarto').innerHTML = ''
      document.getElementById('price').innerHTML = ''
})




