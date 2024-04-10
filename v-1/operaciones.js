var resultado;
var operacion;
var numero;
var mostrarOperacion;
var mostrarResultado;

function cargarPagina() {
    mostrarOperacion = document.getElementById('operacion');
    mostrarResultado = document.getElementById('resultado');
    operacion = '';
    resultado = 0;
    numero = 0;
    mostrarResultado.innerText = 0;
    document.getElementById('sumar').addEventListener('click', sumar);
    document.getElementById('restar').addEventListener('click', restar);
    document.getElementById('dividir').addEventListener('click', dividir);
    document.getElementById('multiplicar').addEventListener('click', multiplicar);
    document.getElementById('igual').addEventListener('click', igual);
    document.getElementById('borrar_actual').addEventListener('click', borrarActual);
    document.getElementById('borrar_todo').addEventListener('click', borrarTodo);
    document.getElementById('borrar_uno').addEventListener('click', borrarUno);
    document.querySelectorAll('.numero').forEach(element => {
        element.addEventListener('click', setNumero);

    });

}

function sumar() {
    if (numero !== '') {
        operar();

    }
    operacion = '+';
    showOperacion();


}

function borrarUno() {
    if (operacion !== '=') {
        numero = numero.toString();
        if (numero.length > 1) {
            numero = numero.substr(0, numero.length - 1);
            numero = parseInt(numero);
        } else{
            numero = 0
        }
        showNumero();
    } else {
        mostrarOperacion.innerText = ' ';
        operacion = '';
    }
}



function restar() {
    if (numero !== '') {
        operar();

    }
    operacion = '-'
    showOperacion();

}

function multiplicar() {
    if (numero !== '') {
        operar();

    }
    operacion = "*"
    showOperacion();

}

function dividir() {
    if (numero !== '') {
        operar();


    }
    operacion = "/"
    showOperacion();
}

function borrarActual() {
    numero = 0;
    showNumero();
}

function borrarTodo() {
    operacion = '';
    resultado = 0;
    numero = 0;
    mostrarOperacion.innerText = '';
    showNumero();

}

function setNumero(e) {
    if (operacion == '=') {
        operacion = '';
        numero = 0;
    }
    numero = numero + '' + this.value;
    numero = parseInt(numero);
    showNumero();

}



function operar() {
    switch (operacion) {
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
            if (numero == 0) {
                mostrarResultado.innerText = 'No se puede dividir entre 0';
            } else {
                resultado /= numero;
                showResultado();
            }
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

    if (operacion !== '' && operacion !== '=') {
        if (numero === '') {
            numero = resultado;
        }
        mostrarOperacion.innerText = resultado + ' ' + operacion + ' ' + numero + '=';
        operar();
        operacion = '=';
    }
}

function showNumero() {
    if (operacion === '=' || operacion === '') {
        resultado = 0;
        mostrarOperacion.innerText = '';
    }
    mostrarResultado.innerText = numero;
}
function showOperacion() {
    mostrarOperacion.innerText = resultado + ' ' + operacion;
}

function showResultado() {
    mostrarResultado.innerText = resultado;

}

window.addEventListener('load', cargarPagina)