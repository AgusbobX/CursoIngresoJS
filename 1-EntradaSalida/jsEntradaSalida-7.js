/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var suma = parseInt(numero1) + parseInt(numero2);
    alert("La suma es: "+suma);
}

function restar()
{
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var resta = parseInt(numero1) - parseInt(numero2);
    alert("La resta es: "+resta);
	
}

function multiplicar()
{ 
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var multiplicar = parseInt(numero1) * parseInt(numero2);
    alert("La multiplicacion es: "+multiplicar);
}

function dividir()
{   
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var division = parseInt(numero1) / parseInt(numero2);
    alert("La division es: "+division);
}

