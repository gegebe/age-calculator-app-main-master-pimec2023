// Buena suerte

/*
Una calculadora d'edat que ha de llegir els inputs de l'usuari, que son dia, mes i any. Cada dia que passi haurà de donar un valor diferent, encara que la entrada sigui li mateixa.
*/

let day = document.querySelector(".input-days");
let month = document.querySelector(".input-months");
let year = document.querySelector(".input-years");

let outputDays = document.querySelector(".output-days span");
let outputMonths = document.querySelector(".output-months span");
let outputYears = document.querySelector(".output-years span");

let button = document.querySelector("button");

function compareDate(){
    const inputDate = new Date(`${month.value}/${day.value}/${year.value}`)
    console.log(inputDate);

    const actualDate = new Date();
    let actualDay = actualDate.getDate();
    let actualMonth = actualDate.getMonth() + 1;
    let actualYear = actualDate.getFullYear();

    let actualFullDate = new Date(`${actualMonth}/${actualDay}/${actualYear}`); 
    console.log(actualFullDate);

    const diffTime = Math.abs(actualFullDate - inputDate);
    console.log(diffTime);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log("diffDays " + diffDays);

   //span de dies = diffDays;
   outputDays.textContent = diffDays;
    //span de mesos = 0
    outputMonths.textContent = 0;
    //span de anys = 0
    outputYears.textContent = 0;

    let diffMonths;
    let daysLeft;
    let diffYears;
    let monthsLeft;

    if (diffDays >= 30){ // calculem si ens interesa mesurar en mesos
        diffMonths = parseInt(diffDays / 30);
        daysLeft = diffDays % 30;
        // span de dies = daysLeft
        outputDays.textContent = daysLeft;
        // span de mesos = diffMonths
        outputMonths.textContent = diffMonths;
    }

    if (diffMonths >= 12){ // calculem si ens interesa calcular en anys
        diffYears = parseInt(diffMonths / 12);
        monthsLeft = diffMonths % 12;
        //span de mesos = monthsleft
        outputMonths.textContent = monthsLeft;
        //span de anys = diffYears
        outputYears.textContent = diffYears;
    }
}
button.addEventListener("click", compareDate);