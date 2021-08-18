// code here
import Planet from "../script/planeta.js";


let guardarIngreso = [];
let guardarDistancia = [];
let guardarNombre = [];
let guardarPlaneta = [];
let guardarTamanio = [];


var enviarEvaluacion = (e) => {

    
    let ingresoN = [...document.querySelectorAll(".numeracion_planetas")];
    for (let i = 0; i < ingresoN.length; i++) {
        const elementI = ingresoN[i].value;
        guardarIngreso.push(elementI);
    }
    console.log(guardarIngreso);


    let distanciaP = [...document.querySelectorAll(".distancia_planetas")];
    for (let i = 0; i < distanciaP.length; i++) {
        const elementD = distanciaP[i].value;
        guardarDistancia.push(elementD);
    }
    console.log(guardarDistancia);

    let nombreP = [...document.querySelectorAll(".nombre_planetas")];
    for (let i = 0; i < nombreP.length; i++) {
        const elementN = nombreP[i].value;
        guardarNombre.push(elementN);
    }
    console.log(guardarNombre);   
    let tamanioP = [...document.querySelectorAll(".Tamanio_planetas")];
    for (let i = 0; i < tamanioP.length; i++) {
        const elementT = tamanioP[i].value;
        guardarTamanio.push(elementT);
       
    }
    console.log(guardarTamanio);
}
for (let x = 1; x <= guardarIngreso.length; x++) {
    let planeta = new Planet();
    planeta.distance = (elementD[x].value);
    planeta.name = (elementN[x].value);
    planeta.numero_clasif = (elementI[x].value);
    planeta.tamañ = (elementT[x].value);

    guardarPlaneta.push(planeta);
    console.log(x)
}

console.log(guardarPlaneta);
alert("Arreglo creado correctamente");


document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
