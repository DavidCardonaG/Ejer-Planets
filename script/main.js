// code here
import Planet from "../script/planeta.js";


var arrayValores;
let arrayDistance;
let arrayNamePlanets = [];
let arrayPlanets = [];
let arrayTamañ = [];

var enviarEvaluacion = (e) => {

    arrayValores = [...document.querySelectorAll(".numeracion_planetas").value];
    arrayDistance = [...document.querySelectorAll(".distancia_planetas").value];
    arrayNamePlanets = [...document.querySelectorAll(".nombre_planetas").value];
    arrayTamañ = [...document.querySelectorAll(".Tamanio_planetas").value];
}