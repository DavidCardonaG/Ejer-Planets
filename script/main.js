// code here
import Planet from "../script/planeta.js";


var arrayValores;
let arrayDistance;
let arrayNamePlanets = [];
let arrayPlanets = [];
let arrayTamañ = [];


var enviarEvaluacion = (e) => {
    arrayValores =  [...document.querySelectorAll(".numeracion_planetas")];
    arrayDistance = [...document.querySelectorAll(".distancia_planetas")];
    arrayNamePlanets = [...document.querySelectorAll(".nombre_planetas")];
    arrayTamañ = [...document.querySelectorAll(".Tamanio_planetas")];
}