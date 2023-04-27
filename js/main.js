

// chiedere all’utente (prompt();) :

    // il numero di chilometri che vuole percorrere [userKm] (parseInt();)
    let userKm = parseInt(prompt("Quanti chilometri devi percorrere?"));

    // l’età del passeggero [userAge] (parseInt();)
    let userAge = parseInt(prompt("Quanti anni hai?"));

// calcolare il prezzo totale del viaggio, secondo queste regole:

    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let ticketPrice = userKm * 0.21;

    console.log(ticketPrice);

    // Sconto (?):
        
        if (userAge < 18) { // IF userAge < 18 {sconto del 20%}

            ticketPrice = ticketPrice - (ticketPrice / 100) * 20;

        }else if (userAge >= 65) { // ELSE IF userAge >= 65 {sconto del 40%}
            
            ticketPrice = ticketPrice - (ticketPrice / 100) * 40;

        } else {// ELSE no discount
            
            ticketPrice = ticketPrice;
        }

        console.log(ticketPrice);
        

// Output prezzo finale con massimo due decimali (.toFixed())

        document.getElementById("output_id").innerHTML = ticketPrice.toFixed(2);
