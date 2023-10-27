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

//console.log(day.value, month, year, outputDays.textContent);

//Any
let anyAvui = new Date();
let data = anyAvui.getUTCFullYear();
console.log(data)

//Mes
let mesAvui = new Date();
let data2 = mesAvui.getUTCMonth();
console.log(data2);