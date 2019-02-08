function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value)
if  (!(edad >= 13 && edad <= 17)) { 
    alert("No sos un adolecente")
}
}//FIN DE LA FUNCIÓN