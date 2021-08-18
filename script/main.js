// code here
import Planet from "../script/planeta.js";


let guardarIngreso =[];
let guardarDistancia = [];
let guardarNombre = [];
let guardarPlaneta = [];
let guardarTamanio = [];


var enviarEvaluacion = (e) => {

    
    let ingresoN = [...document.querySelectorAll(".numeracion_planetas")];
    for (let i = 0; i < ingresoN.length; i++) {
        const element = ingresoN[i].value;
        guardarIngreso.push(element);
    }
    console.log(guardarIngreso);


    let distanciaP = [...document.querySelectorAll(".distancia_planetas")];
    let nombreP = [...document.querySelectorAll(".nombre_planetas")];
    let tamanioP = [...document.querySelectorAll(".Tamanio_planetas")];

    //ingresoN.forEach(e => e)



}

document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
