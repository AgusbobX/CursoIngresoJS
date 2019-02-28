function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById("mes").value;

switch(mesDelAño) {
    case "Junio":
    case "Julio" :
    case "Agosto":
    case "Septiembre":
        alert("¡Abrigate que hace FRIO!");
        break;
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Falta para el invierno!");
        break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
        alert("Ya pasamos el frio, ahora el calor!")
        break;
}
}//FIN DE LA FUNCIÓN
