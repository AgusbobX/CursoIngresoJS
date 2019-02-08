function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Enero":
        alert("¡Que comiences bien el año!");
        break;
    case "Marzo":
        alert("¡A clases!");
        break;
    case "Julio":
        alert("¡Se vinen las vacaciones!")
        break;
    case "Diciembre":
        alert("¡Felices Fiestas!")
        break;
    default:
        alert("No pasa nada interesante")
}
}//FIN DE LA FUNCIÓN