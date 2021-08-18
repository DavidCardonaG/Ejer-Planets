// code here
// importamos clase "Planet" de planeta.js
import Planet from "../script/planeta.js";

// Declaración de variables

let guardarIngreso = [];
let guardarDistancia = [];
let guardarNombre = [];
let guardarPlaneta = [];
let guardarTamanio = [];


var enviarEvaluacion = (e) => {
// Almacenamos datos de cada tipo, y los agregamos a los arrays guardarIngreso, guardarDistancia, guardarNombre, guardarTamanio, guardarPlaneta...
    
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

    for (let x = 1; x <= guardarIngreso.length; x++) {
        let planeta = new Planet();
        planeta.distance = document.getElementById(`d_planeta_${x}`).value;
        planeta.name = document.getElementById(`np_planeta_${x}`).value;
        planeta.numero_clasif = document.getElementById(`n_planeta_${x}`).value;
        planeta.tamañ = document.getElementById(`t_planeta_${x}`).value;
    
        guardarPlaneta.push(planeta);
        console.log(x)
    }
    
    console.log(guardarPlaneta);
    alert("Arreglo creado correctamente");
}

let ordernarValores = (e) => {
    /**
     * Generamos copia del arreglo en ambos casos.
     */
    let copiArregloValores = guardarIngreso.map(numero => numero);
    let copiaArregloPlanetas = guardarPlaneta.map(planeta => planeta);

    /**
     * Procedemos a ordenar el arreglo,  en el segundo caso,  emplearemos una propiedad de la 
     * clase planeta,  como elemento de comparacion en la funcion de ordenamiento
     */
    copiArregloValores.sort((a, b) => {
        return a - b;                   // array.prototype.sort => ordena elementos del array, en el caso de atributos tipo number 
    });                                 // requiere la expresión "a-b" para evitar que ordene por posición numérica, sino por lógica 
                                        // secuencial.
    copiaArregloPlanetas.sort((a, b) => {
        return a.numero_clasificacion - b.numero_clasificacion;
    });

    let copia2ArregloPlanetas = copiaArregloPlanetas.map(planeta => planeta);

    console.log("********Arreglos ascendente***********")
    console.log(copiArregloValores);
    console.log(copiaArregloPlanetas);

    console.log("********Arreglos descendente***********")
    copiArregloValores.reverse(); //El método reverse() invierte el orden de los elementos de un array. 
    copia2ArregloPlanetas.reverse(); //El primer elemento pasa a ser el último y el último pasa a ser el primero.
    console.log(copiArregloValores);
    console.log(copia2ArregloPlanetas);

}



document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
document.querySelector("#btn_ordenar_valores").addEventListener("click", ordernarValores);
