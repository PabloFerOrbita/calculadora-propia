var resultado;
var operacion;
var numero;
var mostrarOperacion;
var mostrarResultado;

function cargarPagina(){
    mostrarOperacion = document.getElementById('operacion');
    mostrarResultado = document.getElementById('resultado');
    operacion = '';
    resultado = 0;
    numero = 0;
    document.getElementById('sumar').addEventListener('click', sumar);
    document.getElementById('restar').addEventListener('click', restar);
    document.getElementById('dividir').addEventListener('click', dividir);
    document.getElementById('multiplicar').addEventListener('click', multiplicar);
    document.querySelectorAll('.numero').forEach(element => {
        element.addEventListener('click', setNumero);
        
    });
}

function sumar(){
    operar();
    operacion = '+';
    showOperacion();

}

function restar(){
    operar();
    operacion = '-'
   showOperacion();
}

function multiplicar(){
    operar();
    operacion = "*"
   showOperacion();
}

function dividir(){
    operar();
    operacion = "/"
    showOperacion();
}

function setNumero(e){
    numero = numero + '' + this.value;
    numero = parseInt(numero);
    mostrarNumero();
    
}

function borrarActual(){
    numero = 0;
    
}

function operar(){
    switch(operacion){
        case '+':
            resultado += numero;
            showResultado();
            break;
        case '-':
            resultado -= numero;
            showResultado();
            break;
        case '/':
            resultado /= numero;
            showResultado();
            break;
        case '*':
            resultado *= numero;
            
            break;
    }
}

function mostrarNumero(){  
    mostrarResultado.value = numero;
}
function showOperacion(){
    mostrarOperacion.value = numero + ' ' + operacion;
}

function showResultado(){
    mostrarResultado.value = resultado;
    numero = 0;
}

window.addEventListener('load', cargarPagina)