let somma = 0; // Variabile per tenere traccia della somma totale
let tot = 0;   // Variabile per tenere traccia del totale delle quantità

document.getElementById('aggiungi').addEventListener('click', function() {
    const budget = parseFloat(document.getElementById('budget').value);
    const prezzo = parseFloat(document.getElementById('prezzo').value);
    const quantità = parseInt(document.getElementById('quantità').value);
    
    // Controllo di validità
    if (isNaN(budget) || isNaN(prezzo) || isNaN(quantità) || budget <= 0 || prezzo <= 0 || quantità <= 0) {
        alert("Per favore, inserisci valori validi.");
        return;
    }

    // Calcolo la somma e il totale
    somma += prezzo * quantità; // Aggiungi il costo totale per questa voce
    tot += quantità;             // Aggiungi la quantità

    let risultati = document.getElementById('risultati');
    
    // Controlla se ha raggiunto o superato il budget
    if (somma < budget) {
        risultati.innerHTML = `Somma totale: ${somma.toFixed(2)} <br> Totale articoli: ${tot}`;
    } else if (somma === budget) {
        risultati.innerHTML = `Hai raggiunto il budget: ${somma.toFixed(2)}`;
    } else {
        risultati.innerHTML = `Hai superato il budget: ${somma.toFixed(2)}`;
    }
});
