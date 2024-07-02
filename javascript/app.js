// app para poner porcentajesa los precios de los productos de un  negocio para luego ser vendidos

// funcion 30%
function porcentajeA(productoA, porcentajeAgregadoA){
    return productoA * porcentajeAgregadoA;
}

// funcion 40%

function porcentajeB(productoB, porcentajeAgregadoB){
    return productoB * porcentajeAgregadoB;
}

// funcion 50%

function porcentajeC(productoC, porcentajeAgregadoC){
    return productoC * porcentajeAgregadoC;
}

// funcion 60%
function porcentajeD(productoD, porcentajeAgregadoD){
    return productoD * porcentajeAgregadoD;
}

// funcion para agregar porcentaje

function agregar (){
    let porcentajeAgregadoA = 1.3;
    let porcentajeAgregadoB = 1.4;
    let porcentajeAgregadoC = 1.5;
    let porcentajeAgregadoD = 1.6;

    // Bienvenida

    alert('Bienvenido a la app de porcentajes')

    let opcion = prompt('Que porcentaje queres agregar? 1)30% 2)40% 3)50% 4)60% \n ingrese una opcion para continuar');

    if(opcion == '1'){
        let productoA = parseFloat(prompt('ingrese el valor al que desea agregarle el porcentaje:'))
        if(isNaN(productoA)){alert('ingresa un numero valido')}else{
        let pesos = porcentajeA(productoA,porcentajeAgregadoA);
        alert(`el valor con el 30% agregado da: ${pesos}`);}


    } else if(opcion == '2'){
        let productoB = parseFloat(prompt('ingrese el valor al que desea agregarle el porcentaje:'))
        if (isNaN(productoB)){alert('ingresa un numero valido')}else{
        let pesos = porcentajeB(productoB,porcentajeAgregadoB);
        alert(`el valor con el 40% da: ${pesos}`);}


    } else if(opcion == '3'){
        let productoC = parseFloat(prompt('ingrese el valor al que desea agregarle el porcentaje:'))
        if (isNaN(productoC)){alert('ingresa un numero valido')}else{
        let pesos = porcentajeC(productoC,porcentajeAgregadoC);
        alert(`el valor con el 50% da: ${pesos}`);}


    } else if(opcion == '4'){
        let productoD = parseFloat(prompt('ingrese el valor al que desea agregarle el porcentaje:'))
        if (isNaN(productoD)){alert('ingresa un numero valido')}else{
        let pesos = porcentajeD(productoD,porcentajeAgregadoD);
        alert(`el valor con el 60% da: ${pesos}`);}
    } else { 
        alert('opcion no valida, seleccione una de las opciones validas.');
    }

    // Despedida
    alert('Gracias por utilizar la app! SALUDOS');

}
agregar();
