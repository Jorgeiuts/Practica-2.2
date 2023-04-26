function saludo() {
    var nombre = prompt('Como te llamas?');

    if (nombre != null && nombre != ""){
        alert('Hola ' + nombre);
    }
    else{
        alert('No se a ingresado ningun nombre');
    } 
}

function saludoS() {
    var nombre = prompt('Como te llamas?');

    if (nombre != null && nombre != ""){
        document.write("<p>Hola " + nombre + "</p>");
    }
    else {
        document.getElementById("error").style.display = 'block';
    }
}

function operaciones() {
    var numero1 = prompt('Ingresa tu numero 1');
    var numero2 = prompt('Ingresa tu numero 2');

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;
    var modulo = numero1 % numero2;

    document.write('Suma: ' + numero1 + ' + ' + numero2 + ' = ' + suma + ' <br/>');
    document.write('Resta: ' + numero1 + ' - ' + numero2 + ' = ' + resta + ' <br/>');
    document.write('Multiplicacion: ' + numero1 + ' * ' + numero2 + ' = ' + multiplicacion + ' <br/>');
    document.write('Division: ' + numero1 + ' / ' + numero2 + ' = ' + division + ' <br/>');
    document.write('Modulo: ' + numero1 + ' % ' + numero2 + ' = ' + modulo + ' <br/>');
}

function operacionesS() {
    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.getElementById('numero2').value);

    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;
    var modulo = numero1 % numero2;

    document.write('Suma: ' + numero1 + ' + ' + numero2 + ' = ' + suma + ' <br/>');
    document.write('Resta: ' + numero1 + ' - ' + numero2 + ' = ' + resta + ' <br/>');
    document.write('Multiplicacion: ' + numero1 + ' * ' + numero2 + ' = ' + multiplicacion + ' <br/>');
    document.write('Division: ' + numero1 + ' / ' + numero2 + ' = ' + division + ' <br/>');
    document.write('Modulo: ' + numero1 + ' % ' + numero2 + ' = ' + modulo + ' <br/>');
}

function validacion() {
    var form = document.getElementById('formulario');


}