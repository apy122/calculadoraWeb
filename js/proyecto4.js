let primerNumero;
let segundoNumero;

function mostrarResultado(resultado) {
    document.getElementById("visor").textContent = resultado;
}

function obtenerNumeros(){
    primerNumero = parseFloat(document.getElementById("visor1").value);
    segundoNumero = parseFloat(document.getElementById("visor2").value);
    return primerNumero, segundoNumero;
}

function suma(){
    obtenerNumeros();
    mostrarResultado(primerNumero + segundoNumero);
}

function resta(){
    obtenerNumeros();
    mostrarResultado(primerNumero - segundoNumero);
}

function multiplicacion(){
    obtenerNumeros();
    mostrarResultado(primerNumero * segundoNumero);
}

function division(){
    obtenerNumeros();
    if(segundoNumero == 0){
        mostrarResultado("Error");
    } else {
        mostrarResultado(primerNumero / segundoNumero);
    }
}

function potencia(){
    obtenerNumeros();
    if(segundoNumero <= 0){
        mostrarResultado("Error");
    } else {
        mostrarResultado(Math.pow(primerNumero, segundoNumero));
    }
}

function raiz(){
    obtenerNumeros();
    if(primerNumero <= 0){
        mostrarResultado("Error");
    } else {
        mostrarResultado(Math.sqrt(primerNumero));
    }
}

function absoluto(){
    obtenerNumeros();
    mostrarResultado(Math.abs(primerNumero));
}

function random(){
    obtenerNumeros();
    mostrarResultado(Math.floor(Math.random() * (segundoNumero - primerNumero + 1)) + primerNumero);
}

function round(){
    let preresultado = parseFloat(document.getElementById("visor").textContent);
    mostrarResultado(Math.round(preresultado));
}

function floor(){
    let preresultado = parseFloat(document.getElementById("visor").textContent);
    mostrarResultado(Math.floor(preresultado));
}

function ceil(){
    let preresultado = parseFloat(document.getElementById("visor").textContent);
    mostrarResultado(Math.ceil(preresultado));
}
function reset(){
    window.location.reload();
}