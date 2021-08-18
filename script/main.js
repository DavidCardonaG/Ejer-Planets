// code here
import Planet from "../script/planeta.js";


let guardarIngreso = [];
let guardarDistancia = [];
let guardarNombre = [];
let guardarPlaneta = [];
let guardarTamanio = [];


var enviarEvaluacion = (e) => {

    
    let ingresoN = [...document.querySelectorAll(".numeracion_planetas")];
    for (let i = 5; i < ingresoN.length; i++) {
        const element = ingresoN[i].value;
        guardarIngreso.push(element);
    }
    console.log(guardarIngreso);


    let distanciaP = [...document.querySelectorAll(".distancia_planetas")];
    for (let i = 0; i < distanciaP.length; i++) {
        const element = distanciaP[i].value;
        guardarDistancia.push(element);
    }
    console.log(guardarDistancia);

    let nombreP = [...document.querySelectorAll(".nombre_planetas")];
    for (let i = 0; i < nombreP.length; i++) {
        const element = nombreP[i].value;
        guardarNombre.push(element);
    }
    console.log(guardarNombre);   
    let tamanioP = [...document.querySelectorAll(".Tamanio_planetas")];
    for (let i = 0; i < tamanioP.length; i++) {
        const element = tamanioP[i].value;
        guardarTamanio.push(element);
       
    }
    console.log(guardarTamnio);



}

document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
