// dichiaro il bottone fuori la funzione
const bottone = document.getElementById("bottone");

//creo la funzione al click
bottone.addEventListener ( "click", function () {

    //collego opzioni all id griglie
    const opzioni = document.getElementById("griglie");

    // prendo il valore di opzioni e lo trasformo in numero con parseint
    let griglie = parseInt(opzioni.value);

    // moltiplico per lo stesso numero per avere il totale delle celle
    let totGriglie = griglie * griglie

    console.log("le griglie da creare sono", totGriglie);

    console.log("le righe saranno di",griglie);

    //collego il container griglie ad una variabile
    const containerGriglie = document.querySelector (".container-griglie");

        //ripulisco il container ogni volta che clicco di nuovo start altrimenti
        //ogni volta che premo start creerebbe altri div
        containerGriglie.innerHTML = "";

        //creo un ciclo per creare i div
        for (let i = 1; i <= totGriglie; i++) {
            //creo elemento div 
            const nuovaCella = document.createElement ("div");
            //inserisco la classe al div creato
            nuovaCella.classList.add("celle");
            //do la width con lo stile inline sarebbe calc 100% / valore delle griglie
            nuovaCella.style.width = `calc(100% / ${griglie})`

            //dentro la cella scrivo il numero
            nuovaCella.innerHTML = `${i}`

            //con append appendo nuovaCella al containerGriglie
            containerGriglie.append ( nuovaCella );

            // al click del div nuovaCella
            nuovaCella.addEventListener("click", function (){

                //cambiamo con toggle il background se ce l'ha lo togliamo e viceversa
                this.classList.toggle("bg-cella");
                console.log(this.textContent);
            })

        }

})






