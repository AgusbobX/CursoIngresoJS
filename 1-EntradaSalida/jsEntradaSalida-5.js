/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
var nombre; var edad; var letras;
function mostrar()
{	
    nombre = document.getElementById("elNombre").value
    edad = document.getElementById("laEdad").value
    alert("Usted se llama "+nombre+" y tiene "+edad+" años");
}

