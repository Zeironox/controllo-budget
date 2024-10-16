document.getElementById('aggiungi').addEventListener('click', function() {
    const budget = parseFloat(document.getElementById('budget').value);
    const prezzo = parseFloat(document.getElementById('prezzo').value);
    const quantità = parseInt(document.getElementById('quantità').value);
    
    let somma = 0;
    let tot = 0;

    if (isNaN(budget) || isNaN(prezzo) || isNaN(quantità) || budget <= 0 || prezzo <= 0 || quantità <= 0) {
        alert("Per favore, inserisci valori validi.");
        return;
    }

    somma += prezzo * quantità;
    tot += quantità;

    let risultati = document.getElementById('risultati');
    if (somma < budget) {
        risultati.innerHTML = `Somma totale: ${somma} <br> Totale articoli: ${tot}`;
    } else if (somma === budget) {
        risultati.innerHTML = `Hai raggiunto il budget: ${somma}`;
    } else {
        risultati.innerHTML = `Hai superato il budget: ${somma}`;
    }
});
