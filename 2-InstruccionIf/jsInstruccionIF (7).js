function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);
var estadoCivil = document.getElementById("estadoCivil").value;

if (edad <= 18 && edad >= 0 && estadoCivil == "Casado" || edad <= 18 && edad >= 0 && estadoCivil == "Divorciado") {
    alert("Es muy chiquito para NO ser soltero");
}//FIN DE LA FUNCIÓN
}