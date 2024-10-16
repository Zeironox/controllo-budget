// script.js
let somma = 0;
let tot = 0;

function aggiungiAcquisto() {
    const budget = parseFloat(document.getElementById('budget').value);
    const prezzo = parseFloat(document.getElementById('prezzo').value);
    const quantita = parseInt(document.getElementById('quantita').value);
    
    if (isNaN(budget) || isNaN(prezzo) || isNaN(quantita)) {
        alert("Per favore, inserisci tutti i campi correttamente.");
        return;
    }

    somma += prezzo * quantita;
    tot += quantita;

    let risultato = "";
    
    if (somma === budget) {
        risultato = `Hai raggiunto il budget.<br>Somma totale: ${somma.toFixed(2)}<br>Totale degli acquisti: ${tot}`;
    } else if (somma > budget) {
        risultato = `Hai superato il budget.<br>Somma totale: ${somma.toFixed(2)}<br>Totale degli acquisti: ${tot}`;
    } else {
        risultato = `Somma attuale: ${somma.toFixed(2)}<br>Totale degli acquisti: ${tot}`;
    }

    document.getElementById('risultato').innerHTML = risultato;
}
