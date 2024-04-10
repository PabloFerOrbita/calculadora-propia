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
    document.getElementById('igual').addEventListener('click', igual);
    document.querySelectorAll('.numero').forEach(element => {
        element.addEventListener('click', setNumero);
        
    });
  
}

function sumar(){
    if ( numero != ''){
    operar();
    
    }
    operacion = '+';
    showOperacion();
    

}

function igual(){
    operar();
   
}

function restar(){
    if ( numero != ''){
    operar();
    
    }
    operacion = '-'
   showOperacion();
    
}

function multiplicar(){
    if ( numero != ''){
    operar();
    
    }
    operacion = "*"
   showOperacion();
    
}

function dividir(){
    if ( numero != ''){
    operar();
    
    
    }
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
            numero = '';
            break;
        case '-':
            resultado -= numero;
            showResultado();
            numero = '';
            break;
        case '/':
            if (numero == 0){
                mostrarResultado.innerText = 'No se puede dividir entre 0';
            }
            resultado /= numero;
            showResultado();
            numero = '';
            break;
        case '*':
            resultado *= numero;
            showResultado();
            numero = '';
            break;
        default:
            resultado = numero;
            showResultado();
            numero = '';
            break;
    }
}

function igual() {
    if (operacion != ''){
    mostrarOperacion.innerText = resultado + ' ' + operacion + ' ' + numero + '=';
    operar();
    operacion = '';
    numero = 0;
    }
}

function mostrarNumero(){  
    if (operacion == ''){
        resultado = 0;
        mostrarOperacion.innerText = '';
    }
    mostrarResultado.innerText = numero;
}
function showOperacion(){
    mostrarOperacion.innerText = resultado + ' ' + operacion;
}

function showResultado(){
    mostrarResultado.innerText = resultado;
    
}

window.addEventListener('load', cargarPagina)