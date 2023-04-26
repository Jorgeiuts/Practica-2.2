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
    var nombre = document.getElementById('nombre').value;
    var password = document.getElementById('password').value;
    var Vpassword = document.getElementById('Vpassword').value;

    if (nombre == ''){
        alert("La casilla nombre no puede ir vacia");
        return false;
    }

    if (password == "" || Vpassword == ""){
        alert("Las casillas de contraseña no pueden ir vacias");
        return false;
    }else if (password != Vpassword) {
        alert("Las contraseñas ingresadas no coinciden");
        return false;
    }

    alert('Bienvenido, ' + nombre + ' !')
}

function calcularPrimos() {
    var numero = document.getElementById("numero").value;
    var primos = [];
    for (var i = 2; i <= numero; i++) {
        var esPrimo = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(i);
        }
    }
    var lista = document.getElementById("primos");
    lista.innerHTML = "";
    for (var k = 0; k < primos.length; k++) {
        var item = document.createElement("li");
        var texto = document.createTextNode(primos[k]);
        item.appendChild(texto);
        lista.appendChild(item);
    }
}

function infoPalabra() {

    var texto = document.getElementById("texto").value;

    var palabras = texto.split(" ");
    var numPalabras = palabras.length;
    var primeraPalabra = palabras[0];
    var ultimaPalabra = palabras[numPalabras - 1];
    var palabrasInverso = palabras.reverse().join(" ");
    var palabrasOrdenadasAz = palabras.sort().join(" ");
    var palabrasOrdenadasZa = palabras.sort().reverse().join(" ");

    var ventana = window.open('','Informacion de texto', 'width = 600, height = 400');

    ventana.document.write('<h1>Información del texto</h1>');
    ventana.document.write("<p>Número de palabras: " + numPalabras +
    "</p>");
    ventana.document.write("<p>Primera palabra: " + primeraPalabra +
    "</p>");
    ventana.document.write("<p>Última palabra: " + ultimaPalabra +
    "</p>");
    ventana.document.write("<p>Palabras en orden inverso: " +
    palabrasInverso + "</p>");
    ventana.document.write("<p>Palabras ordenadas de la a la z: " +
    palabrasOrdenadasAz + "</p>");
    ventana.document.write("<p>Palabras ordenadas de la z a la a: " +
    palabrasOrdenadasZa + "</p>");
}

    let imagenes = ["1.jpg", "2.jpg", "3.jpg"];
    let indice = 0;

    var imagen = document.getElementById("imagen")

    function fotoAnterior(){
        indice++;

        if(indice == imagenes.length){
            indice = 0;
        }

        imagen.src = "../img/" + imagenes[indice];
    }

    function fotoSiguiente(){

        indice--;

        if(indice == -1){
            indice = imagenes.length-1;
        }

        imagen.src = "../img/" + imagenes[indice];
    }
 
    const quiz = document.getElementById('quiz');
    const results = document.getElementById('results');
    const correctEl = document.getElementById('correct');
    const incorrectEl = document.getElementById('incorrect');
    quiz.addEventListener('submit', function(event) {
        event.preventDefault();
            const answers = {
            q1: 'b',
            q2: 'a',
            q3: 'b'
        };
    let numCorrect = 0;
    let numIncorrect = 0;

    for (let i = 1; i <= 3; i++) {
        const q = 'q' + i;
        const userAnswer = quiz.elements[q].value;

        if (userAnswer === answers[q]) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
        
    }

    correctEl.textContent = numCorrect;
    incorrectEl.textContent = numIncorrect;
    quiz.style.display = 'none';
    results.style.display = 'block';
    });