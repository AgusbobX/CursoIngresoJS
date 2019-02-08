function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value)
if (edad >= 18) {
    alert("Sos mayor de edad")
} else {
    if (edad >= 13 && edad < 18) {
        alert("Sos adolecente")
    } else {
        alert("Sos menor de edad")
    }
}
}//FIN DE LA FUNCIÓN